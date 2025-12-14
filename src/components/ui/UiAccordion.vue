<script setup>
import { ref } from 'vue';

defineProps({
  items: {
    type: Array, // [{ title: string, content: string }]
    default: () => []
  }
});

const activeIndex = ref(null);

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <div class="w-full border border-neutral-200 rounded-xl bg-white overflow-hidden divide-y divide-neutral-100 shadow-soft-sm">
    <div 
      v-for="(item, index) in items" 
      :key="index"
      class="bg-white"
    >
      <button 
        @click="toggle(index)"
        class="w-full flex justify-between items-center p-5 text-left font-medium text-neutral-800 hover:bg-neutral-50 transition-colors focus:outline-none focus:bg-neutral-50"
      >
        <span>{{ item.title }}</span>
        <span 
          class="transform transition-transform duration-300 text-neutral-400" 
          :class="{ 'rotate-180': activeIndex === index }"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </span>
      </button>
      
      <div 
        v-show="activeIndex === index"
        class="px-5 pb-5 pt-0 text-neutral-600 leading-relaxed border-t border-transparent"
        :class="{ '!border-neutral-100 pt-2': activeIndex === index }"
      >
        <div class="animate-fade-in-down">
          {{ item.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in-down {
  animation: fadeInDown 0.3s ease-out;
}
@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
