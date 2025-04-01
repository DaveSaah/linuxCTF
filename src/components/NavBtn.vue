<template>
  <div class="h-2"></div>
  <RouterLink
    :to="path"
    class="flex items-center gap-x-3 py-1 hover:bg-gray-200 hover:text-black cursor-pointer"
    active-class="text-black bg-gray-200"
  >
    <div class="w-1"></div>
    <font-awesome-icon :icon="['fas', icon]" />
    <p>{{ name }}</p>
  </RouterLink>
</template>

<script lang="ts">
export default {
  name: 'NavBtn',
  props: {
    path: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
}
</script>
