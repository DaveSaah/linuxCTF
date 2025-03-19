<script setup lang="ts">
import {useUsernameStore} from '@/stores/user'
const usernameStore = useUsernameStore()
</script>

<template>
  <div>Welcome, {{ usernameStore.username }}</div>
</template>
