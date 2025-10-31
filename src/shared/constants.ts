import type { Location } from "geolocation-utils";

export const appName = 'SJCPF'

export const appDescription = `
${appName} provides information about parks, trails, and events in St. Joseph County.`

export type Park = {
  id: number;
  name: string
  image: string;
  phone: string;
  location: Location;
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
    location: {lat: 41.66972, lon: -86.48833 },
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
    location: {lat: 41.61899, lon: -86.27755 },
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
    location: { lat: 41.64723, lon: -86.36945 },
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
    location: { lat: 41.66589, lon: -86.06142 },
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
    location: { lat: 41.72680, lon: -86.25288 },
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
    location: { lat: 41.75326, lon: -86.52426 },
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
    location: { lat: 41.75547, lon: -86.26585 },
    address: '50651 Laurel Road South Bend, IN 46637',
    city: 'South Bend',
    state: 'IN',
    details: ['398 acres with wooded trails, ponds and St. Joseph River frontage'],
    activities: [],
    description: 'A large park along the St. Joseph River with trails and ponds',
    documents: []
  },
];

// Flexible schedule type hierarchy for listing differen combinations and ranges of dates and times
type SingleDate = Date | string;
type DateRange = { start: Date | string; end: Date | string };
type DateSet = Date[];
type ActivityDate =
  | 'Daily'
  | SingleDate
  | DateRange
  | DateSet;
type SingleTime = string;
type TimeRange = { start: string; end: string};
type DayTimes =
  | SingleTime
  | TimeRange;
type Weekday =
  | "Daily"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";
type SingleDayTime = { day: Weekday; times: DayTimes };
type ManyDayTime = { days: Weekday[]; times: DayTimes };
type RangeDayTime = { days: [Weekday, Weekday]; times: DayTimes };
type DayTimeBlock =
  | SingleDayTime
  | ManyDayTime
  | RangeDayTime;
type ActivityTime =
  | DayTimeBlock
  | DayTimeBlock[];

export type ActivityType = {
  label: string;
  img: string;
}

export const activityTypes: Record<string, ActivityType> = {
  biking: { label: 'Bike Trails', img: '/images/bike.png' },
  canoeing: { label: 'Canoeing', img: '/images/canoe.png' },
  kayaking: { label: 'Kayaking', img: ''},
  paddleBoard: { label: 'Stand-up Paddleboarding', img: ''},
  discGolf: { label: 'Disc Golf', img: '/images/disc.png' },
  geocaching: { label: 'Geocaching', img: '/images/geo.png' },
  hiking: { label: 'Hiking Trails', img: '/images/hike.png' },
  orienteering: { label: 'Orienteering', img: '/images/orient.png' },
  running: { label: 'Running Wild', img: '/images/run.png' },
  ski: { label: 'Skiing', img: ''},
  snowShoe: { label: 'Snowshoe Rental', img: '' },
  tubing: { label: 'Tubing', img: '' },
  hayride: { label: 'Hayrides', img: ''},
  playground: { label: 'Playground', img: '/images/play.png' }
}

// Location or phone being set overrides the default park phone and location that would be inherited from the park instance the event is at
export type Activity = {
  id: number;
  park: number;
  activityType: string;
  details: string[];
  description: string;
  dates?: ActivityDate[];
  times?: ActivityTime;
  img?: string;
  phone?: string;
  documents?: { label: string; url: string }[];
};

// Mock data loader (replace with API/store later)
export const activities: Activity[] = [
  // 0: Cross Country Skiing - St. Patrick's County Park
  {
    id: 0,
    park: 6,
    activityType: 'ski',
    dates: [{ start: 'December 26', end: 'March 9' }],
    times: [{ days: ['Wednesday', 'Sunday'], times: { start: '10:00', end: '16:00' } }],
    details: [
      'Cross-country ski rental opens, and grooming begins, when there is at least 4-6 inches of dense snow and a consistent freezing temperature.',
      '$5 adult trail fee; $4 youth trail fee, ages 15 and under',
      '$20 adult annual trail pass; $15 youth, ages 15 and under',
      'Gate fee in effect during winter programs and special events.',
      '$10 ski rental available, includes skis, boots, and poles. Boots sizes range from 11 youth to 15 men. Parental signature is required for renters aged 16 and under.'
    ],
    description: 'St. Patrick’s County Park takes on a special beauty during winter. Enjoy the winter scenery while skiing over 6 miles of trails.',
    documents: [
      { label: 'Winter Trail Map', url: 'https://www.sjcparks.org/DocumentCenter/View/3465/St-Patricks-Park---Winter-Map-PDF' },
      { label: 'Winter Sports', url: 'https://www.sjcparks.org/DocumentCenter/View/3464/Winter-Leisure-Activities-Brochure-PDF' }
    ]
  },

  // 1: Snowshoe Rental - St. Patrick's County Park
  {
    id: 1,
    park: 6,
    activityType: 'snowShoe',
    dates: [{ start: 'December 26', end: 'March 9' }],
    times: [{ days: ['Wednesday', 'Sunday'], times: { start: '10:00', end: '16:00' } }],
    details: [
      'Snowshoe rental available when there is at least 4-6 inches of dense snow.',
      '$10 rental includes snowshoes and poles.',
      'Gate fee in effect during winter programs and special events.'
    ],
    description: 'Explore St. Patrick’s County Park in the quiet beauty of freshly fallen snow.',
    documents: [
      { label: 'Winter Trail Map', url: 'https://www.sjcparks.org/DocumentCenter/View/3465/St-Patricks-Park---Winter-Map-PDF' },
      { label: 'Winter Sports', url: 'https://www.sjcparks.org/DocumentCenter/View/3464/Winter-Leisure-Activities-Brochure-PDF' }
    ]
  },

  // 2–3: Tubing - St. Patrick's County Park & Ferrettie-Baugo Creek County Park
  {
    id: 2,
    park: 6,
    activityType: 'tubing',
    dates: [{ start: 'December 26', end: 'March 9' }],
    times: [{ day: 'Saturday', times: { start: '12:00', end: '16:00' } }, { day: 'Sunday', times: { start: '12:00', end: '16:00' } }],
    details: [
      '$15 per hour per tube',
      'Helmet required for ages under 12',
      'Open when snow cover is sufficient for tubing'
    ],
    description: 'Tubing hills with groomed snow cover and lift service at St. Patrick’s County Park.',
    documents: [
      { label: 'Tubing Rules', url: 'https://www.sjcparks.org/DocumentCenter/View/3462/Innertubing-Hill-Rules-PDF'},
      { label: 'Winter Sports', url: 'https://www.sjcparks.org/DocumentCenter/View/3464/Winter-Leisure-Activities-Brochure-PDF' }
    ]
  },
  {
    id: 3,
    park: 3,
    activityType: 'tubing',
    dates: [{ start: 'December 26', end: 'March 9' }],
    times: [{ day: 'Saturday', times: { start: '12:00', end: '16:00' } }, { day: 'Sunday', times: { start: '12:00', end: '16:00' } }],
    details: [
      '$15 per hour per tube',
      'Helmet required for ages under 12',
      'Open when snow cover is sufficient for tubing'
    ],
    description: 'Tubing hills with groomed snow cover and lift service at Ferrettie-Baugo Creek County Park.',
    documents: [
      { label: 'Tubing Rules', url: 'https://www.sjcparks.org/DocumentCenter/View/3462/Innertubing-Hill-Rules-PDF'},
      { label: 'Winter Sports', url: 'https://www.sjcparks.org/DocumentCenter/View/3464/Winter-Leisure-Activities-Brochure-PDF' }
    ]
  },

  // 4–5: Private Tubing Parties - St. Patrick's & Ferrettie-Baugo
  {
    id: 4,
    park: 6,
    activityType: 'tubing',
    dates: [{ start: 'December 26', end: 'March 9' }],
    times: [{ day: 'Friday', times: { start: '17:00', end: '20:00' } }],
    details: [
      'Private party for groups up to 20',
      '$200 per hour, reservation required',
      'Includes tubes and basic supervision'
    ],
    description: 'Reserve a private tubing party for your family or friends at St. Patrick’s County Park.',
    documents: [
      { label: 'Tubing Reservation packet', url: 'https://www.sjcparks.org/DocumentCenter/View/3463/Innertubing-Reservation-Packet-PDF'},
      { label: 'Tubing Rules', url: 'https://www.sjcparks.org/DocumentCenter/View/3462/Innertubing-Hill-Rules-PDF'},
      { label: 'Winter Sports', url: 'https://www.sjcparks.org/DocumentCenter/View/3464/Winter-Leisure-Activities-Brochure-PDF' }
    ]
  },
  {
    id: 5,
    park: 3,
    activityType: 'tubing',
    dates: [{ start: 'December 26', end: 'March 9' }],
    times: [{ day: 'Friday', times: { start: '17:00', end: '20:00' } }],
    details: [
      'Private party for groups up to 20',
      '$200 per hour, reservation required',
      'Includes tubes and basic supervision'
    ],
    description: 'Reserve a private tubing party for your family or friends at Ferrettie-Baugo Creek County Park.',
    documents: [
      { label: 'Tubing Reservation packet', url: 'https://www.sjcparks.org/DocumentCenter/View/3463/Innertubing-Reservation-Packet-PDF'},
      { label: 'Tubing Rules', url: 'https://www.sjcparks.org/DocumentCenter/View/3462/Innertubing-Hill-Rules-PDF'},
      { label: 'Winter Sports', url: 'https://www.sjcparks.org/DocumentCenter/View/3464/Winter-Leisure-Activities-Brochure-PDF' }
    ]
  },

  // 6: Night Skiing
  {
    id: 6,
    park: 6,
    activityType: 'ski',
    dates: [{ start: 'December 26', end: 'March 9' }],
    times: [{ days: ['Friday', 'Saturday'], times: { start: '17:00', end: '20:00' } }],
    details: [
      'Night skiing available when snow conditions allow',
      'Trail fees apply same as daytime',
      'Lighting covers main trails only'
    ],
    description: 'Enjoy skiing under the lights at St. Patrick’s County Park.',
    documents: [{ label: 'Winter Sports', url: 'https://www.sjcparks.org/DocumentCenter/View/3464/Winter-Leisure-Activities-Brochure-PDF' }]
  },

  // 7–8: Canoe/Kayak/Evening Paddleboard - St. Patrick's & Ferrettie-Baugo
  {
    id: 7,
    park: 6,
    activityType: 'canoeing',
    dates: [{ start: 'May 1', end: 'October 31' }],
    times: [{ days: ['Friday', 'Sunday'], times: { start: '16:00', end: '20:00' } }],
    details: [
      '$10 per hour rental',
      'Life jackets provided',
      'Reservations recommended for evening programs'
    ],
    description: 'Enjoy paddling activities on the park lakes during evening hours.',
    documents: [
      { label: 'Canoe and Kayak Brochure', url: 'https://www.sjcparks.org/DocumentCenter/View/62581/2025-Canoe-Kayak-Brochure'},
      { label: 'Canoe/Kayak Trip Map', url: 'https://www.sjcparks.org/DocumentCenter/View/62579/STP-Canoe-Trip-Map'},
      { label: 'Canoe and Kayak Group Reservation Packet', url: 'https://www.sjcparks.org/DocumentCenter/View/3458/Canoe-Group-Reservation-Packet-PDF'}
    ]
  },
  {
    id: 8,
    park: 3,
    activityType: 'canoeing',
    dates: [{ start: 'May 1', end: 'October 31' }],
    times: [{ days: ['Friday', 'Sunday'], times: { start: '16:00', end: '20:00' } }],
    details: [
      '$10 per hour rental',
      'Life jackets provided',
      'Reservations recommended for evening programs'
    ],
    description: 'Enjoy paddling activities on the park lakes during evening hours.',
    documents: [
      { label: 'Canoe and Kayak Brochure', url: 'https://www.sjcparks.org/DocumentCenter/View/62581/2025-Canoe-Kayak-Brochure'},
      { label: 'Canoe/Kayak Trip Map', url: 'https://www.sjcparks.org/DocumentCenter/View/62579/STP-Canoe-Trip-Map'},
      { label: 'Canoe and Kayak Group Reservation Packet', url: 'https://www.sjcparks.org/DocumentCenter/View/3458/Canoe-Group-Reservation-Packet-PDF'}
    ]
  },

  // 9–10: Disc Golf - Ferrettie-Baugo
  {
    id: 9,
    park: 3,
    activityType: 'discGolf',
    dates: ['Daily'],
    times: [{ day: 'Daily', times: { start: 'Sunrise', end: 'Sunset' } }],
    details: [
      '18-hole disc golf course',
      'Bring your own discs or rent from the park office',
      'Gate fee applies on weekends'
    ],
    description: 'Challenging 18-hole disc golf course for all skill levels.',
    documents: [
      { label: 'Disc Golf Map', url: 'https://www.sjcparks.org/DocumentCenter/View/52912/Disc-Golf-Map'},
      { label: 'Disc Golf Scorecard', url: 'https://www.sjcparks.org/DocumentCenter/View/52919/Disc-Golf-Score-Card'}
    ]
  },

  // 11–14: Geocaching
  {
    id: 11,
    park: 0,
    activityType: 'geocaching',
    dates: ['Daily'],
    times: [{ day: 'Daily', times: { start: 'Sunrise', end: 'Sunset' } }],
    details: [
      'GPS or smartphone required',
      'Follow standard geocaching guidelines',
      'Pick up instructions at park office'
    ],
    description: 'Enjoy a treasure-hunting adventure throughout the park trails.',
    documents: []
  },
  {
    id: 12,
    park: 3,
    activityType: 'geocaching',
    dates: ['Daily'],
    times: [{ day: 'Daily', times: { start: 'Sunrise', end: 'Sunset' } }],
    details: [
      'GPS or smartphone required',
      'Follow standard geocaching guidelines',
      'Pick up instructions at park office'
    ],
    description: 'Enjoy a treasure-hunting adventure throughout the park trails.',
    documents: []
  },
  {
    id: 13,
    park: 5,
    activityType: 'geocaching',
    dates: ['Daily'],
    times: [{ day: 'Daily', times: { start: 'Sunrise', end: 'Sunset' } }],
    details: [
      'GPS or smartphone required',
      'Follow standard geocaching guidelines',
      'Pick up instructions at park office'
    ],
    description: 'Additional geocaching trails provide more challenging routes for experienced geocachers.',
    documents: []
  },
  {
    id: 14,
    park: 6,
    activityType: 'geocaching',
    dates: ['Daily'],
    times: [{ day: 'Daily', times: { start: 'Sunrise', end: 'Sunset' } }],
    details: [
      'GPS or smartphone required',
      'Follow standard geocaching guidelines',
      'Pick up instructions at park office'
    ],
    description: 'Additional geocaching trails provide more challenging routes for experienced geocachers.',
    documents: []
  },

  // 15–16: Hayrides - Bendix Woods
  {
    id: 15,
    park: 0,
    activityType: 'hayride',
    dates: [{ start: 'October 1', end: 'November 30' }],
    times: [{ days: ['Friday', 'Sunday'], times: { start: '18:00', end: '21:00' } }],
    details: [
      'PRIVATE',
      '$8 per person',
      'Children under 3 ride free',
      'Reservations recommended for groups of 10+'
    ],
    description: 'Evening hayrides through the scenic fall trails of St. Patrick’s County Park.',
    documents: [
      { label: 'Hayride Reservation Packet', url: 'https://www.sjcparks.org/DocumentCenter/View/3461/2024-Hayride-Reservation-Packet-PDF'}
    ]
  },
  {
    id: 16,
    park: 0,
    activityType: 'hayride',
    dates: [{ start: 'October 1', end: 'November 30' }],
    times: [{ days: ['Friday', 'Sunday'], times: { start: '18:00', end: '21:00' } }],
    details: [
      'PUBLIC',
      '$8 per person',
      'Children under 3 ride free',
      'Reservations recommended for groups of 10+'
    ],
    description: 'Evening hayrides through the scenic fall trails of Ferrettie-Baugo Creek County Park.',
    documents: []
  },

  // 17–18: Mountain Biking - St. Patrick's & Ferrettie-Baugo
  {
    id: 17,
    park: 0,
    activityType: 'biking',
    dates: ['Daily'],
    times: [{ day: 'Daily', times: { start: 'Sunrise', end: 'Sunset' } }],
    details: [
      'Trails rated from beginner to advanced',
      'Helmets required',
      'Trail maps available at park office'
    ],
    description: 'Explore challenging terrain with over 10 miles of mountain biking trails at St. Patrick\'s County Park.',
    documents: [
      { label: 'Bike Trail Map', url: 'https://www.sjcparks.org/DocumentCenter/View/3629/Bendix-Woods-Mountain-Bike-Trail-PDF'}
    ]
  },

  // 19–20: Orienteering - St. Patrick's & Ferrettie-Baugo
  {
    id: 19,
    park: 6,
    activityType: 'orienteering',
    dates: ['Daily'],
    times: [{ day: 'Daily', times: { start: 'Sunrise', end: 'Sunset' } }],
    details: [
      'Maps provided at park office',
      'Bring a compass or use smartphone app',
      'Suitable for all ages'
    ],
    description: 'Test your navigation skills along marked courses throughout St. Patrick’s County Park.',
    documents: []
  },
  {
    id: 20,
    park: 3,
    activityType: 'orienteering',
    dates: ['Daily'],
    times: [{ day: 'Daily', times: { start: 'Sunrise', end: 'Sunset' } }],
    details: [
      'Maps provided at park office',
      'Bring a compass or use smartphone app',
      'Suitable for all ages'
    ],
    description: 'Test your navigation skills along marked courses throughout Ferrettie-Baugo Creek County Park.',
    documents: []
  },

  // 21: Running Wild (programs) - St. Patrick's
  {
    id: 21,
    park: 6,
    activityType: 'running',
    dates: [{ start: 'April 1', end: 'September 30' }],
    times: [{ day: 'Saturday', times: { start: '09:00', end: '11:00' } }],
    details: [
      'Outdoor activity program for children ages 6-12',
      'Registration required',
      'Parental consent forms required'
    ],
    description: 'Kids explore nature and learn outdoor skills in a fun, structured program at St. Patrick’s County Park.',
    documents: [
      { label: 'Course Map', url: 'https://www.sjcparks.org/DocumentCenter/View/9151/Course-Map-PDF'}
    ]
  },

  // 22: Hayrides Public
  {
    id: 22,
    park: 0,
    activityType: 'hayride',
    details: [
      ''
    ],
    description: 'Public hayrides scheduled throughout Fall. Check calendar of events for dates and times.'
  },

  // 22–24: Playgrounds
  {
    id: 23,
    park: 0,
    activityType: 'playground',
    dates: ['Daily'],
    times: [{ day: 'Daily', times: { start: 'Sunrise', end: 'Sunset' } }],
    details: [
      'Open play for all ages',
      'Supervision recommended for young children',
      'Equipment inspected regularly'
    ],
    description: 'Modern playground equipment with safety surfacing at St. Patrick’s County Park.',
    documents: []
  },
  {
    id: 23,
    park: 3,
    activityType: 'playground',
    dates: ['Daily'],
    times: [{ day: 'Daily', times: { start: 'Sunrise', end: 'Sunset' } }],
    details: [
      'Open play for all ages',
      'Supervision recommended for young children',
      'Equipment inspected regularly'
    ],
    description: 'Modern playground equipment with safety surfacing at St. Patrick’s County Park.',
    documents: []
  },
  {
    id: 24,
    park: 6,
    activityType: 'playground',
    dates: ['Daily'],
    times: [{ day: 'Daily', times: { start: 'Sunrise', end: 'Sunset' } }],
    details: [
      'Open play for all ages',
      'Supervision recommended for young children',
      'Equipment inspected regularly'
    ],
    description: 'Modern playground equipment with safety surfacing at Ferrettie-Baugo Creek County Park.',
    documents: []
  }
];


export type ParkTrail = {
  id: number;
  park: number;
  activityType: string;
  name: string;
  length: number;
  description: string;
  mapUrl: string;
  difficulty: "Easy" | "Moderate" | "Hard";
  surface?: "Natural" | "Boardwalk" | "Gravel" | "Paved";
  accessibility: "Hiking Only" | "Accessible Boardwalk" | "Fully Accessible";
  notes: string;
  amentinies: string;
}

export const trails: ParkTrail[] = [
  // Bendix Woods (park: 0)
  { id: 0,  park: 0, activityType: 'hiking', name: "Big Tree Trail",                                         length: 0.5,  description: "A highlight of the park, featuring towering trees and interpretive signs on forest ecology.", mapUrl: "https://www.sjcparks.org/572/Bendix-Woods", difficulty: "Easy",    surface: "Natural", accessibility: "Hiking Only",         notes: "Short interpretive forest trail.",                           amentinies: "Parking, Restrooms, Picnic Shelter, Playground" },
  { id: 1,  park: 0, activityType: 'hiking', name: "Lower Big Tree Trail + Big Tree Trail combined",         length: 0.85, description: "Add another .35 miles to your 'show' by hiking the Lower Big Tree Trail, crossing a seasonal stream.", mapUrl: "https://www.sjcparks.org/572/Bendix-Woods", difficulty: "Easy",    surface: "Natural", accessibility: "Hiking Only",         notes: "Connects to Lower Big Tree Trail for extended route.",      amentinies: "" },
  { id: 2,  park: 0, activityType: 'hiking', name: "Lookout Trail",                                          length: 0.2,  description: "A short path leading to one of the park’s scenic overlooks — perfect for a quick nature walk.", mapUrl: "https://www.sjcparks.org/572/Bendix-Woods", difficulty: "Easy",    surface: "Natural", accessibility: "Hiking Only",         notes: "",                                                        amentinies: "" },
  { id: 3,  park: 0, activityType: 'hiking', name: "Wildlife Loop",                                          length: 0.5,  description: "Circles through wooded areas rich in birds and small mammals; great for casual hikers.", mapUrl: "https://www.sjcparks.org/572/Bendix-Woods", difficulty: "Easy",    surface: "Natural", accessibility: "Hiking Only",         notes: "",                                                        amentinies: "" },
  { id: 4,  park: 0, activityType: 'hiking', name: "Raccoon Run",                                            length: 0.6,  description: "Gently rolling terrain with woodland and wetland views — a peaceful mid-length hike.", mapUrl: "https://www.sjcparks.org/572/Bendix-Woods", difficulty: "Easy",    surface: "Natural", accessibility: "Hiking Only",         notes: "",                                                        amentinies: "" },
  { id: 5,  park: 0, activityType: 'hiking', name: "Black Forest Trail",                                     length: 0.1,  description: "A shaded connector trail through dense woods.", mapUrl: "https://www.sjcparks.org/572/Bendix-Woods", difficulty: "Easy",    surface: "Natural", accessibility: "Hiking Only",         notes: "",                                                        amentinies: "" },
  { id: 6,  park: 0, activityType: 'hiking', name: "Lower Big Tree Trail",                                   length: 0.35, description: "Parallels the Big Tree Trail at lower elevation — ideal for combining into a loop.", mapUrl: "https://www.sjcparks.org/572/Bendix-Woods", difficulty: "Easy",    surface: "Natural", accessibility: "Hiking Only",         notes: "",                                                        amentinies: "" },
  { id: 7,  park: 0, activityType: 'hiking', name: "Hardwoods Loop",                                         length: 0.3,  description: "Stroll among mature hardwoods with seasonal wildflowers carpeting the forest floor.", mapUrl: "https://www.sjcparks.org/572/Bendix-Woods", difficulty: "Easy",    surface: "Natural", accessibility: "Hiking Only",         notes: "",                                                        amentinies: "" },
  { id: 8,  park: 0, activityType: 'hiking', name: "Whispering Woods Loop",                                  length: 0.2,  description: "A short loop ideal for families and beginner hikers.", mapUrl: "https://www.sjcparks.org/572/Bendix-Woods", difficulty: "Easy",    surface: "Natural", accessibility: "Hiking Only",         notes: "",                                                        amentinies: "" },
  { id: 9,  park: 0, activityType: 'hiking', name: "Central Trail",                                          length: 0.53, description: "Connects the core picnic and shelter areas, making it an easy option for visitors exploring the park’s center.", mapUrl: "https://www.sjcparks.org/572/Bendix-Woods", difficulty: "Easy",    surface: "Natural", accessibility: "Hiking Only",         notes: "",                                                        amentinies: "" },

  // Ferrettie / Baugo Creek (park: 3)
  { id: 10, park: 3, activityType: 'hiking', name: "Portage Trail",                                          length: 1.1,  description: "Along the edge of Baugo Creek. May see Pileated Woodpecker, beaver activity, and spring yellow Trout Lily. The park’s longest trail, tracing the historic footpath once used by fur traders to connect waterways. Great for birdwatching.", mapUrl: "https://www.sjcparks.org/575/Ferrettie-Baugo-Creek", difficulty: "Moderate", surface: "Natural", accessibility: "Hiking Only", notes: "Trail follows creek with scenic footbridge crossings.", amentinies: "Parking, Restrooms, Picnic Shelter, Playground" },
  { id: 11, park: 3, activityType: 'hiking', name: "Portage Loop",                                           length: 0.1,  description: "A short connector loop branching from the main Portage Trail — perfect for a brief stroll or to extend your route.", mapUrl: "https://www.sjcparks.org/575/Ferrettie-Baugo-Creek", difficulty: "Moderate", surface: "Natural", accessibility: "Hiking Only", notes: "", amentinies: "" },
  { id: 12, park: 3, activityType: 'hiking', name: "Palisades Trail",                                        length: 0.8,  description: "A scenic loop that winds along the bluffs overlooking Baugo Creek. Offers beautiful creek views and varied terrain.", mapUrl: "https://www.sjcparks.org/575/Ferrettie-Baugo-Creek", difficulty: "Moderate", surface: "Natural", accessibility: "Hiking Only", notes: "", amentinies: "" },

  // Spicer Lake (park: 5)
  { id: 13, park: 5, activityType: 'hiking', name: "Boardwalk Trail",                                        length: 0.25, description: "Walk back in time through the swamp. Look for Red-Shouldered Hawks, Pileated Woodpeckers & warblers.", mapUrl: "https://www.sjcparks.org/1142/Featured-Trails", difficulty: "Easy", surface: "Boardwalk", accessibility: "Accessible Boardwalk", notes: "Takes visitors through a portion of the wetland.", amentinies: "Parking, Restrooms, Nature Center, Observation Platform, Picnic Shelter" },
  { id: 14, park: 5, activityType: 'hiking', name: "Glacier Flats Trail",                                    length: 1.5,  description: "", mapUrl: "https://www.sjcparks.org/591/Spicer-Lake-Nature-Preserve", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amentinies: "" },
  { id: 15, park: 5, activityType: 'hiking', name: "Hawthorn Trail",                                         length: 0.3,  description: "", mapUrl: "https://www.sjcparks.org/591/Spicer-Lake-Nature-Preserve", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amentinies: "" },
  { id: 16, park: 5, activityType: 'hiking', name: "Maple Woods Trail",                                      length: 0.2,  description: "", mapUrl: "https://www.sjcparks.org/591/Spicer-Lake-Nature-Preserve", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amentinies: "" },
  { id: 17, park: 5, activityType: 'hiking', name: "Old Field Trail",                                        length: 0.3,  description: "", mapUrl: "https://www.sjcparks.org/591/Spicer-Lake-Nature-Preserve", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amentinies: "" },
  { id: 18, park: 5, activityType: 'hiking', name: "Sassafras Ridge Trail",                                  length: 0.2,  description: "", mapUrl: "https://www.sjcparks.org/591/Spicer-Lake-Nature-Preserve", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amentinies: "" },
  { id: 19, park: 5, activityType: 'hiking', name: "Wetland-Woodland-Lancaster Trail Loop",                  length: 1.6,  description: "Longer hike featuring Mayapples, Large-Flowered Trillium, Jack-in-the-Pulpit & Spring Beauty.", mapUrl: "https://www.sjcparks.org/1142/Featured-Trails", difficulty: "Moderate", surface: "Natural", accessibility: "Hiking Only", notes: "", amentinies: "" },

  // St. Patrick's County Park (park: 6)
  { id: 20, park: 6, activityType: 'hiking', name: "River Ridge Trail + Manion Cabin Loop",                  length: 1.5,  description: "Tranquil walk along the St. Joseph River. Extend to Manion Cabin Loop to see Eastern Bluebirds & Osprey.", mapUrl: "https://www.sjcparks.org/1142/Featured-Trails", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "Riverside views; connects to other park trails.", amentinies: "Parking, Restrooms, Picnic Shelter, Canoe Launch, Playground" },
  { id: 21, park: 6, activityType: 'hiking', name: "River Ridge Trail",                                      length: 0,    description: "", mapUrl: "https://www.sjcparks.org/592/St-Patricks-County-Park", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amentinies: "" },
  { id: 22, park: 6, activityType: 'hiking', name: "Horsetail Trace",                                        length: 0,    description: "", mapUrl: "https://www.sjcparks.org/592/St-Patricks-County-Park", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amentinies: "" },
  { id: 23, park: 6, activityType: 'hiking', name: "Manion Canyon Loop",                                     length: 0.4,  description: "", mapUrl: "https://www.sjcparks.org/592/St-Patricks-County-Park", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amentinies: "" },
  { id: 24, park: 6, activityType: 'hiking', name: "Pasture Loop",                                           length: 0.45, description: "", mapUrl: "https://www.sjcparks.org/592/St-Patricks-County-Park", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amentinies: "" },
  { id: 25, park: 6, activityType: 'hiking', name: "Milkweed Loop",                                          length: 0.47, description: "", mapUrl: "https://www.sjcparks.org/592/St-Patricks-County-Park", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amentinies: "" },
  { id: 26, park: 6, activityType: 'hiking', name: "Oak Tree Trail",                                         length: 0.56, description: "", mapUrl: "https://www.sjcparks.org/592/St-Patricks-County-Park", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amentinies: "" },
  { id: 27, park: 6, activityType: 'hiking', name: "Cabin Walk",                                             length: 0,    description: "", mapUrl: "https://www.sjcparks.org/592/St-Patricks-County-Park", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amentinies: "" },
  { id: 28, park: 6, activityType: 'hiking', name: "White Pine Letters Trail",                               length: 0,    description: "", mapUrl: "https://www.sjcparks.org/592/St-Patricks-County-Park", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amentinies: "" },
  { id: 29, park: 6, activityType: 'hiking', name: "White Pine Extension",                                   length: 0,    description: "", mapUrl: "https://www.sjcparks.org/592/St-Patricks-County-Park", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amentinies: "" },
  { id: 30, park: 6, activityType: 'hiking', name: "Woodlot Loop",                                           length: 0.39, description: "", mapUrl: "https://www.sjcparks.org/592/St-Patricks-County-Park", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amentinies: "" },
  { id: 31, park: 6, activityType: 'hiking', name: "Box Turtle Loop",                                        length: 0.37, description: "", mapUrl: "https://www.sjcparks.org/592/St-Patricks-County-Park", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amentinies: "" },
  { id: 32, park: 6, activityType: 'hiking', name: "Sycamore Loop",                                          length: 0.32, description: "", mapUrl: "https://www.sjcparks.org/592/St-Patricks-County-Park", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amentinies: "" },
  { id: 33, park: 6, activityType: 'hiking', name: "Deer Run Loop",                                          length: 0.67, description: "", mapUrl: "https://www.sjcparks.org/592/St-Patricks-County-Park", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amentinies: "" },
  { id: 34, park: 6, activityType: 'hiking', name: "Aspen Loop",                                             length: 0.67, description: "", mapUrl: "https://www.sjcparks.org/592/St-Patricks-County-Park", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amentinies: "" },
  { id: 35, park: 6, activityType: 'hiking', name: "Auten Trail (Indiana–Michigan River Valley Trail)",      length: 0,    description: "", mapUrl: "https://www.sjcparks.org/592/St-Patricks-County-Park", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amentinies: "" },

  // LaSalle Trail (park: 4)
  { id: 36, park: 4, activityType: 'hiking', name: "LaSalle Trail (segment of Indiana–Michigan River Valley Trail)", length: 3.5, description: "Starts in Roseland near Town Park, runs to Indiana/Michigan state line; former interurban corridor from 1903.", mapUrl: "https://www.sjcparks.org/581/LaSalle-Trail", difficulty: "Easy", surface: "Paved", accessibility: "Fully Accessible", notes: "Part of regional multi-use trail network. Access to 30 miles of bike-pedestrian trails.", amentinies: "Parking, Restrooms, Bike Repair Station" }
];

export type CalendarEvent = {
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
