<script setup>
import { computed } from 'vue';

const props = defineProps({
  src: String,
  alt: String,
  initials: String,
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg', 'xl'].includes(v)
  },
  status: {
    type: String, // online, offline, busy, etc. (color name)
    default: null
  }
});

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-xl',
  };
  return sizes[props.size];
});
</script>

<template>
  <div class="relative inline-block">
    <div 
      class="rounded-full overflow-hidden bg-neutral-100 flex items-center justify-center font-bold text-neutral-500 border border-white shadow-soft-sm ring-1 ring-neutral-100"
      :class="sizeClasses"
    >
      <img v-if="src" :src="src" :alt="alt" class="w-full h-full object-cover" />
      <span v-else>{{ initials }}</span>
    </div>
    <span 
      v-if="status"
      class="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ring-1 ring-neutral-50"
      :class="{
        'bg-success-500': status === 'online',
        'bg-neutral-400': status === 'offline',
        'bg-warning-500': status === 'away',
        'bg-error-500': status === 'busy',
      }"
    ></span>
  </div>
</template>
