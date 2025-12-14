<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import UiCalendar from './UiCalendar.vue';

const props = defineProps({
  modelValue: Date,
  label: String,
  placeholder: { type: String, default: 'Select date' },
  disabled: Boolean,
});

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);
const containerRef = ref(null);

const formattedDate = computed(() => {
  if (!props.modelValue) return '';
  return props.modelValue.toLocaleDateString();
});

const toggle = () => {
  if (props.disabled) return;
  isOpen.value = !isOpen.value;
};

const close = (e) => {
  if (containerRef.value && !containerRef.value.contains(e.target)) {
    isOpen.value = false;
  }
};

const handleDateSelect = (date) => {
  emit('update:modelValue', date);
  isOpen.value = false;
};

onMounted(() => document.addEventListener('click', close));
onUnmounted(() => document.removeEventListener('click', close));
</script>

<template>
  <div class="relative w-full" ref="containerRef">
    <label v-if="label" class="block text-sm font-medium text-neutral-700 mb-1.5 ml-1" :class="{ 'opacity-60': disabled }">{{ label }}</label>
    <div 
      @click="toggle"
      class="w-full rounded-xl px-4 py-2.5 text-left text-neutral-900 outline-none transition-all duration-200 flex justify-between items-center shadow-clay-input bg-neutral-50"
      :class="[
        { 'ring-2 ring-primary-500/20 bg-white shadow-soft-sm': isOpen },
        { 'opacity-60 cursor-not-allowed': disabled },
        { 'hover:bg-white cursor-pointer': !disabled }
      ]"
    >
      <span :class="{ 'text-neutral-400': !modelValue }">{{ formattedDate || placeholder }}</span>
      <svg class="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </div>

    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div v-if="isOpen && !disabled" class="absolute z-20 mt-2">
        <UiCalendar :modelValue="modelValue" @update:modelValue="handleDateSelect" />
      </div>
    </Transition>
  </div>
</template>
