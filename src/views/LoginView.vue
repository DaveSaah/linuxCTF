<script setup lang="ts">
import { AUTH_API, COLORS, HTTP_STATUS } from '@/constants'
import { useUsernameStore } from '@/stores/user'
import axios, { AxiosError } from 'axios'
import Swal from 'sweetalert2'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Terminal } from 'lucide-vue-next'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

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
      usernameStore.setUsername(response.data.username)
      router.push('/dashboard')
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
    <div class="flex flex-col justify-center items-center gap-3 py-20">
      <Card class="p-12 rounded-md shadow-2xl bg-gray-50">
        <CardHeader>
          <CardTitle class="flex flex-col justify-center items-center">
            <Terminal class="text-green-500 w-10 h-10" />
            <h1 class="font-bold text-3xl">Welcome back</h1>
          </CardTitle>
          <CardDescription class="flex justify-center">
            Sign in to your account to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
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
            <Button
              type="submit"
              size="lg"
              class="cursor-pointer bg-green-500 hover:bg-green-700 text-white py-3 rounded"
            >
              Login
            </Button>
          </form>
        </CardContent>
        <CardFooter class="flex justify-center">
          <p class="text-center pt-4">
            Don't have an account?
            <RouterLink to="/register" class="text-blue-500">Register</RouterLink>
          </p>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>
