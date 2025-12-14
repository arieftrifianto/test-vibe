<script setup>
defineProps({
  variant: {
    type: String,
    default: 'neutral' // primary, secondary, neutral, success, warning, error
  },
  size: {
    type: String,
    default: 'md' // sm, md
  }
});
</script>

<template>
  <span 
    class="inline-flex items-center justify-center font-medium rounded-full" 
    :class="[
      size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-0.5 text-sm',
      {
        'bg-primary-100 text-primary-800': variant === 'primary',
        'bg-secondary-100 text-secondary-800': variant === 'secondary',
        'bg-neutral-100 text-neutral-800': variant === 'neutral',
        'bg-success-100 text-success-800': variant === 'success',
        'bg-warning-100 text-warning-800': variant === 'warning',
        'bg-error-100 text-error-800': variant === 'error',
      }
    ]"
  >
    <slot />
  </span>
</template>
