<script setup>
defineProps({
  modelValue: [String, Number],
  label: String,
  placeholder: String,
  rows: { type: [String, Number], default: 3 },
  disabled: Boolean,
});

defineEmits(['update:modelValue']);
</script>

<template>
  <div class="flex flex-col gap-1.5 w-full">
    <label v-if="label" class="text-sm font-medium text-neutral-700 ml-1">{{ label }}</label>
    <textarea
      :value="modelValue"
      :rows="rows"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full bg-neutral-50 rounded-xl px-4 py-2.5 text-neutral-900 placeholder-neutral-400 outline-none transition-all duration-200 shadow-clay-input enabled:hover:bg-white enabled:focus:bg-white enabled:focus:shadow-soft-sm enabled:focus:ring-2 enabled:focus:ring-primary-500/20 disabled:opacity-60 disabled:cursor-not-allowed resize-y"
    ></textarea>
  </div>
</template>
