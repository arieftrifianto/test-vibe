<script setup>
import { ref } from 'vue';

// Components
import UiButton from './components/ui/UiButton.vue';
import UiCard from './components/ui/UiCard.vue';
import UiInput from './components/ui/UiInput.vue';
import UiBadge from './components/ui/UiBadge.vue';
import UiTable from './components/ui/UiTable.vue';
import UiModal from './components/ui/UiModal.vue';
import UiAccordion from './components/ui/UiAccordion.vue';
import UiCheckbox from './components/ui/UiCheckbox.vue';
import UiRadio from './components/ui/UiRadio.vue';
import UiSwitch from './components/ui/UiSwitch.vue';
import UiSelect from './components/ui/UiSelect.vue';
import UiTextarea from './components/ui/UiTextarea.vue';
import UiAvatar from './components/ui/UiAvatar.vue';
import UiAlert from './components/ui/UiAlert.vue';
import UiProgress from './components/ui/UiProgress.vue';

import UiBreadcrumb from './components/ui/UiBreadcrumb.vue';
import UiTabs from './components/ui/UiTabs.vue';
import UiCalendar from './components/ui/UiCalendar.vue';
import UiDatePicker from './components/ui/UiDatePicker.vue';
import UiPagination from './components/ui/UiPagination.vue';
import UiChart from './components/ui/UiChart.vue';

// Composables
import { useComponentsDocs } from './composables/useComponentsDocs';

import DashboardView from './components/DashboardView.vue';

const { components: docComponents } = useComponentsDocs();

const currentPage = ref('dashboard');

// Used in docs preview
const accordionItems = [
  { title: 'Project Overview', content: 'Our new Aura Design System aims to reduce cognitive load through soft colors and minimal shadows.' },
  { title: 'Team Structure', content: 'We are a cross-functional team working in two-week sprints.' },
  { title: 'Future Roadmap', content: 'We plan to add more interactive components and dark mode support in the next quarter.' },
];

const docsData = ref({
  select: null,
  textarea: '',
  checkbox1: false,
  checkbox2: true,
  radio: '1',
  switch1: false,
  switch2: true,
  tab: 1,
  date: new Date(),
  pickerDate: null,
  pagination: 1,
  itemsPerPage: 10,
});
const docsModalOpen = ref(false);
</script>

<template>
  <div class="min-h-screen bg-neutral-50 flex flex-col font-sans text-neutral-800">
    
    <!-- Top Toolbar -->
    <header class="h-16 bg-white shadow-soft-xl sticky top-0 z-20 px-8 flex justify-between items-center border-b border-neutral-100">
      <div class="flex items-center gap-12">
        <div class="flex items-center gap-3 group cursor-pointer">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow-clay-sm transform group-hover:scale-105 transition-transform duration-500">
            <svg class="w-6 h-6 text-white drop-shadow-sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M12 4L4 20H6.5L8.5 15H15.5L17.5 20H20L12 4ZM12 7.33L14.67 13H9.33L12 7.33Z" fill="white"/>
               <circle cx="12" cy="12" r="11" stroke="white" stroke-opacity="0.2" stroke-width="0.5"/>
            </svg>
          </div>
          <h1 class="text-xl font-black text-neutral-900 tracking-tighter uppercase">Aura</h1>
        </div>
        
        <nav class="flex items-center gap-2">
          <button 
            @click="currentPage = 'dashboard'"
            class="px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300"
            :class="currentPage === 'dashboard' ? 'bg-primary-50 text-primary-700' : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50'"
          >
            Dashboard
          </button>
          <button 
            @click="currentPage = 'docs'"
            class="px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300"
            :class="currentPage === 'docs' ? 'bg-primary-50 text-primary-700' : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50'"
          >
            Documentation
          </button>
        </nav>
      </div>

      <div class="flex items-center gap-3 pr-4">
        <div class="text-right text-xs mr-1 hidden sm:block">
          <p class="font-bold text-neutral-900 leading-tight">John Doe</p>
          <p class="text-neutral-500">Admin</p>
        </div>
        <UiAvatar initials="JD" size="sm" status="online" />
      </div>
    </header>

    <!-- Main -->
    <main class="flex-1 p-8 max-w-7xl mx-auto w-full space-y-8">
      
      <!-- Dashboard -->
      <DashboardView v-if="currentPage === 'dashboard'" />

      <!-- Documentation -->
      <section v-else-if="currentPage === 'docs'" class="space-y-8 animate-fade-in">
        <header>
          <h2 class="text-2xl font-bold text-neutral-900">Component Documentation</h2>
          <p class="text-neutral-500">Detailed usage guide for all system components.</p>
        </header>

        <div v-for="comp in docComponents" :key="comp.name" class="space-y-4">
          <UiCard :title="comp.name">
            <template #footer>
               <h4 class="text-sm font-bold text-neutral-900 mb-2">Props</h4>
               <div class="overflow-x-auto">
                 <table class="w-full text-sm text-left">
                   <thead class="bg-neutral-50 text-neutral-500 font-semibold border-b border-neutral-200">
                     <tr>
                       <th class="px-4 py-2">Name</th>
                       <th class="px-4 py-2">Type</th>
                       <th class="px-4 py-2">Default</th>
                       <th class="px-4 py-2">Description</th>
                     </tr>
                   </thead>
                   <tbody class="divide-y divide-neutral-100">
                     <tr v-for="prop in comp.props" :key="prop.name">
                       <td class="px-4 py-2 font-mono text-primary-600">{{ prop.name }}</td>
                       <td class="px-4 py-2 text-neutral-600">{{ prop.type }}</td>
                       <td class="px-4 py-2 text-neutral-500">{{ prop.default }}</td>
                       <td class="px-4 py-2 text-neutral-700">{{ prop.description }}</td>
                     </tr>
                   </tbody>
                 </table>
               </div>
            </template>

            <div class="mb-6">
              <p class="text-neutral-600 mb-4">{{ comp.description }}</p>
              
              <!-- Live Preview Area -->
              <div class="p-8 bg-neutral-50 rounded-xl border border-neutral-100 flex justify-center items-center mb-4">
                <template v-if="comp.name === 'UiButton'">
                  <div class="flex flex-col gap-4">
                    <div class="flex flex-wrap gap-2">
                        <UiButton>Primary</UiButton>
                        <UiButton variant="secondary">Secondary</UiButton>
                        <UiButton variant="tertiary">Tertiary</UiButton>
                        <UiButton variant="destructive">Destructive</UiButton>
                        <UiButton variant="success">Success</UiButton>
                        <UiButton variant="warning">Warning</UiButton>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <UiButton disabled>Disabled Primary</UiButton>
                        <UiButton variant="secondary" disabled>Disabled Secondary</UiButton>
                        <UiButton variant="tertiary" disabled>Disabled Tertiary</UiButton>
                    </div>
                  </div>
                </template>
                <template v-else-if="comp.name === 'UiCard'">
                   <UiCard title="Card Title" subtitle="Card Subtitle" class="w-full max-w-sm">
                     <p class="text-neutral-600">This is a sample card content showing the clay style.</p>
                   </UiCard>
                </template>
                <template v-else-if="comp.name === 'UiInput'">
                   <div class="flex flex-col gap-4 w-full max-w-sm">
                        <UiInput label="Default Input" placeholder="Type here..." />
                        <UiInput label="Error State" placeholder="Invalid input" error="This field is required" />
                        <UiInput label="Disabled Input" placeholder="Cannot type..." disabled modelValue="Disabled"/>
                   </div>
                </template>
                <template v-else-if="comp.name === 'UiBadge'">
                   <div class="flex flex-wrap gap-2">
                     <UiBadge>Neutral</UiBadge>
                     <UiBadge variant="primary">Primary</UiBadge>
                     <UiBadge variant="secondary">Secondary</UiBadge>
                     <UiBadge variant="success">Success</UiBadge>
                     <UiBadge variant="warning">Warning</UiBadge>
                     <UiBadge variant="error">Error</UiBadge>
                   </div>
                </template>
                <template v-else-if="comp.name === 'UiAlert'">
                   <div class="flex flex-col gap-2 w-full">
                       <UiAlert variant="info" title="Info">This is an info alert.</UiAlert>
                       <UiAlert variant="success" title="Success">Operation successful.</UiAlert>
                       <UiAlert variant="warning" title="Warning">Proceed with caution.</UiAlert>
                       <UiAlert variant="error" title="Error">Something went wrong.</UiAlert>
                   </div>
                </template>
                <template v-else-if="comp.name === 'UiAvatar'">
                   <div class="flex items-center gap-4">
                     <UiAvatar initials="AB" status="online" size="lg" />
                     <UiAvatar initials="CD" status="busy" size="md" />
                     <UiAvatar initials="EF" status="offline" size="sm" />
                   </div>
                </template>
                <template v-else-if="comp.name === 'UiProgress'">
                   <div class="w-full max-w-sm space-y-4">
                     <UiProgress :value="40" variant="primary" />
                     <UiProgress :value="75" variant="secondary" />
                     <UiProgress :value="90" variant="success" />
                     <UiProgress :value="60" variant="error" />
                   </div>
                </template>
                <template v-else-if="comp.name === 'UiSelect'">
                   <div class="flex flex-col gap-4 w-full max-w-sm">
                       <UiSelect :options="['Option 1', 'Option 2', 'Option 3']" placeholder="Select an option" v-model="docsData.select" />
                       <UiSelect :options="['Option 1', 'Option 2']" placeholder="Disabled Select" disabled modelValue="Option 1"/>
                   </div>
                </template>
                <template v-else-if="comp.name === 'UiTextarea'">
                   <div class="flex flex-col gap-4 w-full max-w-sm">
                       <UiTextarea placeholder="Type something..." v-model="docsData.textarea" />
                       <UiTextarea placeholder="Disabled textarea" disabled modelValue="Disabled" />
                   </div>
                </template>
                <template v-else-if="comp.name === 'UiCheckbox'">
                   <div class="flex flex-col gap-4">
                     <div class="flex gap-4">
                        <UiCheckbox label="Unchecked" v-model="docsData.checkbox1" />
                        <UiCheckbox label="Checked" v-model="docsData.checkbox2" />
                     </div>
                     <div class="flex gap-4">
                        <UiCheckbox label="Disabled Unchecked" :modelValue="false" disabled />
                        <UiCheckbox label="Disabled Checked" :modelValue="true" disabled />
                     </div>
                   </div>
                </template>
                <template v-else-if="comp.name === 'UiRadio'">
                   <div class="flex flex-col gap-4">
                       <div class="flex gap-4">
                         <UiRadio name="demo" label="Option 1" value="1" v-model="docsData.radio" />
                         <UiRadio name="demo" label="Option 2" value="2" v-model="docsData.radio" />
                       </div>
                       <div class="flex gap-4">
                         <UiRadio name="demo-disabled" label="Disabled Off" value="1" modelValue="2" disabled />
                         <UiRadio name="demo-disabled" label="Disabled On" value="2" modelValue="2" disabled />
                       </div>
                   </div>
                </template>
                <template v-else-if="comp.name === 'UiSwitch'">
                   <div class="flex flex-col gap-4">
                       <div class="flex gap-4">
                         <UiSwitch label="Off" v-model="docsData.switch1" />
                         <UiSwitch label="On" v-model="docsData.switch2" />
                       </div>
                       <div class="flex gap-4">
                         <UiSwitch label="Disabled Off" :modelValue="false" disabled />
                         <UiSwitch label="Disabled On" :modelValue="true" disabled />
                       </div>
                   </div>
                </template>
                <template v-else-if="comp.name === 'UiAccordion'">
                   <UiAccordion :items="accordionItems" class="max-w-md w-full" />
                </template>
                <template v-else-if="comp.name === 'UiBreadcrumb'">
                   <UiBreadcrumb :items="[{label:'Home', href:'#'}, {label:'Products', href:'#'}, {label:'Details'}]" />
                </template>
                <template v-else-if="comp.name === 'UiTabs'">
                   <div class="flex flex-col gap-4 mr-6">
                       <UiTabs :items="[{label:'Tab 1', value:1}, {label:'Tab 2', value:2}]" v-model="docsData.tab" />
                   </div>
                   <div class="flex flex-col gap-4">
                       <UiTabs :items="[{label:'Disabled 1', value:1}, {label:'Disabled 2', value:2}]" :modelValue="1" disabled />
                   </div>
                </template>
                <template v-else-if="comp.name === 'UiCalendar'">
                   <div class="flex flex-wrap gap-8">
                       <UiCalendar v-model="docsData.date" />
                       <div class="opacity-60 pointer-events-none filter grayscale">
                           <UiCalendar v-model="docsData.date" /> 
                       </div>
                   </div>
                </template>
                <template v-else-if="comp.name === 'UiDatePicker'">
                   <div class="flex flex-col gap-4 w-full max-w-xs">
                       <UiDatePicker v-model="docsData.pickerDate" label="Select Date" />
                       <UiDatePicker :modelValue="new Date()" label="Disabled Date Picker" disabled />
                   </div>
                </template>
                <template v-else-if="comp.name === 'UiTable'">
                   <UiTable :headers="['Col A', 'Col B']" :rows="[['Cell A1', 'Cell B1'], ['Cell A2', 'Cell B2']]" />
                </template>
                <template v-else-if="comp.name === 'UiPagination'">
                   <div class="flex flex-col gap-4">
                       <UiPagination 
                         :total-pages="10" 
                         v-model="docsData.pagination"
                         :items-per-page="docsData.itemsPerPage"
                         @update:itemsPerPage="docsData.itemsPerPage = $event"
                       />
                       <div class="opacity-60 pointer-events-none">
                            <UiPagination 
                                :total-pages="10" 
                                :modelValue="1"
                                :items-per-page="10"
                            />
                       </div>
                   </div>
                </template>
                <template v-else-if="comp.name === 'UiModal'">
                   <UiButton @click="docsModalOpen = true">Launch Demo Modal</UiButton>
                   <UiModal :isOpen="docsModalOpen" title="Documentation Modal" @close="docsModalOpen = false">
                     <p class="text-neutral-600 mb-4">
                       This is a modal triggered from the documentation preview. It demonstrates the overlay and content containment.
                     </p>
                     <template #footer>
                       <UiButton variant="secondary" @click="docsModalOpen = false">Close</UiButton>
                       <UiButton @click="docsModalOpen = false">Confirm</UiButton>
                     </template>
                   </UiModal>
                </template>
                <template v-else-if="comp.name === 'UiChart'">
                   <div class="flex flex-col gap-8 w-full">
                       <div class="space-y-2">
                           <p class="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Type: line-bar</p>
                           <UiChart :data="[40, 70, 55, 90, 65, 80, 75]" height="160px" />
                       </div>
                       <div class="space-y-2 max-w-xs mx-auto text-center">
                           <p class="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Type: donut</p>
                           <UiChart type="donut" :data="[{ value: 75 }, { value: 25 }]" height="120px" />
                       </div>
                   </div>
                </template>
                <div v-else class="text-neutral-400 italic">No preview available</div>
              </div>

              <!-- Code Usage -->
              <div class="bg-neutral-900 rounded-lg p-4 overflow-x-auto">
                <pre class="text-xs text-neutral-300 font-mono">{{ comp.usage }}</pre>
              </div>
            </div>
          </UiCard>
        </div>
      </section>
      
    </main>

  </div>
</template>

<style>
.animate-fade-in {
  animation: fadeIn 0.4s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
