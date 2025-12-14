<script setup>
const props = defineProps({
  modelValue: [String, Number, Boolean],
  value: [String, Number, Boolean],
  label: String,
  name: String,
  disabled: Boolean,
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <label class="inline-flex items-center gap-2 cursor-pointer select-none" :class="{ 'opacity-50 cursor-not-allowed': disabled }">
    <div class="relative flex items-center">
      <input 
        type="radio" 
        class="peer sr-only"
        :name="name"
        :value="value"
        :checked="modelValue === value"
        :disabled="disabled"
        @change="$emit('update:modelValue', value)"
      />
      <div 
        class="w-5 h-5 rounded-full bg-neutral-100 shadow-inner transition-all peer-checked:bg-primary-500 peer-checked:shadow-clay-btn peer-focus:ring-2 peer-focus:ring-primary-500/20 peer-enabled:hover:bg-white"
      ></div>
      <div 
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary-500 opacity-0 transition-opacity peer-checked:opacity-100 pointer-events-none"
      ></div>
    </div>
    <span v-if="label" class="text-sm font-medium text-neutral-700">{{ label }}</span>
  </label>
</template>
