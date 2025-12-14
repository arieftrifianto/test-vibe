<script setup>
import UiButton from './UiButton.vue';

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
  <div class="inline-flex p-1 bg-secondary-50 rounded-xl shadow-inner" :class="{ 'opacity-60 pointer-events-none': disabled }">
    <UiButton
      v-for="item in items"
      :key="item.value"
      @click="$emit('update:modelValue', item.value)"
      :disabled="disabled"
      :variant="modelValue === item.value ? 'primary' : 'tertiary'"
      :class="{ 
        '!shadow-clay-btn-strong z-0': modelValue === item.value,
        'enabled:hover:!bg-white enabled:hover:!shadow-soft-sm enabled:hover:z-20': modelValue !== item.value 
      }"
      size="sm"
    >
      {{ item.label }}
    </UiButton>
  </div>
</template>
