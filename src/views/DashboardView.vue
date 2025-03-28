<script setup lang="ts">
import { useUsernameStore } from '@/stores/user'
const usernameStore = useUsernameStore()
import dashboardIcon from '@/assets/dashboard.png'
import Swal from 'sweetalert2'
import axios, { AxiosError } from 'axios'
import { useRouter } from 'vue-router'
import { AUTH_API, COLORS, HTTP_STATUS } from '@/constants'

const router = useRouter()

async function logout() {
  // Show confirmation dialog
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: 'You will be logged out of your account',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, log me out!',
    cancelButtonText: 'Cancel',
  })

  if (result.isConfirmed) {
    try {
      // Make logout request
      const response = await axios.get(AUTH_API.LOGOUT, { withCredentials: true })

      if (response.status === HTTP_STATUS.OK) {
        // Show success message
        await Swal.fire({
          title: 'Logged Out!',
          text: response.data.message,
          icon: 'success',
          confirmButtonColor: COLORS.SUCCESS,
        }).then(() => {
          usernameStore.$dispose()
          router.push('/login')
        })
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>
      if (axiosError.response?.data?.message) {
        Swal.fire({
          icon: 'error',
          title: 'Logout Failed!',
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
}
</script>

<template>
  <header class="flex items-center p-4 border-b border-b-gray-300 justify-between">
    <div class="flex items-center gap-x-3">
      <font-awesome-icon :icon="['fas', 'terminal']" />
      <p class="font-bold text-lg">Linux CTF Learning Platform</p>
    </div>
    <div class="flex items-center gap-x-3">
      <button
        class="flex gap-x-5 items-center border py-1 px-2 rounded-md border-gray-300 text-sm hover:bg-gray-100 cursor-pointer"
      >
        <font-awesome-icon :icon="['fas', 'user-group']" />Community
      </button>
      <button
        class="flex gap-x-5 items-center border py-1 px-2 rounded-md border-gray-300 text-sm hover:bg-gray-100 cursor-pointer"
      >
        <font-awesome-icon :icon="['fas', 'book-open']" />Resources
      </button>
    </div>
  </header>

  <div class="flex">
    <!-- sidebar navigation  -->
    <div class="flex flex-col items-start border-r border-r-gray-300 w-1/8 min-h-[94vh]">
      <div class="min-w-full grow">
        <!-- Dashboard title -->
        <div class="flex items-center gap-x-3 py-3 border-b border-b-gray-300">
          <div class="w-1"></div>
          <img :src="dashboardIcon" class="object-contain w-5" alt="dashboard icon" />
          <p class="font-semibold">Dashboard</p>
        </div>

        <!-- Nav items -->
        <nav class="font-medium text-gray-500">
          <div class="h-2"></div>
          <div
            class="flex items-center gap-x-3 py-1 hover:bg-gray-200 hover:text-black cursor-pointer rounded-lg"
          >
            <div class="w-1"></div>
            <font-awesome-icon :icon="['fas', 'map-location-dot']" />
            <p>Learning Paths</p>
          </div>
          <div class="h-2"></div>
          <div
            class="flex items-center gap-x-3 py-1 hover:bg-gray-200 hover:text-black cursor-pointer rounded-lg"
          >
            <div class="w-1"></div>
            <font-awesome-icon :icon="['fas', 'flag']" />
            <p>CTF Challenges</p>
          </div>
          <div class="h-2"></div>
          <div
            class="flex items-center gap-x-3 py-1 hover:bg-gray-200 hover:text-black cursor-pointer rounded-lg"
          >
            <div class="w-1"></div>
            <font-awesome-icon :icon="['fas', 'award']" />
            <p>Achievements</p>
          </div>
          <div class="h-2"></div>
          <div
            class="flex items-center gap-x-3 py-1 hover:bg-gray-200 hover:text-black cursor-pointer rounded-lg"
          >
            <div class="w-1"></div>
            <font-awesome-icon :icon="['fas', 'graduation-cap']" />
            <p>My Progress</p>
          </div>
        </nav>
      </div>
      <div
        class="flex gap-x-3 items-center py-4 cursor-pointer justify-center w-full bg-black text-white hover:bg-gray-900"
        @click="logout"
      >
        <font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" />
        <p>Logout</p>
      </div>
    </div>

    <!-- main content: make div scrollable; freeze all elements above -->
    <div class="p-6">
      <p>Welcome, {{ usernameStore.username }}</p>
    </div>
  </div>
</template>
