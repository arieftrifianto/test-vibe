<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'neutral', 'ghost', 'danger', 'success', 'warning'].includes(value),
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
  let base = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95';
  
  if (props.block) base += ' w-full';

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };

  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 shadow-clay-btn hover:shadow-clay-btn active:shadow-clay-btn-active focus:ring-primary-500/30',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 shadow-clay-btn hover:shadow-clay-btn active:shadow-clay-btn-active focus:ring-secondary-500/30',
    neutral: 'bg-white text-neutral-700 hover:bg-neutral-50 shadow-clay-btn hover:shadow-clay-btn active:shadow-clay-btn-active focus:ring-neutral-500/30',
    ghost: 'bg-transparent text-neutral-600 hover:bg-neutral-100 hover:shadow-none shadow-none hover:text-neutral-900',
    danger: 'bg-error-500 text-white hover:bg-error-600 shadow-clay-btn hover:shadow-clay-btn active:shadow-clay-btn-active focus:ring-error-500/30',
    success: 'bg-success-500 text-white hover:bg-success-600 shadow-clay-btn hover:shadow-clay-btn active:shadow-clay-btn-active focus:ring-success-500/30',
    warning: 'bg-warning-500 text-white hover:bg-warning-600 shadow-clay-btn hover:shadow-clay-btn active:shadow-clay-btn-active focus:ring-warning-500/30',
  };

  return `${base} ${sizes[props.size]} ${variants[props.variant]}`;
});
</script>

<template>
  <button :class="classes" :disabled="disabled" @click="$emit('click', $event)">
    <slot />
  </button>
</template>
