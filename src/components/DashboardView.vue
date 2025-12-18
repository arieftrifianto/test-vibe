<script setup>
import { ref } from 'vue';
import UiCard from './ui/UiCard.vue';
import UiBadge from './ui/UiBadge.vue';
import UiProgress from './ui/UiProgress.vue';
import UiAvatar from './ui/UiAvatar.vue';
import UiButton from './ui/UiButton.vue';
import UiTable from './ui/UiTable.vue';
import UiAlert from './ui/UiAlert.vue';
import UiCheckbox from './ui/UiCheckbox.vue';
import UiCalendar from './ui/UiCalendar.vue';
import UiInput from './ui/UiInput.vue';
import UiTextarea from './ui/UiTextarea.vue';

// Assets
import heroBg from '../assets/hero_bg.png';
import project1Img from '../assets/project_1.png';
import project2Img from '../assets/project_2.png';
import taskThumb from '../assets/task_thumb.png';

const chartData = [40, 70, 55, 90, 65, 80, 75];
const polylinePoints = chartData.map((h, i) => `${(i * 100) / 6},${100 - h}`).join(' ');

const selectedDate = ref(new Date());
const searchQuery = ref('');
const quickNote = ref('');

const upcomingTasks = ref([
  { id: 1, title: 'Finalize Styleguide', completed: false, category: 'Design' },
  { id: 2, title: 'API Integration', completed: true, category: 'Dev' },
  { id: 3, title: 'User Research Session', completed: false, category: 'UX' },
  { id: 4, title: 'Asset Export', completed: false, category: 'Design' },
]);

const projects = [
  { name: 'Calm Design System', progress: 85, status: 'Active', members: 4 },
  { name: 'Mobile App Redesign', progress: 42, status: 'In Progress', members: 2 },
  { name: 'Landing Page v2', progress: 15, status: 'Planning', members: 1 },
];

const team = [
  { initials: 'AB', status: 'online', name: 'Alex' },
  { initials: 'CD', status: 'busy', name: 'Casey' },
  { initials: 'EF', status: 'online', name: 'Emma' },
  { initials: 'GH', status: 'offline', name: 'Grant' },
];

const recentSessions = [
  { title: 'Project Research', duration: '45m', category: 'UX', type: 'Deep Work' },
  { title: 'Styleguide Update', duration: '1h 20m', category: 'Design', type: 'Flow' },
  { title: 'API Debugging', duration: '30m', category: 'Dev', type: 'Fix' },
];

const recentAssets = [
  { name: 'Hero_Illustration.png', size: '2.4mb', time: '12m ago', type: 'image' },
  { name: 'Dashboard_Flow.fig', size: '1.2mb', time: '1h ago', type: 'file' },
  { name: 'Icon_Set_V2.svg', size: '42kb', time: '3h ago', type: 'svg' },
];
</script>

<template>
  <div class="space-y-8 animate-fade-in pb-12">
    <!-- Hero (Full Width) -->
    <div class="relative h-64 rounded-[32px] overflow-hidden shadow-clay-card group">
      <img :src="heroBg" class="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" alt="Hero Background" />
      <div class="absolute inset-0 bg-gradient-to-r from-neutral-900/60 via-neutral-900/20 to-transparent flex flex-col justify-center px-12">
        <UiBadge variant="primary" class="mb-4 self-start">Workspace Active</UiBadge>
        <h2 class="text-4xl font-extrabold text-white drop-shadow-lg tracking-tight">Level Up Your Focus, Alex</h2>
        <p class="text-white/80 mt-3 text-lg max-w-lg leading-relaxed font-medium">
          You've completed <span class="text-white font-bold underline">85%</span> of your weekly goals. Finish the remaining tasks to hit your target!
        </p>
      </div>
    </div>

    <!-- Layout: Dense Interlocking Bento Grid -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-min grid-flow-dense">
      
      <!-- Command Center (4 cols) -->
      <UiCard class="md:col-span-4" no-padding>
        <div class="flex flex-col md:flex-row items-center gap-6 p-6">
          <div class="flex-1 w-full">
            <UiInput 
              v-model="searchQuery" 
              placeholder="Searching for projects, assets, or team members..." 
              class="!mb-0"
              icon="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </div>
          <div class="flex items-center gap-2 shrink-0">
             <UiButton variant="secondary" size="sm">Action Hub</UiButton>
             <UiButton size="sm">Create New</UiButton>
          </div>
        </div>
      </UiCard>

      <!-- Productivity Flow (2x1) -->
      <UiCard class="md:col-span-2" title="Productivity Flow" subtitle="Minutes per day">
        <div class="relative h-48 mt-4 px-2 overflow-hidden">
          <div class="absolute inset-0 flex flex-col justify-between py-1 opacity-10 pointer-events-none">
            <div v-for="i in 5" :key="i" class="border-t border-neutral-900 w-full"></div>
          </div>
          <svg class="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
            <polyline fill="none" stroke="rgba(58, 124, 165, 0.4)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :points="polylinePoints" />
          </svg>
          <div class="relative h-full flex items-end justify-between gap-2">
            <div v-for="(h, i) in chartData" :key="i" class="flex-1 flex flex-col items-center">
               <div class="w-full bg-primary-500 rounded-t-xl relative transition-all duration-500 shadow-sm" :style="{ height: h + '%' }"></div>
               <span class="text-[9px] font-bold text-neutral-400 mt-2 tracking-tighter">{{ ['M', 'T', 'W', 'T', 'F', 'S', 'S'][i] }}</span>
            </div>
          </div>
        </div>
        <template #footer>
          <div class="flex justify-between items-center text-[11px] font-bold">
            <span class="text-neutral-500">AVG: 72m/day</span>
            <UiBadge variant="success" size="sm">Optimal</UiBadge>
          </div>
        </template>
      </UiCard>

      <!-- Mindful Schedule (2x1) -->
      <UiCard class="md:col-span-2" title="Mindful Schedule" subtitle="Your focus window">
         <div class="py-2 space-y-4">
            <UiCalendar v-model="selectedDate" class="!shadow-none !p-0 w-full" />
            <div class="px-3 py-2 rounded-xl bg-neutral-50/50 border border-neutral-100 flex flex-col gap-2">
               <div v-for="t in [
                 { time: '10:00 AM', label: 'Sync' },
                 { time: '11:30 AM', label: 'Design Critique' },
                 { time: '2:30 PM', label: 'Focus Session' },
                 { time: '4:00 PM', label: 'Team Coffee' }
               ]" :key="t.time" class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <div class="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                    <span class="text-[10px] font-bold text-neutral-700">{{ t.label }}</span>
                  </div>
                  <span class="text-[9px] font-black text-neutral-400 uppercase tracking-widest">{{ t.time }}</span>
               </div>
            </div>
         </div>
         <template #footer>
            <div class="flex justify-between items-center text-[10px] font-bold text-neutral-500">
               <span>Next: 2:30 PM Focus</span>
               <UiButton variant="ghost" size="sm" class="!px-0 !py-0 h-auto text-primary-600">Full Schedule</UiButton>
            </div>
         </template>
      </UiCard>

      <!-- Recent Activity Log (2x1) -->
      <UiCard class="md:col-span-2" title="Activity Log" subtitle="Recent focus blocks">
        <div class="space-y-3 py-1">
           <div v-for="(session, idx) in recentSessions.slice(0, 3)" :key="idx" class="flex items-center justify-between p-3 rounded-xl bg-neutral-50/50 border border-neutral-100/30 group hover:shadow-soft-sm transition-all duration-300">
              <div class="flex items-center gap-3">
                 <div class="w-8 h-8 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-primary-600 font-bold text-[10px]">{{ session.duration }}</div>
                 <div class="flex flex-col">
                    <span class="text-xs font-bold text-neutral-800">{{ session.title }}</span>
                    <span class="text-[9px] text-neutral-400 font-bold uppercase tracking-widest">{{ session.category }}</span>
                 </div>
              </div>
              <UiBadge variant="neutral" size="sm" class="text-[9px]">{{ session.type }}</UiBadge>
           </div>
        </div>
      </UiCard>

      <!-- Mindful Note / Quick Capture (2x1) -->
      <UiCard class="md:col-span-2" title="Mindful Notes" subtitle="Capture a thought">
        <div class="py-1">
           <UiTextarea 
             v-model="quickNote" 
             placeholder="Write down a quick insight or task to clear your head..."
             class="!mb-0"
             :rows="3"
           />
           <div class="flex justify-between items-center mt-3">
              <span class="text-[10px] font-bold text-neutral-400">Autosaved just now</span>
              <UiButton variant="secondary" size="sm" class="scale-90 origin-right">Save Note</UiButton>
           </div>
        </div>
      </UiCard>

      <!-- Mini Widgets (1x1 each) -->
      <UiCard title="Goal Progress">
        <div class="flex flex-col items-center justify-center py-4">
           <div class="relative w-24 h-24 mb-3">
              <svg class="w-full h-full transform -rotate-90">
                <circle cx="48" cy="48" r="40" stroke="currentColor" stroke-width="10" fill="transparent" class="text-neutral-100" />
                <circle cx="48" cy="48" r="40" stroke="currentColor" stroke-width="10" fill="transparent" class="text-primary-500 transition-all duration-1000" stroke-dasharray="251.2" :stroke-dashoffset="251.2 * (1 - 0.75)" stroke-linecap="round" />
              </svg>
              <div class="absolute inset-0 flex flex-col items-center justify-center">
                <span class="font-black text-xl text-neutral-800 tracking-tighter">75%</span>
              </div>
           </div>
           <p class="text-[9px] font-black text-neutral-400 uppercase tracking-widest">Sprint Target</p>
        </div>
      </UiCard>

      <UiCard title="Active Team">
        <div class="space-y-3 py-1">
           <div v-for="u in team.slice(0, 3)" :key="u.initials" class="flex justify-between items-center group p-1">
              <div class="flex items-center gap-3">
                <UiAvatar :initials="u.initials" :status="u.status" size="sm" />
                <span class="text-xs font-bold text-neutral-700">{{ u.name }}</span>
              </div>
              <div class="w-1.5 h-1.5 rounded-full" :class="u.status === 'online' ? 'bg-success-500 anim-pulse' : 'bg-neutral-300'"></div>
           </div>
        </div>
        <template #footer>
            <UiButton variant="ghost" size="sm" block class="text-[10px] font-bold">Workspace Chat</UiButton>
        </template>
      </UiCard>

      <!-- Asset Pulse (2x1) -->
      <UiCard class="md:col-span-2" title="Asset Pulse" subtitle="Recent uploads & syncs">
        <div class="space-y-3 py-1">
           <div v-for="asset in recentAssets" :key="asset.name" class="flex items-center justify-between p-2.5 rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer group">
              <div class="flex items-center gap-3">
                 <div class="w-8 h-8 rounded bg-neutral-100 flex items-center justify-center border border-neutral-100">
                    <svg v-if="asset.type === 'image'" class="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                    <svg v-else class="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                 </div>
                 <div class="flex flex-col">
                    <span class="text-xs font-bold text-neutral-700 group-hover:text-primary-600 truncate max-w-[120px]">{{ asset.name }}</span>
                    <span class="text-[9px] font-black text-neutral-400 uppercase tracking-widest">{{ asset.size }} • {{ asset.time }}</span>
                 </div>
              </div>
              <div class="w-5 h-5 rounded-full bg-success-50 flex items-center justify-center">
                 <svg class="w-3 h-3 text-success-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              </div>
           </div>
        </div>
      </UiCard>

      <!-- Quick Task Insight (2x1) -->
      <UiCard class="md:col-span-2 overflow-hidden" title="Mindful Tasks">
        <div class="flex gap-4 h-full items-center py-1">
          <div class="flex-1 space-y-3">
             <div v-for="task in upcomingTasks.slice(0, 3)" :key="task.id" class="flex items-center gap-3">
                <UiCheckbox v-model="task.completed" size="sm" />
                <span class="text-[11px] font-bold text-neutral-700 group-hover:text-primary-600 transition-colors" :class="{ 'line-through opacity-40': task.completed }">{{ task.title }}</span>
             </div>
          </div>
          <div class="w-20 h-20 shrink-0 opacity-40">
            <img :src="taskThumb" class="w-full h-full object-contain" alt="Tasks" />
          </div>
        </div>
        <template #footer>
           <span class="text-[10px] font-bold text-neutral-400">3 of 4 tasks remaining for today</span>
        </template>
      </UiCard>

      <!-- Project Insight (2x1) -->
      <UiCard class="md:col-span-2 overflow-hidden p-0" no-padding>
        <div class="flex h-full min-h-[160px] items-stretch group">
          <div class="p-6 flex-1 flex flex-col justify-center bg-white z-10">
            <h4 class="text-lg font-black text-neutral-900 tracking-tight leading-tight">Creative Output</h4>
            <p class="text-[11px] text-neutral-500 mt-2 mb-4 leading-relaxed font-medium">Your current workspace optimization is boosting output by <span class="text-success-600 font-bold">14%</span>.</p>
            <UiButton size="sm" variant="secondary" class="self-start shadow-sm scale-90 origin-left">Explore Insights</UiButton>
          </div>
          <div class="w-1/3 shrink-0 relative overflow-hidden bg-primary-100">
            <img :src="project1Img" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Creative" />
            <div class="absolute inset-0 bg-primary-500/10 mix-blend-multiply"></div>
          </div>
        </div>
      </UiCard>

      <!-- Health & Alert (Bottom Row Pairs) -->
      <UiCard class="md:col-span-2" title="System Health" subtitle="Core status">
        <div class="grid grid-cols-2 gap-3 py-1">
          <div v-for="(v, k) in { 'Uptime': '99.9%', 'Sync': 'Active' }" :key="k" class="p-3 rounded-xl bg-neutral-50/50 border border-neutral-100/50 flex flex-col gap-1">
            <span class="text-[9px] font-black text-neutral-400 uppercase tracking-widest">{{ k }}</span>
            <span class="text-xs font-bold text-neutral-800">{{ v }}</span>
          </div>
        </div>
        <template #footer>
           <div class="flex items-center gap-2 text-[9px] font-bold text-neutral-400">
             <div class="w-1.5 h-1.5 rounded-full bg-success-500"></div> All systems stable
           </div>
        </template>
      </UiCard>

      <div class="md:col-span-2">
         <div class="p-6 rounded-2xl bg-warning-50 border border-warning-100 shadow-clay-card flex flex-col justify-between h-full">
            <div>
               <div class="flex items-center gap-2 text-warning-700 font-bold text-xs uppercase tracking-widest">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  Mindful Alert
               </div>
               <p class="text-[11px] text-warning-800 mt-3 font-medium leading-relaxed italic">"Mobile App Redesign" due in <span class="font-bold underline">2 days</span>.</p>
            </div>
            <UiButton variant="secondary" size="sm" class="mt-4 self-start bg-white/50 border-warning-200 !text-warning-800 scale-90 origin-left">Review Checklist</UiButton>
         </div>
      </div>

      <!-- Global Inventory (4x1) -->
      <UiCard class="md:col-span-4" title="Project Inventory" subtitle="Comprehensive status overview" no-padding>
         <div class="overflow-x-auto">
            <table class="w-full text-[11px] text-left">
              <thead class="bg-neutral-50/50 text-neutral-500 font-bold uppercase border-b border-neutral-100">
                <tr>
                  <th class="px-8 py-4">Project</th>
                  <th class="px-8 py-4">Progress</th>
                  <th class="px-8 py-4">Status</th>
                  <th class="px-8 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-neutral-100">
                <tr v-for="p in projects" :key="p.name" class="hover:bg-neutral-50/70 transition-colors group">
                  <td class="px-8 py-4"><span class="font-bold text-neutral-900">{{ p.name }}</span></td>
                  <td class="px-8 py-4">
                    <div class="flex items-center gap-4 w-32">
                      <UiProgress :value="p.progress" class="flex-1 !h-1" variant="primary" />
                      <span class="font-black text-neutral-700 w-6 text-right">{{ p.progress }}%</span>
                    </div>
                  </td>
                  <td class="px-8 py-4">
                    <UiBadge :variant="p.status === 'Active' ? 'success' : (p.status === 'Planning' ? 'neutral' : 'primary')" class="text-[9px]">{{ p.status }}</UiBadge>
                  </td>
                  <td class="px-8 py-4 text-right">
                    <UiButton size="sm" variant="ghost" class="!px-3 !py-1">Details</UiButton>
                  </td>
                </tr>
              </tbody>
            </table>
         </div>
      </UiCard>

    </div>
  </div>
</template>

<style scoped>
.shadow-clay-card {
  box-shadow: inset -4px -4px 8px 0 rgba(0,0,0,0.02), inset 4px 4px 8px 0 rgba(255,255,255,0.8), 8px 8px 16px 0 rgba(0,0,0,0.06);
}
@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
}
.anim-pulse {
  animation: pulse 2s infinite ease-in-out;
}
</style>
