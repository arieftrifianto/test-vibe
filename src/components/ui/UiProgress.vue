<script setup>
defineProps({
  value: {
    type: Number,
    default: 0,
    validator: v => v >= 0 && v <= 100
  },
  label: Boolean,
  variant: {
    type: String,
    default: 'primary'
  },
  height: {
    type: String,
    default: 'h-2.5'
  }
});
</script>

<template>
  <div class="w-full">
    <div v-if="label" class="flex justify-between mb-1">
      <span class="text-sm font-medium text-neutral-700">Progress</span>
      <span class="text-sm font-medium text-neutral-700">{{ value }}%</span>
    </div>
    <div class="w-full bg-neutral-100 rounded-full overflow-hidden shadow-inner" :class="height">
      <div 
        class="h-full rounded-full transition-all duration-500 ease-out"
        :class="{
          'bg-primary-500': variant === 'primary',
          'bg-secondary-500': variant === 'secondary',
          'bg-success-500': variant === 'success',
          'bg-warning-500': variant === 'warning',
          'bg-error-500': variant === 'error',
        }"
        :style="{ width: `${value}%` }"
      ></div>
    </div>
  </div>
</template>
