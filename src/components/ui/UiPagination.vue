<script setup>
import { computed } from 'vue';
import UiSelect from './UiSelect.vue';

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
      <button
        @click="updatePage(modelValue - 1)"
        :disabled="modelValue <= 1"
        class="w-10 h-10 flex items-center justify-center rounded-xl bg-white text-neutral-600 transition-all shadow-clay-btn hover:shadow-clay-btn active:shadow-clay-btn-active disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed"
      >
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div class="flex items-center gap-1">
        <template v-for="(page, index) in pages" :key="index">
          <button
            v-if="page !== '...'"
            @click="updatePage(page)"
            class="w-10 h-10 flex items-center justify-center rounded-xl transition-all font-medium text-sm"
            :class="modelValue === page
              ? 'bg-primary-500 text-white shadow-clay-btn'
              : 'bg-white text-neutral-600 hover:bg-neutral-50 shadow-clay-btn hover:shadow-clay-btn active:shadow-clay-btn-active'"
          >
            {{ page }}
          </button>
          <span v-else class="w-10 text-center text-neutral-400">...</span>
        </template>
      </div>

      <button
        @click="updatePage(modelValue + 1)"
        :disabled="modelValue >= totalPages"
        class="w-10 h-10 flex items-center justify-center rounded-xl bg-white text-neutral-600 transition-all shadow-clay-btn hover:shadow-clay-btn active:shadow-clay-btn-active disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed"
      >
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </nav>
</template>
