<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
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
    <div class="flex flex-col justify-center items-center gap-3 py-52 bg-gray-100">
      <div class="py-6 text-center">
        <font-awesome-icon class="text-green-500 py-1 text-3xl" :icon="['fas', 'terminal']" />
        <h1 class="font-bold text-3xl">Welcome back</h1>
        <p class="text-gray-500">Sign in to your account to continue</p>
      </div>
      <div class="bg-white p-12 rounded-md shadow-lg">
        <form class="flex flex-col gap-6">
          <div class="flex flex-col gap-2">
            <label for="email">Email</label>
            <input
              type="email"
              v-model="email"
              name="email"
              class="border-black border-b p-2 w-72 outline-0"
              required
            />
          </div>
          <div class="flex flex-col gap-2">
            <label for="password">Password</label>
            <input
              type="password"
              v-model="password"
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
