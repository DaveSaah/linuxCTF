<script setup lang="ts">
import { useEmailStore } from '@/stores/user'
import { ref } from 'vue'

const emailStore = useEmailStore()
const email = ref(emailStore.email)
const password1 = ref('')
const password2 = ref('')
const username = ref('')
const passwordErrMsg = ref('')
const passwordValidMsg = ref('')
const isPasswdNotValid = ref(false)
const doesPasswdNotMatch = ref(false)
const isEmailNotValid = ref(false)
const emailErrMsg = ref('')

function validateEmail() {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  if (!emailRegex.test(email.value)) {
    isEmailNotValid.value = true
    emailErrMsg.value = 'Invalid email address'
    console.log(isEmailNotValid.value, true)
  } else if (email.value === '') {
    isEmailNotValid.value = false
    console.log(isEmailNotValid.value, false)
  } else {
    isEmailNotValid.value = false
    emailErrMsg.value = ''
    console.log(isEmailNotValid.value, false)
  }
}

function validatePassword() {
  if (password1.value.length < 8) {
    isPasswdNotValid.value = true
    passwordValidMsg.value = 'Password must be at least 8 characters long'
  } else if (password1.value === '') {
    isPasswdNotValid.value = true
  } else {
    isPasswdNotValid.value = false
    passwordValidMsg.value = ''
  }
}

function confirmPassword() {
  if (password1.value !== password2.value) {
    doesPasswdNotMatch.value = true
    passwordErrMsg.value = 'Passwords do not match'
  } else {
    doesPasswdNotMatch.value = false
    passwordErrMsg.value = ''
  }
}
</script>

<template>
  <div class="flex flex-col lato-regular">
    <div class="relative overflow-hidden bg-black text-white">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
      <div class="absolute inset-0 opacity-30 bg-custom"></div>
      <div class="relative flex flex-col justify-center py-4 px-6">
        <RouterLink to="/">
          <h1 class="font-bold text-4xl">linux<span class="text-green-500">CTF</span></h1>
        </RouterLink>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center gap-3 py-20 bg-gray-100">
      <div class="py-6 text-center">
        <font-awesome-icon class="text-green-500 py-1 text-3xl" :icon="['fas', 'terminal']" />
        <h1 class="font-bold text-3xl">Create your account</h1>
        <p class="text-gray-500">Start your linux journey today</p>
      </div>
      <div class="bg-white p-12 rounded-md shadow-lg">
        <form class="flex flex-col gap-6">
          <div class="flex flex-col gap-2">
            <label for="username">Username</label>
            <input
              type="text"
              v-model="username"
              name="username"
              class="border-black border-b p-2 w-72 outline-0"
              required
            />
          </div>
          <div class="flex flex-col gap-2">
            <label for="email">Email</label>
            <input
              type="email"
              v-model="email"
              name="email"
              v-on:input="validateEmail"
              class="border-black border-b p-2 w-72 outline-0"
              required
            />
            <p v-show="isEmailNotValid" class="text-red-500 text-center">{{ emailErrMsg }}</p>
          </div>
          <div class="flex flex-col gap-2">
            <label for="password1">Password</label>
            <input
              type="password"
              v-model="password1"
              name="password1"
              class="border-black border-b p-2 w-72 outline-0"
              v-on:input="validatePassword"
              required
            />
            <p v-show="isPasswdNotValid" class="text-red-500 text-center">{{ passwordValidMsg }}</p>
          </div>
          <div class="flex flex-col gap-2">
            <label for="password2">Confirm Password</label>
            <input
              type="password"
              v-model="password2"
              name="password2"
              class="border-black border-b p-2 w-72 outline-0"
              v-on:input="confirmPassword"
              required
            />
            <p v-show="doesPasswdNotMatch" class="text-red-500 text-center">{{ passwordErrMsg }}</p>
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
