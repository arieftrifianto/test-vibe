<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  modelValue: [String, Number, Object],
  options: {
    type: Array, // Strings or Objects { label, value }
    default: () => []
  },
  label: String,
  placeholder: { type: String, default: 'Select an option' },
  disabled: Boolean,
});

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);
const containerRef = ref(null);

const selectedLabel = computed(() => {
  if (!props.modelValue) return props.placeholder;
  const option = props.options.find(opt => (opt.value || opt) === props.modelValue);
  return option ? (option.label || option) : props.modelValue;
});

const toggle = () => {
  if (!props.disabled) isOpen.value = !isOpen.value;
};

const select = (option) => {
  emit('update:modelValue', option.value || option);
  isOpen.value = false;
};

const close = (e) => {
  if (containerRef.value && !containerRef.value.contains(e.target)) {
    isOpen.value = false;
  }
};

onMounted(() => document.addEventListener('click', close));
onUnmounted(() => document.removeEventListener('click', close));
</script>

<template>
  <div class="relative w-full" ref="containerRef">
    <label v-if="label" class="block text-sm font-medium text-neutral-700 mb-1.5 ml-1">{{ label }}</label>
    <button
      type="button"
      @click="toggle"
      class="w-full rounded-xl px-4 py-2.5 text-left text-neutral-900 outline-none transition-all duration-200 flex justify-between items-center shadow-clay-input"
      :class="[
        isOpen ? 'bg-white ring-2 ring-primary-500/20 shadow-soft-sm' : 'bg-neutral-50 enabled:hover:bg-white',
        disabled ? 'opacity-60 cursor-not-allowed' : ''
      ]"
      :disabled="disabled"
    >
      <span :class="{ 'text-neutral-400': !modelValue }">{{ selectedLabel }}</span>
      <svg 
        class="w-5 h-5 text-neutral-400 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
      >
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>

    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div 
        v-if="isOpen" 
        class="absolute z-10 w-full mt-2 bg-white rounded-xl shadow-soft-xl max-h-60 overflow-auto py-1 focus:outline-none"
      >
        <div
          v-for="(option, index) in options"
          :key="index"
          @click="select(option)"
          class="px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 cursor-pointer transition-colors"
          :class="{ 'bg-primary-50 text-primary-700 font-medium': (option.value || option) === modelValue }"
        >
          {{ option.label || option }}
        </div>
      </div>
    </Transition>
  </div>
</template>
