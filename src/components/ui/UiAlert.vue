<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'neutral', // info, success, warning, error, neutral
  },
  title: String,
  dismissible: Boolean,
});

defineEmits(['dismiss']);

const classes = computed(() => {
  const variants = {
    info: 'bg-primary-50 border-primary-200 text-primary-800',
    secondary: 'bg-secondary-50 border-secondary-200 text-secondary-800',
    success: 'bg-success-50 border-success-200 text-success-800',
    warning: 'bg-warning-50 border-warning-200 text-warning-800',
    error: 'bg-error-50 border-error-200 text-error-800',
    neutral: 'bg-neutral-50 border-neutral-200 text-neutral-800',
  };
  return variants[props.variant];
});

const icon = computed(() => {
  switch (props.variant) {
    case 'info': return 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z';
    case 'success': return 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z';
    case 'warning': return 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z';
    case 'error': return 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z';
    default: return 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z';
  }
});
</script>

<template>
  <div 
    class="flex items-start p-4 rounded-xl border shadow-soft-sm"
    :class="classes"
  >
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 opacity-80" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="icon" />
      </svg>
    </div>
    <div class="ml-3 flex-1">
      <h3 v-if="title" class="text-sm font-semibold">{{ title }}</h3>
      <div class="text-sm opacity-90" :class="{ 'mt-1': title }">
        <slot />
      </div>
    </div>
    <div v-if="dismissible" class="ml-3 pl-3 border-l border-current border-opacity-20">
      <button 
        @click="$emit('dismiss')"
        class="inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 opacity-70 hover:opacity-100 transition-opacity"
        :class="`focus:ring-${variant}-500`"
      >
        <span class="sr-only">Dismiss</span>
        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
</template>
