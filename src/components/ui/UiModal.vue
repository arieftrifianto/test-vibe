<script setup>
import UiButton from './UiButton.vue';

defineProps({
  isOpen: Boolean,
  title: String,
  width: { type: String, default: 'max-w-md' }
});

const emit = defineEmits(['close']);
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div 
        v-if="isOpen" 
        class="fixed inset-0 z-50 flex items-center justify-center bg-secondary-900/40 backdrop-blur-sm p-4"
        @click.self="$emit('close')"
      >
        <Transition name="scale">
          <div 
            v-if="isOpen"
            class="bg-white rounded-2xl shadow-soft-xl w-full max-h-[90vh] flex flex-col overflow-hidden"
            :class="width"
          >
            <!-- Header -->
            <div class="flex justify-between items-center px-6 py-5 border-b border-secondary-100">
              <h3 class="text-xl font-bold text-neutral-800">{{ title }}</h3>
              <UiButton 
                @click="$emit('close')" 
                variant="tertiary"
                class="!rounded-full !p-1 !w-8 !h-8 shrink-0 text-neutral-400 hover:text-neutral-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </UiButton>
            </div>
            
            <!-- Body -->
            <div class="p-6 overflow-y-auto custom-scrollbar">
              <slot />
            </div>
            
            <!-- Footer -->
            <div v-if="$slots.footer" class="px-6 py-4 border-t border-secondary-100 bg-neutral-50/50 flex justify-end gap-3">
              <slot name="footer" />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.scale-enter-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.scale-leave-active {
  transition: all 0.2s ease-in;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
