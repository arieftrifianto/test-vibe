<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: [Boolean, Array], // Supports v-model boolean or array
  value: [String, Number, Boolean], // Value for array
  label: String,
  disabled: Boolean,
});

const emit = defineEmits(['update:modelValue']);

const isChecked = computed(() => {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.includes(props.value);
  }
  return props.modelValue;
});

const toggle = () => {
  if (props.disabled) return;
  
  if (Array.isArray(props.modelValue)) {
    const newValue = [...props.modelValue];
    if (isChecked.value) {
      newValue.splice(newValue.indexOf(props.value), 1);
    } else {
      newValue.push(props.value);
    }
    emit('update:modelValue', newValue);
  } else {
    emit('update:modelValue', !isChecked.value);
  }
};
</script>

<template>
  <label class="inline-flex items-center gap-2 cursor-pointer select-none" :class="{ 'opacity-50 cursor-not-allowed': disabled }">
    <div class="relative flex items-center">
      <input 
        type="checkbox" 
        class="peer sr-only"
        :checked="isChecked"
        :disabled="disabled"
        @change="toggle"
      />
      <div 
        class="w-5 h-5 rounded-md bg-neutral-100 shadow-inner transition-all peer-checked:bg-primary-500 peer-checked:shadow-clay-btn peer-focus:ring-2 peer-focus:ring-primary-500/20"
      ></div>
      <svg 
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white opacity-0 transition-opacity peer-checked:opacity-100 pointer-events-none"
        viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <span v-if="label" class="text-sm font-medium text-neutral-700">{{ label }}</span>
  </label>
</template>
