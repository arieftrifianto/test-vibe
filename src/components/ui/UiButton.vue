<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'tertiary', 'destructive', 'success', 'warning'].includes(value),
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
  block: Boolean,
  disabled: Boolean,
});

const emit = defineEmits(['click']);

const classes = computed(() => {
  let base = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 outline-none enabled:focus:ring-2 enabled:focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed enabled:active:scale-95';
  
  if (props.block) base += ' w-full';

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };

  const variants = {
    primary: 'bg-primary-500 text-white enabled:hover:bg-primary-600 shadow-clay-btn enabled:hover:shadow-clay-btn enabled:active:shadow-clay-btn-active enabled:focus:ring-primary-500/30',
    secondary: 'bg-white text-neutral-700 border border-neutral-200 enabled:hover:bg-neutral-50 shadow-sm enabled:hover:shadow enabled:active:shadow-none enabled:focus:ring-neutral-500/30',
    tertiary: 'bg-transparent text-neutral-600 enabled:hover:bg-neutral-100 enabled:hover:shadow-none shadow-none enabled:hover:text-neutral-900',
    destructive: 'bg-error-500 text-white enabled:hover:bg-error-600 shadow-clay-btn enabled:hover:shadow-clay-btn enabled:active:shadow-clay-btn-active enabled:focus:ring-error-500/30',
    
    // Legacy mapping
    success: 'bg-success-500 text-white enabled:hover:bg-success-600 shadow-clay-btn enabled:hover:shadow-clay-btn enabled:active:shadow-clay-btn-active enabled:focus:ring-success-500/30',
    warning: 'bg-warning-500 text-white enabled:hover:bg-warning-600 shadow-clay-btn enabled:hover:shadow-clay-btn enabled:active:shadow-clay-btn-active enabled:focus:ring-warning-500/30',
  };

  return `${base} ${sizes[props.size]} ${variants[props.variant]}`;
});
</script>

<template>
  <button :class="classes" :disabled="disabled" @click="$emit('click', $event)">
    <slot />
  </button>
</template>
