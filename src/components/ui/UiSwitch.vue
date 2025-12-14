<script setup>
const props = defineProps({
  modelValue: Boolean,
  label: String,
  disabled: Boolean,
});

defineEmits(['update:modelValue']);
</script>

<template>
  <label class="inline-flex items-center gap-3 cursor-pointer select-none" :class="{ 'opacity-50 cursor-not-allowed': disabled }">
    <div class="relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-200 ease-in-out shadow-inner focus-within:ring-2 focus-within:ring-primary-500/20"
         :class="modelValue ? 'bg-primary-500' : 'bg-neutral-200'">
      <input 
        type="checkbox" 
        class="sr-only"
        :checked="modelValue"
        :disabled="disabled"
        @change="$emit('update:modelValue', $event.target.checked)"
      />
      <span 
        class="inline-block w-4 h-4 transform bg-white rounded-full transition duration-200 ease-in-out shadow-clay-btn"
        :class="modelValue ? 'translate-x-6' : 'translate-x-1'"
      />
    </div>
    <span v-if="label" class="text-sm font-medium text-neutral-700">{{ label }}</span>
  </label>
</template>
