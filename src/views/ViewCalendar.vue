<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import PageResponsive from '@/components/page/PageResponsive.vue'
import { appName, calendarFeedUrl, parks } from '@/shared/constants'
import { backIcon, mapPinIcon, scheduleTimeIcon } from '@/shared/icons'
import { useMeta } from 'quasar'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import ical from 'cal-parser'
import type { Page } from 'v-calendar/dist/types/src/utils/page.js'
import type { CalendarEvent } from '@/shared/constants'
import type { CalendarComponent } from 'v-calendar/dist/types/tests/unit/specs/utils.js'

const calendarWrapper = ref<HTMLElement | null>(null)
const calendar = ref<CalendarComponent>(null)
const selectedDate = ref<Date | null>(null)
const visibleMonth = ref(new Date().getMonth())
const visibleYear = ref(new Date().getFullYear())
const events = ref<CalendarEvent[]>([])
const isLoadingEvents = ref(false)
const eventLoadError = ref<string | null>(null)

interface VCalendarDay {
  date: Date
  weekday: number
}

function normalizeIcalForCalParser(ics: string): string {
  return ics
    .replace(/\r\n/g, '\n')
    .replace(/\n[ \t]/g, '')
    .replace(
      /^(DTSTART|DTEND|DTSTAMP|LAST-MODIFIED);TZID=[^:]+:(\d{8})T(\d{2})(\d{2})(\d{2})$/gm,
      '$1:$2T$3$4$5Z'
    )
}

function getIcalValue(value: any): any {
  return value?.value ?? value ?? ''
}

function normalizeText(value: string): string {
  return value.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, ' ').trim()
}

function matchParkId(text: string): number | null {
  const normalized = normalizeText(text)

  const directMatch = parks.find(park =>
    normalized.includes(normalizeText(park.name))
    || normalized.includes(normalizeText(park.address))
  )

  if (directMatch) return directMatch.id

  if (normalized.includes('bendix')) return 0
  if (normalized.includes('crone')) return 1
  if (normalized.includes('chamberlain')) return 2
  if (normalized.includes('ferrettie') || normalized.includes('baugo')) return 3
  if (normalized.includes('lasalle')) return 4
  if (normalized.includes('spicer')) return 5
  if (normalized.includes('patrick')) return 6

  return null
}

function mapIcalEvent(event: any, index: number): CalendarEvent {
  const title = String(getIcalValue(event.summary))
  const location = String(getIcalValue(event.location))
  const description = String(getIcalValue(event.description))
  const startValue = getIcalValue(event.dtstart)
  const endValue = getIcalValue(event.dtend) || startValue
  const start = new Date(startValue)
  const end = new Date(endValue)

  return {
    id: String(getIcalValue(event.uid) || `${title}-${index}`),
    start: start.toISOString(),
    end: end.toISOString(),
    title,
    park: matchParkId(`${title} ${location} ${description}`),
    location,
    description,
  }
}

async function loadEvents() {
  isLoadingEvents.value = true
  eventLoadError.value = null

  try {
    const response = await fetch(calendarFeedUrl, {
      method: 'GET',
      mode: 'cors',
    })

    if (!response.ok) {
      throw new Error(`Calendar feed failed: ${response.status}`)
    }

    const rawIcs = await response.text()
    const normalizedIcs = normalizeIcalForCalParser(rawIcs)

    const parsed = ical.parseString(normalizedIcs)

    events.value = parsed.events
      .map(mapIcalEvent)
      .filter(
        event =>
          event.title &&
          event.start &&
          !Number.isNaN(new Date(event.start).getTime())
      )
      .sort(
        (a, b) =>
          new Date(a.start).getTime() -
          new Date(b.start).getTime()
      )
  } catch (error) {
    console.error('Calendar load failed:', error)
    eventLoadError.value = 'Unable to load calendar events.'
    events.value = []
  } finally {
    isLoadingEvents.value = false
  }
}

function onDayClick(day: VCalendarDay) {
  selectedDate.value = day.date
}

function handleClickOutside(event: MouseEvent) {
  const target = event.target as HTMLElement

  if (!target.classList.contains('vc-day-content')) {
    selectedDate.value = null
  }
}

function onPagesUpdate(pages: Page[] | any[]) {
  if (!pages || !pages.length) return

  const first = pages[0]

  visibleMonth.value = (first.month ?? (first as any).month) - 1
  visibleYear.value = first.year ?? (first as any).year
}

const eventsForSelected = computed(() => {
  if (!selectedDate.value) return null

  return events.value.filter(
    event => new Date(event.start).toDateString() === selectedDate.value!.toDateString()
  )
})

const eventsForMonth = computed(() =>
  events.value.filter(event => {
    const date = new Date(event.start)
    return date.getMonth() === visibleMonth.value && date.getFullYear() === visibleYear.value
  })
)

const displayedEvents = computed(() => {
  if (selectedDate.value === null) {
    return eventsForMonth.value
  }

  if (eventsForSelected.value && eventsForSelected.value.length > 0) {
    return eventsForSelected.value
  }

  return []
})

function toLocalDateOnly(date: string | Date) {
  const parsed = new Date(date)
  return new Date(parsed.getFullYear(), parsed.getMonth(), parsed.getDate())
}

function buildDatesArray(calendarEvents: CalendarEvent[]) {
  return calendarEvents.flatMap(event => {
    const start = toLocalDateOnly(event.start)
    const end = event.end ? toLocalDateOnly(event.end) : start

    if (start.getTime() === end.getTime()) {
      return [start]
    }

    return [start, end]
  })
}

const datesForAttributes = computed(() => buildDatesArray(events.value))

const attributes = computed(() => [
  {
    key: 'events',
    highlight: 'teal',
    dates: datesForAttributes.value,
  },
])

function formatAMPM(date: Date): string {
  let hours = date.getHours()
  const minutes = date.getMinutes()
  const ampm = hours >= 12 ? 'PM' : 'AM'

  hours = hours % 12 || 12

  const minutesStr = minutes.toString().padStart(2, '0')
  return `${hours}:${minutesStr} ${ampm}`
}

onMounted(async () => {
  if (calendar.value) {
    calendar.value.move(new Date())
  }

  document.addEventListener('click', handleClickOutside)
  await loadEvents()
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

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
        <div v-if="isLoadingEvents" class="q-mt-md text-center">
          Loading events...
        </div>

        <div v-else-if="eventLoadError" class="q-mt-md text-center text-negative">
          {{ eventLoadError }}
        </div>

        <div v-else-if="displayedEvents.length === 0" class="q-mt-md text-center">
          No events found.
        </div>

        <div
          v-for="event in displayedEvents"
          v-else
          :key="event.id"
          class="event-list-item q-mt-md q-pa-md bg-primary text-white rounded-borders row items-center"
        >
          <!-- Left column: Date -->
          <div class="col-3 flex flex-center">
            <div class="column items-center">
              <div class="event-day-text event-font">
                {{ new Date(event.start).toLocaleDateString('en-US', { weekday: 'short' }) }}
              </div>
              <div class="event-day-text event-font">
                {{ new Date(event.start).getDate() }}
              </div>
            </div>

            <template v-if="new Date(event.end).toDateString() !== new Date(event.start).toDateString()">
              <span class="mx-1 date-dash">-</span>
              <div class="column items-center">
                <div class="event-day-text event-font">
                  {{ new Date(event.end).toLocaleDateString('en-US', { weekday: 'short' }) }}
                </div>
                <div class="event-day-text event-font">
                  {{ new Date(event.end).getDate() }}
                </div>
              </div>
            </template>
          </div>

          <!-- Right column: Event details -->
          <div class="col-9 column">
            <div class="event-title event-font">{{ event.title }}</div>

            <div class="event-details event-subtext event-font">
              <q-icon :name="scheduleTimeIcon" />
              {{ formatAMPM(new Date(event.start)) }} -
              {{ formatAMPM(new Date(event.end)) }}
            </div>

            <div class="event-details event-subtext event-font">
              <q-icon :name="mapPinIcon" />

              <RouterLink
                v-if="event.park !== null"
                :to="`/parks/${event.park}`"
                class="event-font park-link"
              >
                {{ parks.find(park => park.id === event.park)?.name }}
              </RouterLink>

              <span v-else>
                {{ event.location || 'Location TBD' }}
              </span>
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
.park-link {
  color: #FFF;
}
.date-dash {
  margin-left: 3px;
  margin-right: 3px;
}
/*.event-details {
  margin-left: 20px;
}*/
</style>
