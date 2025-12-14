<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  modelValue: Date,
});

const emit = defineEmits(['update:modelValue']);

const currentMonth = ref(new Date());

const daysInMonth = computed(() => {
  const year = currentMonth.value.getFullYear();
  const month = currentMonth.value.getMonth();
  return new Date(year, month + 1, 0).getDate();
});

const firstDayOfMonth = computed(() => {
  const year = currentMonth.value.getFullYear();
  const month = currentMonth.value.getMonth();
  return new Date(year, month, 1).getDay();
});

const monthName = computed(() => {
  return currentMonth.value.toLocaleString('default', { month: 'long', year: 'numeric' });
});

const prevMonth = () => {
  currentMonth.value = new Date(currentMonth.value.getFullYear(), currentMonth.value.getMonth() - 1, 1);
};

const nextMonth = () => {
  currentMonth.value = new Date(currentMonth.value.getFullYear(), currentMonth.value.getMonth() + 1, 1);
};

const isSelected = (day) => {
  if (!props.modelValue) return false;
  return props.modelValue.getDate() === day &&
         props.modelValue.getMonth() === currentMonth.value.getMonth() &&
         props.modelValue.getFullYear() === currentMonth.value.getFullYear();
};

const selectDate = (day) => {
  const newDate = new Date(currentMonth.value.getFullYear(), currentMonth.value.getMonth(), day);
  emit('update:modelValue', newDate);
};
</script>

<template>
  <div class="p-4 bg-white rounded-2xl shadow-clay-card max-w-xs">
    <div class="flex justify-between items-center mb-4">
      <button @click="prevMonth" class="p-2 rounded-lg hover:bg-neutral-50 hover:shadow-soft-sm transition-all text-neutral-600">
        &lt;
      </button>
      <span class="font-bold text-neutral-800">{{ monthName }}</span>
      <button @click="nextMonth" class="p-2 rounded-lg hover:bg-neutral-50 hover:shadow-soft-sm transition-all text-neutral-600">
        &gt;
      </button>
    </div>
    
    <div class="grid grid-cols-7 gap-1 text-center mb-2">
      <div v-for="day in ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']" :key="day" class="text-xs font-semibold text-neutral-400 py-1">
        {{ day }}
      </div>
    </div>

    <div class="grid grid-cols-7 gap-1">
      <div v-for="i in firstDayOfMonth" :key="'empty-' + i"></div>
      <button
        v-for="day in daysInMonth"
        :key="day"
        @click="selectDate(day)"
        class="w-8 h-8 rounded-lg text-sm transition-all flex items-center justify-center"
        :class="isSelected(day) 
          ? 'bg-primary-500 text-white shadow-clay-btn' 
          : 'text-neutral-700 hover:bg-neutral-100'"
      >
        {{ day }}
      </button>
    </div>
  </div>
</template>
