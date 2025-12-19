<script setup>
import { VisXYContainer, VisLine, VisStackedBar, VisAxis, VisCrosshair, VisTooltip, VisDonut, VisSingleContainer } from '@unovis/vue';
import { computed } from 'vue';

const props = defineProps({
  data: {
    type: Array, // For XY: [40, 70, ...]. For Donut: [{ value: 75 }, { value: 25 }]
    required: true
  },
  type: {
    type: String,
    default: 'line-bar' // 'line-bar', 'donut'
  },
  height: {
    type: [Number, String],
    default: 180
  },
  labels: {
    type: Array,
    default: () => ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  },
  primaryColor: {
    type: String,
    default: '#3A7CA5'
  }
});

const chartData = computed(() => {
  if (props.type === 'donut') return props.data;
  return props.data.map((val, i) => ({
    x: i,
    y: val,
    label: props.labels[i] || `${i}`
  }));
});

const x = (d) => d.x;
const y = (d) => d.y;
const value = (d) => d.value;

const containerHeight = computed(() => {
  return typeof props.height === 'number' ? `${props.height}px` : props.height;
});

// Tooltip template
const template = (d) => `
  <div style="
    background: white; 
    padding: 8px 12px; 
    border-radius: 12px; 
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); 
    border: 1px solid #f1f5f9;
    font-size: 11px;
    font-weight: 800;
    color: #1e293b;
    font-family: 'Outfit', sans-serif;
  ">
    ${props.type === 'donut' ? d.value + '%' : d.y + ' mins'}
  </div>
`;
</script>

<template>
  <div class="ui-chart-container" :style="{ height: containerHeight }">
    <template v-if="type === 'line-bar'">
      <VisXYContainer :data="chartData" :padding="{ top: 10, bottom: 20, left: 10, right: 10 }" :height="height">
        <VisTooltip />
        <VisStackedBar 
          :x="x" 
          :y="y" 
          :color="primaryColor" 
          :roundedCorners="6"
          :barPadding="0.25"
        />
        <VisLine 
          :x="x" 
          :y="y" 
          :strokeWidth="2" 
          :color="primaryColor" 
          :opacity="0.3"
        />
        <VisAxis 
          type="x" 
          :tickFormat="i => chartData[i]?.label" 
          :gridLine="false" 
          :tickLine="false"
          class="chart-axis"
        />
        <VisAxis 
          type="y" 
          :gridLine="true" 
          :tickLine="false"
          :showTicks="false"
          :numTicks="5"
          class="chart-grid"
        />
        <VisCrosshair :template="template" :color="primaryColor" />
      </VisXYContainer>
    </template>

    <template v-else-if="type === 'donut'">
      <VisSingleContainer :data="chartData" :height="height">
        <VisDonut 
          :value="value" 
          :showLabels="false" 
          :innerRadius="0.8" 
          :color="[primaryColor, '#f1f5f9']"
          :roundedCornerRadius="10"
        />
        <VisTooltip :template="template" />
      </VisSingleContainer>
      <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-[-4px]">
        <span class="font-black text-xl text-neutral-800 tracking-tighter">{{ data[0].value }}%</span>
      </div>
    </template>
  </div>
</template>

<style scoped>
.ui-chart-container {
  width: 100%;
  position: relative;
}

:deep(.chart-axis) {
  --vis-axis-tick-label-color: #94a3b8;
  --vis-axis-tick-label-font-size: 10px;
  --vis-axis-tick-label-font-weight: 700;
}

:deep(.chart-grid) {
  --vis-axis-grid-color: rgba(148, 163, 184, 0.1);
}

:deep(.unovis-tooltip) {
  padding: 0;
  background: transparent;
  border: none;
  box-shadow: none;
}
</style>
