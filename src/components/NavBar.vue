<script setup lang="ts">
import { AUTH_API, COLORS, HTTP_STATUS } from '@/constants'
import axios, { AxiosError } from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
import { useUsernameStore } from '@/stores/user'
import NavBtn from '@/components/NavBtn.vue'
import { LayoutDashboard, Route, Swords, ShieldCheck, LogOut } from 'lucide-vue-next'

const usernameStore = useUsernameStore()
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
  <!-- sidebar navigation  -->
  <div class="flex flex-col items-start border-r border-r-gray-300 w-1/8 h-[calc(100vh-60px)]">
    <div class="min-w-full grow">
      <!-- Dashboard title -->
      <div to="/dashboard" class="flex items-center gap-x-3 py-3 border-b border-b-gray-300">
        <div class="w-1"></div>
        <LayoutDashboard />
        <p class="font-semibold">Dashboard</p>
      </div>

      <!-- Nav items -->
      <nav class="font-medium text-gray-500">
        <NavBtn name="Learning Paths" :icon="Route" path="/learning-paths" />
        <NavBtn name="Challenges" :icon="Swords" path="/challenges" />
        <NavBtn name="Achievements" :icon="ShieldCheck" path="/achievements" />
      </nav>
    </div>
    <div
      class="flex gap-x-3 items-center py-4 cursor-pointer justify-center w-full bg-black text-white hover:bg-gray-900"
      @click="logout"
    >
      <LogOut />
      <p>Logout</p>
    </div>
  </div>
</template>
