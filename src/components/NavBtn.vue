<template>
  <div class="h-2"></div>
  <RouterLink
    :to="path"
    class="flex items-center gap-x-3 py-1 hover:bg-gray-200 hover:text-black cursor-pointer"
    active-class="text-black bg-gray-200"
  >
    <div class="w-1"></div>
    <component :is="icon" class="w-4 h-4" />
    <p>{{ name }}</p>
  </RouterLink>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { LucideProps } from 'lucide-vue-next'
import type { FunctionalComponent } from 'vue'
type LucideIcon = FunctionalComponent<LucideProps, {}, any, {}>

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
      type: Function as PropType<LucideIcon>,
      required: true,
    },
  },
}
</script>
