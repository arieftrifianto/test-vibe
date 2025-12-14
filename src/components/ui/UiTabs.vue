<script setup>
defineProps({
  modelValue: [String, Number],
  items: {
    type: Array, // [{ label, value }]
    required: true,
  },
  disabled: Boolean,
});

defineEmits(['update:modelValue']);
</script>

<template>
  <div class="inline-flex p-1 bg-neutral-100 rounded-xl shadow-inner" :class="{ 'opacity-60 pointer-events-none': disabled }">
    <button
      v-for="item in items"
      :key="item.value"
      @click="$emit('update:modelValue', item.value)"
      :disabled="disabled"
      class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
      :class="modelValue === item.value 
        ? 'bg-white text-primary-600 shadow-clay-btn' 
        : 'text-neutral-500 hover:text-neutral-700'"
    >
      {{ item.label }}
    </button>
  </div>
</template>
