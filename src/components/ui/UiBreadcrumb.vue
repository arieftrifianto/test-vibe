<script setup>
defineProps({
  items: {
    type: Array, // [{ label, href? }]
    required: true,
  },
});
</script>

<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li v-for="(item, index) in items" :key="index" class="inline-flex items-center">
        <div v-if="index > 0" class="flex items-center">
          <svg class="w-3 h-3 text-neutral-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
          </svg>
        </div>
        <a 
          v-if="item.href" 
          :href="item.href" 
          class="inline-flex items-center text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors px-3 py-1.5 rounded-xl hover:bg-white hover:shadow-clay-btn"
        >
          {{ item.label }}
        </a>
        <span v-else class="ml-1 text-sm font-medium text-neutral-500 md:ml-2 px-2 py-1">
          {{ item.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>
