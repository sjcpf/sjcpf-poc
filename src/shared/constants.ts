export const appName = 'SJCPF'

export const appDescription = `
${appName} provides information about parks, trails, and events in St. Joseph County.`

type Park = {
  id: number;
  name: string
  image: string;
  phone: string;
  location: string;
  address: string;
  city: string;
  state: string;
  details: string[];
  activities: Activity[];
  description: string;
  documents: { label: string; url: string }[];
};

export const parks: Park[] = [
  {
    id: 0,
    name: 'Bendix Woods',
    image: '/images/parks/bendix_woods.png',
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
    image: '/images/parks/crone_restore.png',
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
    image: '/images/parks/chamberlain_lake.png',
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
    image: '/images/parks/baugo_creek.png',
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
    image: '/images/parks/lasalle_trail.png',
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
    image: '/images/parks/spicer_lake.png',
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
    image: '/images/parks/st_patricks.png',
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

type Activity = {
  name: string;
  label: string;
  img: string;
}

export const activities: Activity[] = [
  { name:'biking', label: 'Bike Trails', img: '/images/bike.png' },
  { name:'canoeing', label: 'Canoe Rentals', img: '/images/canoe.png' },
  { name:'discGolf', label: 'Disc Golf', img: '/images/disc.png' },
  { name:'geoCache', label: 'Geocaching', img: '/images/geo.png' },
  { name:'hiking', label: 'Hiking Trails', img: '/images/hike.png' },
  { name:'orienteering', label: 'Orienteering', img: '/images/orient.png' },
  { name:'playGround', label: 'Playgrounds', img: '/images/play.png' },
  { name:'runing', label: 'Running Wild', img: '/images/run.png' }
]

type ActivityData = {
  title: string;
  image: string;
  phone: string;
  location: string;
  details: string[];
  description: string;
  documents: { label: string; url: string }[];
};

// Mock data loader (replace with API/store later)
export const activityData: Record<string, ActivityData> = {
  discGolf: {
    title: 'Disc Golf',
    image: '/images/disc.png',
    phone: '574-674-9765',
    location: 'Bendix Woods County Park',
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
}

export const events = [
  // July
  { id: 1, date: '2025-07-05', title: 'Summer Nature Hike', time: '9:00 AM – 11:00 AM', location: 'Pine Trail' },
  { id: 2, date: '2025-07-05', title: 'Junior Explorer Club', time: '1:00 PM – 3:00 PM', location: 'Oak Grove' },
  { id: 3, date: '2025-07-12', title: 'Birdwatching Workshop', time: '7:30 AM – 10:00 AM', location: 'Oak Grove' },
  { id: 4, date: '2025-07-12', title: 'Evening Campfire', time: '8:00 PM – 10:00 PM', location: 'Red Barn' },
  { id: 5, date: '2025-07-18', title: 'Kayaking 101', time: '1:00 PM – 4:00 PM', location: 'Lakeview Dock' },
  { id: 6, date: '2025-07-22', title: 'Stargazing Night', time: '8:00 PM – 10:30 PM', location: 'Red Barn' },
  { id: 7, date: '2025-07-29', title: 'Family Picnic Day', time: '11:00 AM – 3:00 PM', location: 'Harvest Room' },

  // August
  { id: 8, date: '2025-08-02', title: 'Yoga in the Park', time: '6:30 AM – 8:00 AM', location: 'Oak Grove' },
  { id: 9, date: '2025-08-09', title: '5K Trail Run', time: '8:30 AM – 12:00 PM', location: 'Red Barn' },
  { id: 10, date: '2025-08-09', title: 'Nature Journaling', time: '1:00 PM – 3:00 PM', location: 'Meadow Field' },
  { id: 11, date: '2025-08-16', title: '3K Fun Walk', time: '9:00 AM – 10:30 AM', location: 'Harvest Room' },
  { id: 12, date: '2025-08-16', title: 'Wildflower Photography', time: '11:00 AM – 2:00 PM', location: 'Meadow Field' },
  { id: 13, date: '2025-08-21', title: 'Evening Campfire Stories', time: '7:00 PM – 9:30 PM', location: 'Red Barn' },
  { id: 14, date: '2025-08-30', title: 'Fall Gardening Workshop', time: '10:00 AM – 1:00 PM', location: 'Oak Grove' },

  // September
  { id: 15, date: '2025-09-03', title: 'Guided Nature Walk', time: '10:00 AM – 12:00 PM', location: 'Oak Grove' },
  { id: 16, date: '2025-09-03', title: 'Junior Ranger Program', time: '1:00 PM – 3:00 PM', location: 'Harvest Room' },
  { id: 17, date: '2025-09-10', title: 'Photography Basics', time: '9:00 AM – 11:30 AM', location: 'Meadow Field' },
  { id: 18, date: '2025-09-10', title: 'Evening Hike', time: '6:00 PM – 8:00 PM', location: 'Pine Trail' },
  { id: 19, date: '2025-09-15', title: 'Fall Foliage Hike', time: '10:00 AM – 1:00 PM', location: 'Red Barn' },
  { id: 20, date: '2025-09-19', title: 'Outdoor Art Workshop', time: '2:00 PM – 5:00 PM', location: 'Oak Grove' },
  { id: 21, date: '2025-09-26', title: 'Canoe Exploration', time: '9:00 AM – 12:00 PM', location: 'Lakeview Dock' },
  { id: 22, date: '2025-09-26', title: 'Birdwatching Basics', time: '1:00 PM – 3:00 PM', location: 'Oak Grove' },
]
