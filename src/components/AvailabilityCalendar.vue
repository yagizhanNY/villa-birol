<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from '../i18n'
import { Calendar } from 'v-calendar'
import 'v-calendar/style.css'

const { t, locale } = useI18n()

const isLoading = ref(true)
const error = ref<string | null>(null)

const busyDates = ref<{ start: Date; end: Date }[]>([])
const hasDates = ref(false)

const columns = ref(1)

const updateColumns = () => {
  columns.value = window.innerWidth >= 1024 ? 2 : 1
}

const fetchCalendar = async () => {
  try {
    isLoading.value = true
    error.value = null
    const response = await fetch('/api/calendar', { cache: 'no-store' })
    if (!response.ok) throw new Error('Failed to fetch calendar')
    
    const data = await response.json()
    hasDates.value = data.busyDates && data.busyDates.length > 0

    busyDates.value = data.busyDates.map((d: any) => ({
      start: new Date(d.start),
      end: new Date(d.end)
    }))

  } catch (err: any) {
    console.warn('API fetch failed:', err)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchCalendar()
  updateColumns()
  window.addEventListener('resize', updateColumns)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateColumns)
})

const attributes = computed(() => {
  return [
    {
      key: `busy-${locale.value}`,
      highlight: {
        class: 'bg-navy-solid',
        contentClass: 'text-white-solid',
      },
      dates: busyDates.value,
      popover: { label: t('calendar.booked') }
    }
  ] as any
})
</script>

<template>
  <section class="py-20 bg-white relative z-10 border-t border-b border-gray-100" id="availability">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      
      <div class="text-center mb-14">
        <p class="section-label">{{ t('calendar.label') }}</p>
        <h2 class="section-title">{{ t('calendar.title') }}</h2>
        <div class="gold-divider mx-auto mt-4"></div>
      </div>

      <div class="flex justify-center">
        <div v-if="isLoading" class="flex flex-col items-center justify-center py-12">
          <div class="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
        </div>
        
        <div v-else-if="error && !hasDates" class="text-red-500 text-center py-8">
          {{ error }}
        </div>

        <div v-else class="w-full max-w-4xl calendar-container flex justify-center">
          <Calendar
            :key="locale"
            :attributes="attributes"
            :columns="columns"
            :locale="locale"
            class="custom-calendar border-none shadow-xl rounded-2xl bg-cream"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* Custom styling to match brand palette */
.calendar-container .custom-calendar {
  --vc-font-family: var(--font-body);
  --vc-border: rgba(0,0,0,0.05);
}

.calendar-container .vc-container {
  background-color: var(--color-cream);
  padding: 1.5rem;
}

/* Header */
.calendar-container .vc-header {
  padding-bottom: 1rem;
}
.calendar-container .vc-title {
  color: var(--color-navy) !important;
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 600;
}
.calendar-container .vc-arrow {
  color: var(--color-navy);
  background: transparent;
}
.calendar-container .vc-arrow:hover {
  background: rgba(15, 28, 46, 0.05);
}

/* Weekdays */
.calendar-container .vc-weekday {
  color: var(--color-text-muted);
  font-weight: 500;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  padding-bottom: 0.5rem;
}

/* Day cells */
.calendar-container .vc-day-content {
  color: var(--color-navy);
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.2s ease;
}
.calendar-container .vc-day-content:hover {
  background-color: rgba(201, 169, 110, 0.15); /* light gold hover */
}

/* Half Day Custom Backgrounds */
.bg-navy-solid {
  background-color: var(--color-navy) !important;
  border-radius: 8px;
  opacity: 0.9;
}
.text-white-solid {
  color: white !important;
}

/* Popover */
.calendar-container .vc-popover-content {
  font-family: var(--font-body);
  border-radius: 8px;
  border: 1px solid rgba(0,0,0,0.1);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}
</style>
