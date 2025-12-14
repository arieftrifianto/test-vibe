<script setup>
defineProps({
  headers: Array,
  rows: Array,
});
</script>

<template>
  <div class="overflow-x-auto w-full rounded-2xl shadow-clay-card bg-white">
    <table class="w-full text-sm text-left">
      <thead class="bg-neutral-50 text-neutral-500 uppercase font-semibold text-xs border-b border-neutral-200">
        <tr>
          <th 
            v-for="(header, index) in headers" 
            :key="index"
            class="px-6 py-4 tracking-wider"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-neutral-100 bg-white">
        <tr 
          v-for="(row, rIndex) in rows" 
          :key="rIndex"
          class="hover:bg-neutral-50/50 transition-colors"
        >
          <td 
            v-for="(cell, cIndex) in row" 
            :key="cIndex"
            class="px-6 py-4 text-neutral-700 whitespace-nowrap"
          >
            {{ cell }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
