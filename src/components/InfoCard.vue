<template>
  <div class="p-6 border border-gray-300 rounded-lg w-1/4">
    <div class="flex justify-between font-semibold text-gray-800 text-sm pb-2">
      <p>{{ title }}</p>
      <font-awesome-icon :icon="['fas', icon]" />
    </div>
    <p class="font-bold text-2xl">{{ content }}</p>
    <p class="text-gray-500 text-sm">{{ subtitle }}</p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    subtitle: {
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
