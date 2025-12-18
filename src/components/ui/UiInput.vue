<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: [String, Number],
  label: String,
  type: { type: String, default: 'text' },
  placeholder: String,
  error: String,
  hint: String,
  disabled: Boolean,
  icon: String, // SVG path
});

defineEmits(['update:modelValue']);

const inputClasses = computed(() => {
  return `w-full rounded-xl py-2.5 text-neutral-900 placeholder-neutral-400 outline-none transition-all duration-200 shadow-clay-input border-0
  ${props.icon ? 'pl-11 pr-4' : 'px-4'}
  ${props.error 
    ? 'bg-error-50 ring-1 ring-error-300 enabled:focus:ring-2 enabled:focus:ring-error-500/50' 
    : 'bg-neutral-50 enabled:hover:bg-white enabled:focus:bg-white enabled:focus:shadow-soft-sm enabled:focus:ring-2 enabled:focus:ring-primary-500/20'}
  ${props.disabled ? 'opacity-60 cursor-not-allowed' : ''}
  `;
});
</script>

<template>
  <div class="flex flex-col gap-1.5 w-full">
    <label v-if="label" class="text-sm font-medium text-neutral-700 ml-1">{{ label }}</label>
    <div class="relative group">
      <div v-if="icon" class="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-primary-500 transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="icon" />
        </svg>
      </div>
      <input
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="$emit('update:modelValue', $event.target.value)"
        :class="inputClasses"
      />
    </div>
    <span v-if="error" class="text-xs text-error-600 ml-1">{{ error }}</span>
    <span v-else-if="hint" class="text-xs text-neutral-500 ml-1">{{ hint }}</span>
  </div>
</template>
