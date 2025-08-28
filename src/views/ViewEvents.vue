<script setup lang="ts">
import PageResponsive from '@/components/page/PageResponsive.vue'
import { appName } from '@/shared/constants'
import { backIcon, mapPinIcon, scheduleTimeIcon } from '@/shared/icons'
import { useMeta } from 'quasar'
import { ref, computed, onMounted } from 'vue'
import { events } from '@/shared/constants'
import type { Page } from 'v-calendar/dist/types/src/utils/page.js'
import type { CalendarComponent } from 'v-calendar/dist/types/tests/unit/specs/utils.js'

const calendarWrapper = ref<HTMLElement | null>(null)
const calendar = ref<CalendarComponent>(null)
const selectedDate = ref<Date | null>(null)
const visibleMonth = ref(new Date().getMonth())
const visibleYear = ref(new Date().getFullYear())

onMounted(() => {
  if (calendar.value) {
    calendar.value.move(new Date())
  }
})

interface VCalendarDay {
  date: Date       // JS Date object
  weekday: number  // 0 = Sunday, 6 = Saturday
}

function onDayClick(day: VCalendarDay) {
  // 'day.date' is a JS Date object
  selectedDate.value = day.date
  console.log('User selected date:', selectedDate.value)
  console.log(eventsForSelected)
}

function handleClickOutside(event: MouseEvent) {
  const target = event.target as HTMLElement
  // if clicked element does NOT have class 'vc-day-content'
  if (!target.classList.contains('vc-day-content')) {
    console.log('User clicked OFF of dates');
    selectedDate.value = null
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

/*function onMonthChanged({ month, year }) {
  visibleMonth.value = month;
  visibleYear.value = year;
}*/

function onPagesUpdate(pages: Page[] | any[]) {
  if (!pages || !pages.length) return

  // Use the first page (left-most / only pane)
  const first = pages[0]

  // Page.month is 1-based (Jan=1). Convert to 0-based JS month.
  visibleMonth.value = (first.month ?? (first as any).month) - 1
  visibleYear.value = first.year ?? (first as any).year

  // debug - inspect the page object so you can confirm structure
  console.log('v-calendar pages update:', pages)
  console.log('visibleMonth (0-based):', visibleMonth.value, 'visibleYear:', visibleYear.value)
}

const eventsForSelected = computed(() => {
  if (!selectedDate.value) return null // no day selected
  const dayEvents = events.filter(
    e => new Date(e.date).toDateString() === selectedDate.value!.toDateString()
  )
  return dayEvents // empty array if no events, array if events exist
})

const eventsForMonth = computed(() =>
  events.filter(e => {
    const d = new Date(e.date)
    return d.getMonth() === visibleMonth.value && d.getFullYear() === visibleYear.value
  })
)

const displayedEvents = computed(() => {
  if (selectedDate.value === null) {
    // no day selected → show all events for the month
    return eventsForMonth.value
  }

  // day is selected
  if (eventsForSelected.value && eventsForSelected.value.length > 0) {
    return eventsForSelected.value
  }

  // day selected but no events
  return []
})

const attributes = [
  {
    key: 'events',
    highlight: 'teal',
    dates: events.map(e => e.date),
  }
]

useMeta({ title: `${appName} - Events` })
</script>

<template>
  <PageResponsive style="margin: 8px">
    <div>
      <!-- Top Bar -->
      <div class="hero-top-bar flex justify-left items-center">
        <q-btn flat round :icon="backIcon" @click="$router.back()" />
        <h4 class="text-h6 hero-top-bar page-name">Calendar Of Events</h4>
      </div>
      <!-- Calendar Area -->
      <div ref="calendarWrapper" class="calendar-month w-full">
        <v-calendar
          ref="calendar"
          class="w-full"
          @dayclick="onDayClick"
          @update:pages="onPagesUpdate"
          expanded
          borderless
          :masks="{ weekdays: 'WWW' }"
          :attributes="attributes"
        >
          <template #day-header="{ weekday }">
            <div class="my-weekday-header">
              {{ ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][weekday] }}
            </div>
          </template>
        </v-calendar>
      </div>
      <!-- Events List -->
      <div class="q-ma-lg">
        <div
          v-for="event in displayedEvents"
          :key="event.id"
          class="event-list-item q-mt-md q-pa-md bg-primary text-white rounded-borders row items-center"
        >
          <!-- Left column: Date -->
          <div class="col-3 flex flex-center">
            <div class="column items-center">
              <div class="event-day-text event-font">{{ new Date(event.date).toLocaleDateString('en-US', { weekday: 'short' }) }}</div>
              <div class="event-day-text event-font">{{ new Date(event.date).getDate() }}</div>
            </div>
          </div>

          <!-- Right column: Event details -->
          <div class="col-9 column">
            <div class="event-title event-font">{{ event.title }}</div>
            <div class="event-subtext event-font">
              <q-icon :name="scheduleTimeIcon"/>
              {{ event.time }}
            </div>
            <div class="event-subtext event-font">
              <q-icon :name="mapPinIcon"/>
              {{ event.location }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageResponsive>
</template>

<style scoped>
.hero-top-bar {
  height: 40px;
  margin: 0;
}
.page-name {
  padding-top: 4px;
}
.calendar-month {
  margin-top: 5vh;
  height: 33vh;
}
.vc-title {
  margin: 100px;
  padding: 100px;
}
.event-list-item {
  padding: 3px;
  border-radius: 24px;
  height: 79px;
}
.event-font {
  font-family: 'Monsterra', sans-serif;
  font-style: normal;
  font-weight: 600;
  text-transform: capitalize;
}
.event-title {
  margin-top: 6px;
  margin-bottom: 6px;
  font-size: 12px;
  line-height: normal;
}
.event-day-text {
  font-size: 14px;
  line-height: normal;
}
.event-subtext {
  margin-top: 3px;
  margin-bottom: 3px;
  margin-left: 10px;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px; /* 120% */
}
</style>
