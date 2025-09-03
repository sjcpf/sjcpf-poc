export const appName = 'SJCPF'

export const appDescription = `
${appName} provides information about parks, trails, and events in St. Joseph County.`

export type Park = {
  id: number;
  name: string
  image: string;
  phone: string;
  location: string;
  address: string;
  city: string;
  state: string;
  details: string[];
  activities: number[];
  description: string;
  documents: { label: string; url: string }[];
};

export const parks: Park[] = [
  {
    id: 0,
    name: 'Bendix Woods',
    image: '/images/parks/bendix_woods.webp',
    phone: '(574) 654-3155',
    location: '+41.66972-086.48833',
    address: '56960 Timothy Road New Carlisle, IN 46552-9522',
    city: 'New Carlisle',
    state: 'IN',
    details: ['195 acres with wooded trails, ponds and fields'],
    activities: [],
    description: 'A large forested park with many activities',
    documents: []
  },
  {
    id: 1,
    name: 'Beverly D. Crone Restoration Area',
    image: '/images/parks/crone_restore.webp',
    phone: '(574) 277-4828',
    location: '+41.61899-086.27755',
    address: 'Jackson Road and Linden Road South Bend, IN 46614',
    city: 'South Bend',
    state: 'IN',
    details: ['111 acres of undeveloped land'],
    activities: [],
    description: 'A medium park featuring easy trails and fields',
    documents: []
  },
  {
    id: 2,
    name: 'Chamberlain Lake',
    image: '/images/parks/chamberlain_lake.webp',
    phone: '(574) 654-3155',
    location: '+41.64723-086.36945',
    address: '58111 Crumstown Highway South Bend, IN 46619',
    city: 'South Bend',
    state: 'IN',
    details: ['82.7 acres of lake and wetlands'],
    activities: [],
    description: 'Woods, trails, wetlands, and a lake',
    documents: []
  },
  {
    id: 3,
    name: 'Ferrettie / Baugo Creek',
    image: '/images/parks/baugo_creek.webp',
    phone: '(574) 674-9765',
    location: '+41.66589-086.06142',
    address: '57057 Ash Road Osceola, IN 46561',
    city: 'Osceola',
    state: 'IN',
    details: ['214 acres with trails along Baugo Creek, open fields'],
    activities: [],
    description: 'A very large park with a small lake, creek, and trails',
    documents: []
  },
  {
    id: 4,
    name: 'LaSalle Trail',
    image: '/images/parks/lasalle_trail.webp',
    phone: '(574) 277-4828',
    location: '+41.72680-086.25288',
    address: '19701 Cleveland Rd South Bend, IN 46637',
    city: 'South Bend',
    state: 'IN',
    details: ['12.61 Acres along a paved trail from Roseland to the north state line, connecting with Niles Township trails'],
    activities: [],
    description: 'A 3.5 mile paved trail',
    documents: []
  },
  {
    id: 5,
    name: 'Spicer Lake',
    image: '/images/parks/spicer_lake.webp',
    phone: '(574) 654-3155',
    location: '+41.75326-086.52426',
    address: '50840 County Line Road New Carlisle, IN 46552-4564',
    city: 'New Carlisle',
    state: 'IN',
    details: ['320 acres with trails along wetlands, woods and old-growth fields'],
    activities: [],
    description: 'A large park with many trails woods, fields, and wetlands',
    documents: []
  },
  {
    id: 6,
    name: `St. Patrick's County Park`,
    image: '/images/parks/st_patricks.webp',
    phone: '(574) 277-4828',
    location: '+41.75547-086.26585',
    address: '50651 Laurel Road South Bend, IN 46637',
    city: 'South Bend',
    state: 'IN',
    details: ['398 acres with wooded trails, ponds and St. Joseph River frontage'],
    activities: [],
    description: 'A large park along the St. Joseph River with trails and ponds',
    documents: []
  },
];

export type ActivityType = {
  label: string;
  img: string;
}

export const activityTypes: Record<string, ActivityType> = {
  biking: { label: 'Bike Trails', img: '/images/bike.png' },
  canoeing: { label: 'Canoe Rentals', img: '/images/canoe.png' },
  discGolf: { label: 'Disc Golf', img: '/images/disc.png' },
  geocaching: { label: 'Geocaching', img: '/images/geo.png' },
  hiking: { label: 'Hiking Trails', img: '/images/hike.png' },
  orienteering: { label: 'Orienteering', img: '/images/orient.png' },
  playground: { label: 'Playgrounds', img: '/images/play.png' },
  running: { label: 'Running Wild', img: '/images/run.png' }
}

// Location or phone being set overrides the default park phone and location that would be inherited from the park instance the event is at
export type Activity = {
  id: number;
  park: number;
  activityType: string;
  phone?: string;
  location?: string;
  details: string[];
  description: string;
  documents: { label: string; url: string }[];
};

// Mock data loader (replace with API/store later)
export const activities: Activity[] = [
  {
    id: 0,
    park: 0,
    activityType: 'discGolf',
    details: [
      'Open Daily, Pro Shop Hours Vary',
      'Ferrettie / Baugo Creek Co. Park; Pro Shop Located In Gate House',
      '10 A.M. To Park Closing',
      'Daily Pass: $4 / Adult; $3 / Youth (Age 15 And Under)',
      'Annual Pass: $40 / Adult; $20 / Youth',
      'Annual Gate / Disc Golf Combo Pass: $60'
    ],
    description:
      'Bring your friends and family to this newly renovated 18-hole course. Check out the Pro Shop for all your disc golfing needs.',
    documents: [
      { label: 'Disc Golf Map', url: '#' },
      { label: 'Disc Golf Score Card', url: '#' }
    ]
  },
  {
    id: 1,
    park: 4,
    activityType: 'biking',
    details: [
      'Open Daily, Sunrise to Sunset',
      'Several trails ranging from beginner to advanced',
      'Helmets required for all riders',
      'Trail map available at park office'
    ],
    description:
      'Enjoy miles of scenic biking trails suitable for all skill levels. Trail maps and rental bikes available at the park entrance.',
    documents: [
      { label: 'Bike Trail Map', url: '#' }
    ]
  },
  {
    id: 2,
    park: 3,
    activityType: 'canoeing',
    details: [
      'Available May through September',
      'Rental Hours: 9 A.M. - 6 P.M.',
      'Life jackets provided',
      'Reservations recommended for groups'
    ],
    description:
      'Rent a canoe and enjoy a peaceful paddle along the park’s waterways. Perfect for beginners and families.',
    documents: [
      { label: 'Canoe Rental Info', url: '#' }
    ]
  },
  {
    id: 3,
    park: 1,
    activityType: 'geocaching',
    details: [
      'Self-guided activity, open year-round',
      'Bring a GPS device or smartphone with geocaching app',
      'Be respectful of wildlife and other park visitors'
    ],
    description:
      'Explore the parks while searching for hidden caches. A fun way to combine hiking and treasure hunting.',
    documents: [
      { label: 'Geocaching Tips', url: '#' }
    ]
  },
  {
    id: 4,
    park: 0,
    activityType: 'hiking',
    details: [
      'Trails open daily from sunrise to sunset',
      'Variety of trails from easy walks to challenging hikes',
      'Trail maps available at park offices'
    ],
    description:
      'Enjoy nature and stay active on the county’s extensive network of hiking trails.',
    documents: [
      { label: 'Trail Map', url: '#' }
    ]
  },
  {
    id: 5,
    park: 0,
    activityType: 'orienteering',
    details: [
      'Equipment available at park office',
      'Self-guided or group courses',
      'Open Daily, sunrise to sunset'
    ],
    description:
      'Test your navigation skills using a map and compass. Great for individuals and groups looking for a challenge.',
    documents: [
      { label: 'Orienteering Map', url: '#' }
    ]
  },
  {
    id: 6,
    park: 6,
    activityType: 'playground',
    details: [
      'Open daily, sunrise to sunset',
      'Safe for children of all ages',
      'Benches and picnic areas nearby'
    ],
    description:
      'Children can enjoy a variety of playgrounds throughout the county parks, suitable for all ages.',
    documents: []
  },
  {
    id: 7,
    park: 2,
    activityType: 'running',
    details: [
      'Open Daily, sunrise to sunset',
      'Trails vary in length and difficulty',
      'Well-marked and maintained'
    ],
    description:
      'Perfect for runners of all levels. Enjoy scenic routes and well-maintained trails for your daily run.',
    documents: [
      { label: 'Running Trail Map', url: '#' }
    ]
  }
];

type CalendarEvent = {
  id: number;
  start: string;
  end: string;
  title: string;
  park: number;
}

export const events: CalendarEvent[] = [
  // July
  { id: 1, start: '2025-07-05T09:00:00', end: '2025-07-05T12:00:00', title: 'Summer Nature Hike', park: 0 },
  { id: 2, start: '2025-07-05T13:15:00', end: '2025-07-05T15:15:00', title: 'Junior Explorer Club', park: 0 },
  { id: 3, start: '2025-07-12T08:30:00', end: '2025-07-12T11:30:00', title: 'Birdwatching Workshop', park: 5 },
  { id: 4, start: '2025-07-12T19:00:00', end: '2025-07-12T21:00:00', title: 'Evening Campfire', park: 0 },
  { id: 5, start: '2025-07-18T10:45:00', end: '2025-07-18T13:45:00', title: 'Kayaking 101', park: 3 },
  { id: 6, start: '2025-07-22T21:00:00', end: '2025-07-22T23:45:00', title: 'Stargazing Night', park: 1 },
  { id: 7, start: '2025-07-29T11:30:00', end: '2025-07-29T16:30:00', title: 'Family Picnic Day', park: 6 },

  // August
  { id: 8, start: '2025-08-02T07:15:00', end: '2025-08-02T08:30:00', title: 'Yoga in the Park', park: 6 },
  { id: 9, start: '2025-08-09T09:00:00', end: '2025-08-09T10:15:00', title: '5K Trail Run', park: 5 },
  { id: 10, start: '2025-08-09T13:30:00', end: '2025-08-09T16:00:00', title: 'Nature Journaling', park: 2 },
  { id: 11, start: '2025-08-16T08:00:00', end: '2025-08-16T09:30:00', title: '3K Fun Walk', park: 1 },
  { id: 12, start: '2025-08-16T14:15:00', end: '2025-08-16T17:15:00', title: 'Wildflower Photography', park: 2 },
  { id: 13, start: '2025-08-21T18:45:00', end: '2025-08-21T21:00:00', title: 'Evening Campfire Stories', park: 0 },
  { id: 14, start: '2025-08-30T10:00:00', end: '2025-08-30T15:00:00', title: 'Fall Gardening Workshop', park: 1 },

  // September
  { id: 15, start: '2025-09-03T09:00:00', end: '2025-09-03T12:00:00', title: 'Guided Nature Walk', park: 5 },
  { id: 16, start: '2025-09-03T13:30:00', end: '2025-09-03T15:00:00', title: 'Junior Ranger Program', park: 0 },
  { id: 17, start: '2025-09-10T10:15:00', end: '2025-09-10T13:15:00', title: 'Photography Basics', park: 6 },
  { id: 18, start: '2025-09-10T18:00:00', end: '2025-09-10T20:30:00', title: 'Evening Hike', park: 4 },
  { id: 19, start: '2025-09-15T08:45:00', end: '2025-09-15T12:00:00', title: 'Fall Foliage Hike', park: 3 },
  { id: 20, start: '2025-09-19T09:00:00', end: '2025-09-20T17:00:00', title: 'Outdoor Art Workshop', park: 6 }, // multi-day
  { id: 21, start: '2025-09-26T08:30:00', end: '2025-09-26T14:00:00', title: 'Canoe Exploration', park: 3 },
  { id: 22, start: '2025-09-26T15:45:00', end: '2025-09-26T18:15:00', title: 'Birdwatching Basics', park: 1 },
]
