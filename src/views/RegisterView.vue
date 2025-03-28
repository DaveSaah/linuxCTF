<script setup lang="ts">
import { useEmailStore } from '@/stores/user'
import { ref, watch } from 'vue'
import axios, { AxiosError } from 'axios'
import Swal from 'sweetalert2' // SweetAlert2 for notifications
import { HTTP_STATUS, AUTH_API, COLORS } from '@/constants' // Import HTTP status codes
import { useRouter } from 'vue-router'

const router = useRouter()

// Store and reactive state
const emailStore = useEmailStore()
const formData = ref({
  username: '',
  email: emailStore.email,
  password1: '',
  password2: '',
})

const validation = ref({
  isEmailNotValid: false,
  emailErrMsg: '',
  isPasswdNotValid: false,
  passwordValidMsg: '',
  doesPasswdNotMatch: false,
  passwordErrMsg: '',
  isUsernameNotValid: false,
  usernameErrMsg: '',
})

// Validate Email
async function validateEmail() {
  if (!formData.value.email) {
    validation.value.isEmailNotValid = true
    validation.value.emailErrMsg = 'Email is required'
    return
  }

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

  if (!emailRegex.test(formData.value.email)) {
    validation.value.isEmailNotValid = true
    validation.value.emailErrMsg = 'Invalid email address'
    return
  }

  try {
    await axios.get(AUTH_API.REGISTER, { params: { email: formData.value.email } })
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>
    if (
      axiosError.response?.status === HTTP_STATUS.PRECONDITION_FAILED &&
      axiosError.response?.data?.message
    ) {
      validation.value.isEmailNotValid = true
      validation.value.emailErrMsg = axiosError.response.data.message // "email already exists"
      return
    }
  }

  validation.value.isEmailNotValid = false
  validation.value.emailErrMsg = ''
}

// Validate Username
async function validateUsername() {
  if (!formData.value.username) {
    validation.value.isUsernameNotValid = true
    validation.value.usernameErrMsg = 'Username is required'
    return
  }

  if (formData.value.username.length < 3) {
    validation.value.isUsernameNotValid = true
    validation.value.usernameErrMsg = 'Username must be at least 3 characters long'
    return
  }

  try {
    await axios.get(AUTH_API.REGISTER, { params: { username: formData.value.username } })
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>
    if (
      axiosError.response?.status === HTTP_STATUS.PRECONDITION_FAILED &&
      axiosError.response?.data?.message
    ) {
      validation.value.isUsernameNotValid = true
      validation.value.usernameErrMsg = axiosError.response.data.message // "username already exists"
      return
    }
  }

  validation.value.isUsernameNotValid = false
  validation.value.usernameErrMsg = ''
}

// Validate Password
function validatePassword() {
  validation.value.isPasswdNotValid = formData.value.password1.length < 8
  validation.value.passwordValidMsg = validation.value.isPasswdNotValid
    ? 'Password must be at least 8 characters long'
    : ''
}

// Confirm Password
function confirmPassword() {
  validation.value.doesPasswdNotMatch = formData.value.password1 !== formData.value.password2
  validation.value.passwordErrMsg = validation.value.doesPasswdNotMatch
    ? 'Passwords do not match'
    : ''
}

// Watch for changes in input fields
watch(() => formData.value.email, validateEmail)
watch(() => formData.value.username, validateUsername)
watch(() => formData.value.password1, validatePassword)
watch(() => formData.value.password2, confirmPassword)

// Submit Form with SweetAlert2
async function submitForm() {
  await validateEmail()
  await validateUsername()
  validatePassword()
  confirmPassword()

  if (
    validation.value.isEmailNotValid ||
    validation.value.isUsernameNotValid ||
    validation.value.isPasswdNotValid ||
    validation.value.doesPasswdNotMatch
  ) {
    Swal.fire({
      icon: 'error',
      title: 'Form Error',
      text: 'Please fix the errors before submitting!',
      confirmButtonColor: COLORS.ERROR,
    })
    return
  }

  try {
    const response = await axios.post(AUTH_API.REGISTER, {
      email: formData.value.email,
      username: formData.value.username,
      password: formData.value.password1,
    })

    if (response.status === HTTP_STATUS.OK) {
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful!',
        text: 'Sign into your new account',
        confirmButtonColor: COLORS.SUCCESS,
      }).then(() => {
        router.push('/login')
      })
    }
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>
    if (axiosError.response?.data?.message) {
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed!',
        text: axiosError.response.data.message,
        confirmButtonColor: COLORS.ERROR,
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Server Unavailable!',
        text: 'Could not connect to the server. Please try again later.',
        confirmButtonColor: COLORS.ERROR,
      })
    }
  }
}
</script>

<template>
  <div class="flex flex-col">
    <!-- Header -->
    <div class="relative overflow-hidden bg-black text-white">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
      <div class="absolute inset-0 opacity-30 bg-custom"></div>
      <div class="relative flex flex-col justify-center py-4 px-6">
        <RouterLink to="/">
          <h1 class="font-bold text-4xl">linux<span class="text-green-500">CTF</span></h1>
        </RouterLink>
      </div>
    </div>

    <!-- Registration Form -->
    <div class="flex flex-col justify-center items-center gap-3 py-16">
      <div class="py-6 text-center">
        <font-awesome-icon class="text-green-500 py-1 text-3xl" :icon="['fas', 'terminal']" />
        <h1 class="font-bold text-3xl">Create your account</h1>
        <p class="text-gray-500">Start your Linux journey today</p>
      </div>

      <div class="bg-gray-50 p-12 rounded-md shadow-2xl">
        <form class="flex flex-col gap-6" @submit.prevent="submitForm">
          <!-- Username -->
          <div class="flex flex-col gap-2">
            <label for="username">Username</label>
            <input
              type="text"
              v-model="formData.username"
              name="username"
              class="border-black border-b p-2 w-72 outline-0"
              required
            />
            <p v-show="validation.isUsernameNotValid" class="text-red-500 text-center">
              {{ validation.usernameErrMsg }}
            </p>
          </div>

          <!-- Email -->
          <div class="flex flex-col gap-2">
            <label for="email">Email</label>
            <input
              type="email"
              v-model="formData.email"
              name="email"
              class="border-black border-b p-2 w-72 outline-0"
              required
            />
            <p v-show="validation.isEmailNotValid" class="text-red-500 text-center">
              {{ validation.emailErrMsg }}
            </p>
          </div>

          <!-- Password -->
          <div class="flex flex-col gap-2">
            <label for="password1">Password</label>
            <input
              type="password"
              v-model="formData.password1"
              name="password1"
              class="border-black border-b p-2 w-72 outline-0"
              required
            />
            <p v-show="validation.isPasswdNotValid" class="text-red-500 text-center">
              {{ validation.passwordValidMsg }}
            </p>
          </div>

          <!-- Confirm Password -->
          <div class="flex flex-col gap-2">
            <label for="password2">Confirm Password</label>
            <input
              type="password"
              v-model="formData.password2"
              name="password2"
              class="border-black border-b p-2 w-72 outline-0"
              required
            />
            <p v-show="validation.doesPasswdNotMatch" class="text-red-500 text-center">
              {{ validation.passwordErrMsg }}
            </p>
          </div>

          <button
            type="submit"
            class="cursor-pointer bg-green-500 hover:bg-green-800 text-white py-3 rounded"
          >
            Create Account
          </button>
        </form>
        <p class="text-center pt-4">
          Already have an account?
          <RouterLink to="/login" class="text-blue-500">Sign in</RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>
