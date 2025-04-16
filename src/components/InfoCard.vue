<template>
  <div class="p-6 border border-gray-300 rounded-lg w-1/4 bg-white">
    <div class="flex justify-between font-semibold text-gray-800 text-sm pb-2">
      <p>{{ title }}</p>
      <component :is="icon" />
    </div>
    <p class="font-bold text-2xl">{{ content }}</p>
    <p class="text-gray-500 text-sm">{{ subtitle }}</p>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { LucideProps } from 'lucide-vue-next'
import type { FunctionalComponent } from 'vue'

type LucideIcon = FunctionalComponent<LucideProps, {}, any, {}>

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
      type: Function as PropType<LucideIcon>,
      required: true,
    },
  },
}
</script>
