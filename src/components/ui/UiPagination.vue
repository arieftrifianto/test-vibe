<script setup>
import { computed } from 'vue';
import UiSelect from './UiSelect.vue';
import UiButton from './UiButton.vue';

const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
  itemsPerPage: {
    type: Number,
    default: 10,
  },
  itemsPerPageOptions: {
    type: Array,
    default: () => [10, 20, 50, 100],
  },
});

const emit = defineEmits(['update:modelValue', 'update:itemsPerPage']);

const pages = computed(() => {
  const range = [];
  for (let i = 1; i <= props.totalPages; i++) {
    if (
      i === 1 ||
      i === props.totalPages ||
      (i >= props.modelValue - 1 && i <= props.modelValue + 1)
    ) {
      range.push(i);
    } else if (
      (i === props.modelValue - 2 && i > 1) ||
      (i === props.modelValue + 2 && i < props.totalPages)
    ) {
      range.push('...');
    }
  }
  return [...new Set(range)].sort((a, b) => {
      if (a === '...') return 0;
      if (b === '...') return 0;
      return a - b;
  });
});

const updatePage = (page) => {
  if (page >= 1 && page <= props.totalPages) {
    emit('update:modelValue', page);
  }
};
</script>

<template>
  <nav class="flex flex-wrap items-center gap-4">
    <div class="flex items-center gap-2">
      <span class="text-sm text-neutral-500">Show:</span>
      <div class="w-20">
        <UiSelect 
          :modelValue="itemsPerPage" 
          :options="itemsPerPageOptions"
          @update:modelValue="$emit('update:itemsPerPage', $event)" 
        />
      </div>
    </div>
    
    <div class="flex items-center gap-2">
      <UiButton
        @click="updatePage(modelValue - 1)"
        :disabled="modelValue <= 1"
        variant="secondary"
        class="!w-10 !h-10 !p-0 shrink-0"
      >
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </UiButton>

      <div class="flex items-center gap-1">
        <template v-for="(page, index) in pages" :key="index">
          <UiButton
            v-if="page !== '...'"
            @click="updatePage(page)"
            :variant="modelValue === page ? 'primary' : 'secondary'"
            class="!w-10 !h-10 !p-0 shrink-0 tabular-nums"
          >
            {{ page }}
          </UiButton>
          <span v-else class="w-10 text-center text-neutral-400">...</span>
        </template>
      </div>

      <UiButton
        @click="updatePage(modelValue + 1)"
        :disabled="modelValue >= totalPages"
        variant="secondary"
        class="!w-10 !h-10 !p-0 shrink-0"
      >
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </UiButton>
    </div>
  </nav>
</template>
