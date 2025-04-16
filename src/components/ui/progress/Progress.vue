<script setup lang="ts">
import { cn } from '@/lib/utils'
import {
  ProgressIndicator,
  ProgressRoot,
  type ProgressRootProps,
} from 'reka-ui'
import { computed, type HTMLAttributes } from 'vue'

interface ProgressProps extends ProgressRootProps {
  class?: HTMLAttributes['class'];
  color?: string;
}

const props = withDefaults(
  defineProps<ProgressProps>(),
  {
    modelValue: 0,
    color: 'bg-primary', // Default color is 'primary'
  },
)

const delegatedProps = computed(() => {
  const { class: _, color: __, ...delegated } = props
  return delegated
})
</script>

<template>
  <ProgressRoot
    data-slot="progress"
    v-bind="delegatedProps"
    :class="
      cn(
        `bg-primary/20 relative h-2 w-full overflow-hidden rounded-full`,
        props.class,
      )
    "
  >
    <ProgressIndicator
      data-slot="progress-indicator"
      :class="`${props.color} h-full w-full flex-1 transition-all`"
      :style="`transform: translateX(-${100 - (props.modelValue ?? 0)}%);`"
    />
  </ProgressRoot>
</template>
