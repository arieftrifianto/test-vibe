<script setup>
defineProps({
  title: String,
  subtitle: String,
  noPadding: Boolean,
});
</script>

<template>
  <div class="bg-white rounded-2xl shadow-clay-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-xl overflow-hidden">
    <div v-if="title || subtitle" class="card-header border-b border-neutral-100 bg-neutral-50/50 px-6 py-4">
      <h3 v-if="title" class="text-lg font-bold text-neutral-800">{{ title }}</h3>
      <p v-if="subtitle" class="text-sm text-neutral-500 mt-1">{{ subtitle }}</p>
    </div>
    <div :class="{ 'p-6': !noPadding }">
      <slot />
    </div>
    <div v-if="$slots.footer" class="border-t border-neutral-100 bg-neutral-50/50 px-6 py-4">
      <slot name="footer" />
    </div>
  </div>
</template>
