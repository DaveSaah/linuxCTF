<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import { UsersRound, Terminal, } from 'lucide-vue-next'
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-10 flex items-center p-4 border-b border-b-gray-300 justify-between"
  >
    <div class="flex items-center gap-x-3">
      <Terminal class="w-6 h-6" />
      <p class="font-bold text-lg">Linux CTF Learning Platform</p>
    </div>
    <a
      class="flex gap-x-5 items-center border py-1 px-2 rounded-md border-gray-300 text-sm
      hover:bg-gray-100 cursor-pointer" href="" target="_blank"
    >
      <UsersRound class="w-4 h-4" />
      Community
    </a>
  </header>

  <div class="flex pt-[60px]">
    <NavBar class="fixed left-0 top-[60px]" />
    <div class="flex-1 overflow-y-auto h-[calc(100vh-60px)] scroll-smooth main p-6">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.main {
  margin-left: 12.5%;
}
</style>
