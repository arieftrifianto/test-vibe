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

// Composables
import { useComponentsDocs } from './composables/useComponentsDocs';

const { components: docComponents } = useComponentsDocs();
const componentMap = {
  UiButton, UiCard, UiInput, UiBadge, UiTable, UiModal, UiAccordion, 
  UiCheckbox, UiRadio, UiSwitch, UiSelect, UiTextarea, UiAvatar, UiAlert, UiProgress,
  UiBreadcrumb, UiTabs, UiCalendar, UiDatePicker, UiPagination
};

const activeTab = ref('dashboard');
const isModalOpen = ref(false);

// Form Data
const formData = ref({
  name: '',
  email: '',
  role: 'developer',
  bio: '',
  notifications: true,
  theme: 'light',
  terms: false,
  skills: ['vue'],
});

const roles = [
  { label: 'Frontend Developer', value: 'developer' },
  { label: 'UX Designer', value: 'designer' },
  { label: 'Product Manager', value: 'manager' },
];

const radioOptions = ['light', 'dark', 'system'];

// Data Display
const users = [
  { name: 'Alex Johnson', role: 'Designer', status: 'active', email: 'alex@example.com' },
  { name: 'Maria Garcia', role: 'Developer', status: 'busy', email: 'maria@example.com' },
  { name: 'James Smith', role: 'Manager', status: 'offline', email: 'james@example.com' },
];

const headers = ['User', 'Role', 'Status', 'Actions'];

const accordionItems = [
  { title: 'Project Overview', content: 'Our new Calm Design System aims to reduce cognitive load through soft colors and minimal shadows.' },
  { title: 'Project Overview', content: 'Our new Calm Design System aims to reduce cognitive load through soft colors and minimal shadows.' },
  { title: 'Team Structure', content: 'We are a cross-functional team working in two-week sprints.' },
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
  <div class="min-h-screen bg-neutral-50 flex font-sans text-neutral-800">
    
    <!-- Sidebar -->
    <aside class="w-64 bg-white shadow-soft-xl fixed h-full flex flex-col z-10">
      <div class="p-6 border-b border-neutral-100">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center text-white font-bold">C</div>
          <h1 class="text-xl font-bold text-neutral-900">Calm UI</h1>
        </div>
      </div>
      
      <nav class="flex-1 p-4 space-y-1">
        <button 
          v-for="tab in ['dashboard', 'forms', 'data', 'feedback', 'docs']" 
          :key="tab"
          @click="activeTab = tab"
          class="w-full flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
          :class="activeTab === tab ? 'bg-primary-50 text-primary-700' : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'"
        >
          <span class="capitalize">{{ tab }}</span>
        </button>
      </nav>

      <div class="p-4 border-t border-neutral-100">
        <div class="flex items-center gap-3">
          <UiAvatar initials="JD" size="sm" status="online" />
          <div class="text-sm">
            <p class="font-medium text-neutral-900">John Doe</p>
            <p class="text-neutral-500 text-xs">Admin</p>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main -->
    <main class="ml-64 flex-1 p-8 max-w-7xl mx-auto space-y-8">
      
      <!-- Dashboard Overview -->
      <section v-if="activeTab === 'dashboard'" class="space-y-6 animate-fade-in">
        <header>
          <h2 class="text-2xl font-bold text-neutral-900">Dashboard Overview</h2>
          <p class="text-neutral-500">Welcome back, here's what's happening today.</p>
        </header>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <UiCard>
            <div class="flex justify-between items-start">
              <div>
                <p class="text-sm font-medium text-neutral-500">Total Revenue</p>
                <h3 class="text-2xl font-bold text-neutral-900 mt-1">$45,231</h3>
              </div>
              <span class="bg-success-50 text-success-700 text-xs px-2 py-1 rounded-full font-medium">+20.1%</span>
            </div>
            <div class="mt-4">
               <UiProgress :value="75" height="h-1.5" variant="primary" />
            </div>
          </UiCard>
          
          <UiCard>
             <div class="flex justify-between items-start">
              <div>
                <p class="text-sm font-medium text-neutral-500">Active Users</p>
                <h3 class="text-2xl font-bold text-neutral-900 mt-1">2,345</h3>
              </div>
              <span class="bg-neutral-100 text-neutral-600 text-xs px-2 py-1 rounded-full font-medium">0%</span>
            </div>
             <div class="mt-4">
               <UiProgress :value="45" height="h-1.5" variant="secondary" />
            </div>
          </UiCard>

          <UiCard>
             <div class="flex justify-between items-start">
              <div>
                <p class="text-sm font-medium text-neutral-500">Bounce Rate</p>
                <h3 class="text-2xl font-bold text-neutral-900 mt-1">42.3%</h3>
              </div>
              <span class="bg-error-50 text-error-700 text-xs px-2 py-1 rounded-full font-medium">-4.5%</span>
            </div>
             <div class="mt-4">
               <UiProgress :value="20" height="h-1.5" variant="error" />
            </div>
          </UiCard>
        </div>

        <UiAlert variant="info" title="System Update" dismissible>
          A new version of the system is available. Please refresh your page.
        </UiAlert>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <UiCard title="Recent Activity" no-padding>
             <div class="divide-y divide-neutral-100">
               <div v-for="i in 3" :key="i" class="p-4 flex items-center gap-4 hover:bg-neutral-50 transition-colors">
                 <div class="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
                   <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                 </div>
                 <div class="flex-1">
                   <p class="text-sm font-medium text-neutral-900">New notification received</p>
                   <p class="text-xs text-neutral-500">2 minutes ago</p>
                 </div>
                 <UiButton size="sm" variant="ghost">View</UiButton>
               </div>
             </div>
          </UiCard>

          <UiCard title="Team Goals">
            <UiAccordion :items="accordionItems" />
          </UiCard>
        </div>
      </section>

      <!-- Forms -->
      <section v-if="activeTab === 'forms'" class="space-y-6 animate-fade-in">
        <header>
          <h2 class="text-2xl font-bold text-neutral-900">Form Elements</h2>
          <p class="text-neutral-500">Comprehensive set of inputs and controls.</p>
        </header>

        <UiCard title="Account Settings">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UiInput label="Full Name" v-model="formData.name" placeholder="John Doe" />
            <UiInput label="Email Address" v-model="formData.email" placeholder="john@example.com" hint="We'll never share your email." />
            
            <UiSelect label="Role" :options="roles" v-model="formData.role" />
            
            <div class="space-y-3">
              <label class="block text-sm font-medium text-neutral-700 ml-1">Theme Preference</label>
              <div class="flex gap-4">
                <UiRadio v-for="opt in radioOptions" :key="opt" :label="opt" :value="opt" :name="theme" v-model="formData.theme" class="capitalize" />
              </div>
            </div>

            <UiTextarea label="Bio" v-model="formData.bio" placeholder="Tell us about yourself..." class="md:col-span-2" />

            <div class="md:col-span-2 flex flex-col gap-4">
              <UiSwitch label="Enable Email Notifications" v-model="formData.notifications" />
              
              <div class="p-4 bg-neutral-50 rounded-xl">
                <h4 class="text-sm font-medium mb-3">Skills</h4>
                <div class="flex gap-4">
                  <UiCheckbox label="Vue.js" value="vue" v-model="formData.skills" />
                  <UiCheckbox label="React" value="react" v-model="formData.skills" />
                  <UiCheckbox label="Angular" value="angular" v-model="formData.skills" />
                </div>
              </div>
              
               <UiCheckbox label="I agree to the Terms of Service" v-model="formData.terms" />
            </div>
          </div>
          
          <template #footer>
            <UiButton variant="neutral" class="mr-3">Cancel</UiButton>
            <UiButton>Save Changes</UiButton>
          </template>
        </UiCard>

        <div class="flex flex-wrap gap-4">
           <UiButton>Primary</UiButton>
           <UiButton variant="secondary">Secondary</UiButton>
           <UiButton variant="success">Success</UiButton>
           <UiButton variant="warning">Warning</UiButton>
           <UiButton variant="danger">Danger</UiButton>
           <UiButton variant="neutral">Neutral</UiButton>
           <UiButton variant="success">Success</UiButton>
           <UiButton variant="warning">Warning</UiButton>
           <UiButton variant="danger">Danger</UiButton>
           <UiButton variant="neutral">Neutral</UiButton>
           <UiButton variant="ghost">Ghost</UiButton>
           <UiButton disabled>Disabled</UiButton>
        </div>
      </section>

      <!-- Data Display -->
      <section v-if="activeTab === 'data'" class="space-y-6 animate-fade-in">
        <header>
          <h2 class="text-2xl font-bold text-neutral-900">Data Display</h2>
        </header>

         <UiCard title="Team Members" no-padding>
           <table class="w-full text-sm text-left">
              <thead class="bg-neutral-50 text-neutral-500 uppercase font-semibold text-xs border-b border-neutral-200">
                <tr>
                  <th class="px-6 py-4">User</th>
                  <th class="px-6 py-4">Role</th>
                  <th class="px-6 py-4">Status</th>
                  <th class="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-neutral-100">
                <tr v-for="user in users" :key="user.email" class="hover:bg-neutral-50/50">
                  <td class="px-6 py-4 flex items-center gap-3">
                    <UiAvatar :initials="user.name.charAt(0)" :status="user.status === 'active' ? 'online' : (user.status === 'busy' ? 'busy' : 'offline')" />
                    <div>
                      <p class="font-medium text-neutral-900">{{ user.name }}</p>
                      <p class="text-neutral-500 text-xs">{{ user.email }}</p>
                    </div>
                  </td>
                  <td class="px-6 py-4 text-neutral-600">{{ user.role }}</td>
                  <td class="px-6 py-4">
                    <UiBadge :variant="user.status === 'active' ? 'success' : (user.status === 'busy' ? 'warning' : 'neutral')">
                      {{ user.status }}
                    </UiBadge>
                  </td>
                  <td class="px-6 py-4">
                    <UiButton size="sm" variant="ghost">Edit</UiButton>
                  </td>
                </tr>
              </tbody>
           </table>
         </UiCard>
      </section>

      <!-- Feedback -->
      <section v-if="activeTab === 'feedback'" class="space-y-6 animate-fade-in">
         <header>
          <h2 class="text-2xl font-bold text-neutral-900">Feedback & Overlays</h2>
        </header>

        <div class="space-y-4">
          <UiAlert variant="info" title="Info">This is an informational alert.</UiAlert>
          <UiAlert variant="success" title="Success">Operation completed successfully.</UiAlert>
          <UiAlert variant="warning" title="Warning">Your account is pending verification.</UiAlert>
          <UiAlert variant="error" title="Error">Something went wrong.</UiAlert>
        </div>

        <UiCard>
          <div class="text-center py-8">
            <h3 class="text-lg font-medium mb-4">Modal Dialog</h3>
            <UiButton @click="isModalOpen = true">Open Modal</UiButton>
          </div>
        </UiCard>
      </section>

      <!-- Documentation -->
      <section v-if="activeTab === 'docs'" class="space-y-8 animate-fade-in">
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
                        <UiButton variant="success">Success</UiButton>
                        <UiButton variant="warning">Warning</UiButton>
                        <UiButton variant="danger">Danger</UiButton>
                        <UiButton variant="neutral">Neutral</UiButton>
                        <UiButton variant="ghost">Ghost</UiButton>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <UiButton disabled>Disabled Primary</UiButton>
                        <UiButton variant="secondary" disabled>Disabled Secondary</UiButton>
                        <UiButton variant="ghost" disabled>Disabled Ghost</UiButton>
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
                       <UiButton variant="neutral" @click="docsModalOpen = false">Close</UiButton>
                       <UiButton @click="docsModalOpen = false">Confirm</UiButton>
                     </template>
                   </UiModal>
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

    <!-- Modal Portal -->
    <UiModal :isOpen="isModalOpen" title="Confirmation" @close="isModalOpen = false">
      <p class="text-neutral-600 mb-4">
        Are you sure you want to proceed with this action? This illustration demonstrates the modal component overlaying the content.
      </p>
      <div class="p-4 bg-warning-50 rounded-lg border border-warning-100 text-warning-800 text-sm mb-4">
        <strong>Note:</strong> This action cannot be undone.
      </div>
      <template #footer>
        <UiButton variant="neutral" @click="isModalOpen = false">Cancel</UiButton>
        <UiButton variant="primary" @click="isModalOpen = false">Confirm</UiButton>
      </template>
    </UiModal>

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
