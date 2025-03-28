<script setup lang="ts">
import { ref } from 'vue'
import axios, { AxiosError } from 'axios'
import Swal from 'sweetalert2'
import { AUTH_API, COLORS, HTTP_STATUS } from '@/constants'
import { useUsernameStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const router = useRouter()

const formData = ref({
  email: '',
  password: '',
})

const usernameStore = useUsernameStore()

async function submitForm() {
  try {
    const response = await axios.post(
      AUTH_API.LOGIN,
      {
        email: formData.value.email,
        password: formData.value.password,
      },
      {
        withCredentials: true,
      },
    )
    if (response.status === HTTP_STATUS.OK) {
      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        text: 'Welcome to LinuxCTF',
        confirmButtonColor: COLORS.SUCCESS,
      }).then(() => {
        usernameStore.setUsername(response.data.username)
        router.push('/dashboard')
      })
    }
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>
    if (axiosError.response?.data?.message) {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed!',
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
    <div class="relative overflow-hidden bg-black text-white">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
      <div class="absolute inset-0 opacity-30 bg-custom"></div>
      <div class="relative flex flex-col justify-center py-4 px-6">
        <RouterLink to="/">
          <h1 class="font-bold text-4xl">linux<span class="text-green-500">CTF</span></h1>
        </RouterLink>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center gap-3 py-52 bg-gray-100">
      <div class="py-6 text-center">
        <font-awesome-icon class="text-green-500 py-1 text-3xl" :icon="['fas', 'terminal']" />
        <h1 class="font-bold text-3xl">Welcome back</h1>
        <p class="text-gray-500">Sign in to your account to continue</p>
      </div>
      <div class="bg-white p-12 rounded-md shadow-lg">
        <form class="flex flex-col gap-6" @submit.prevent="submitForm">
          <div class="flex flex-col gap-2">
            <label for="email">Email</label>
            <input
              type="email"
              v-model="formData.email"
              name="email"
              class="border-black border-b p-2 w-72 outline-0"
              required
            />
          </div>
          <div class="flex flex-col gap-2">
            <label for="password">Password</label>
            <input
              type="password"
              v-model="formData.password"
              name="password"
              class="border-black border-b p-2 w-72 outline-0"
              required
            />
          </div>
          <button
            type="submit"
            class="cursor-pointer bg-green-500 hover:bg-green-700 text-white py-3 rounded"
          >
            Login
          </button>
        </form>
        <p class="text-center pt-4">
          Don't have an account?
          <RouterLink to="/register" class="text-blue-500">Register</RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>
