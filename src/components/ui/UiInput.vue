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
});

defineEmits(['update:modelValue']);

const inputClasses = computed(() => {
  return `w-full rounded-xl px-4 py-2.5 text-neutral-900 placeholder-neutral-400 outline-none transition-all duration-200 shadow-clay-input border-0
  ${props.error 
    ? 'bg-error-50 ring-1 ring-error-300 focus:ring-2 focus:ring-error-500/50' 
    : 'bg-neutral-50 focus:bg-white focus:shadow-soft-sm focus:ring-2 focus:ring-primary-500/20'}
  ${props.disabled ? 'opacity-60 cursor-not-allowed' : ''}
  `;
});
</script>

<template>
  <div class="flex flex-col gap-1.5 w-full">
    <label v-if="label" class="text-sm font-medium text-neutral-700 ml-1">{{ label }}</label>
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="inputClasses"
    />
    <span v-if="error" class="text-xs text-error-600 ml-1">{{ error }}</span>
    <span v-else-if="hint" class="text-xs text-neutral-500 ml-1">{{ hint }}</span>
  </div>
</template>
