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
  amenities: string;
  geoJSON?: number;
}

export const trails: ParkTrail[] = [
  // Bendix Woods (park: 0)
  { id: 0,  park: 0, geoJSON: 6, activityType: 'hiking', name: "Big Tree Trail",                                         length: 0.5,  description: "A highlight of the park, featuring towering trees and interpretive signs on forest ecology.", mapUrl: "https://www.sjcparks.org/572/Bendix-Woods", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "Short interpretive forest trail.", amenities: "Parking, Restrooms, Picnic Shelter, Playground" },
  { id: 1,  park: 0, activityType: 'hiking', name: "Lower Big Tree Trail + Big Tree Trail combined",         length: 0.85, description: "Add another .35 miles to your 'show' by hiking the Lower Big Tree Trail, crossing a seasonal stream.", mapUrl: "https://www.sjcparks.org/572/Bendix-Woods", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "Connects to Lower Big Tree Trail for extended route.", amenities: "" },
  { id: 2,  park: 0, geoJSON: 1, activityType: 'hiking', name: "Lookout Trail",                                          length: 0.2,  description: "A short path leading to one of the park’s scenic overlooks — perfect for a quick nature walk.", mapUrl: "https://www.sjcparks.org/572/Bendix-Woods", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: "" },
  { id: 3,  park: 0, activityType: 'hiking', name: "Wildlife Loop",                                          length: 0.5,  description: "Circles through wooded areas rich in birds and small mammals; great for casual hikers.", mapUrl: "https://www.sjcparks.org/572/Bendix-Woods", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: "" },
  { id: 4,  park: 0, geoJSON: 0, activityType: 'hiking', name: "Raccoon Run",                                            length: 0.6,  description: "Gently rolling terrain with woodland and wetland views — a peaceful mid-length hike.", mapUrl: "https://www.sjcparks.org/572/Bendix-Woods", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: "" },
  { id: 5,  park: 0, activityType: 'hiking', name: "Black Forest Trail",                                     length: 0.1,  description: "A shaded connector trail through dense woods.", mapUrl: "https://www.sjcparks.org/572/Bendix-Woods", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: "" },
  { id: 6,  park: 0, geoJSON: 5, activityType: 'hiking', name: "Lower Big Tree Trail",                                   length: 0.35, description: "Parallels the Big Tree Trail at lower elevation — ideal for combining into a loop.", mapUrl: "https://www.sjcparks.org/572/Bendix-Woods", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: "" },
  { id: 7,  park: 0, geoJSON: 4, activityType: 'hiking', name: "Hardwoods Loop",                                         length: 0.3,  description: "Stroll among mature hardwoods with seasonal wildflowers carpeting the forest floor.", mapUrl: "https://www.sjcparks.org/572/Bendix-Woods", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: "" },
  { id: 8,  park: 0, geoJSON: 7, activityType: 'hiking', name: "Whispering Woods Loop",                                  length: 0.2,  description: "A short loop ideal for families and beginner hikers.", mapUrl: "https://www.sjcparks.org/572/Bendix-Woods", difficulty: "Easy",    surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: "" },
  { id: 9,  park: 0, geoJSON: 3, activityType: 'hiking', name: "Central Trail",                                          length: 0.53, description: "Connects the core picnic and shelter areas, making it an easy option for visitors exploring the park’s center.", mapUrl: "https://www.sjcparks.org/572/Bendix-Woods", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: "" },

  // Ferrettie / Baugo Creek (park: 3)
  { id: 10, park: 3, activityType: 'hiking', name: "Portage Trail",                                          length: 1.1,  description: "Along the edge of Baugo Creek. May see Pileated Woodpecker, beaver activity, and spring yellow Trout Lily. The park’s longest trail, tracing the historic footpath once used by fur traders to connect waterways. Great for birdwatching.", mapUrl: "https://www.sjcparks.org/575/Ferrettie-Baugo-Creek", difficulty: "Moderate", surface: "Natural", accessibility: "Hiking Only", notes: "Trail follows creek with scenic footbridge crossings.", amenities: "Parking, Restrooms, Picnic Shelter, Playground" },
  { id: 11, park: 3, activityType: 'hiking', name: "Portage Loop",                                           length: 0.1,  description: "A short connector loop branching from the main Portage Trail — perfect for a brief stroll or to extend your route.", mapUrl: "https://www.sjcparks.org/575/Ferrettie-Baugo-Creek", difficulty: "Moderate", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: "" },
  { id: 12, park: 3, activityType: 'hiking', name: "Palisades Trail",                                        length: 0.8,  description: "A scenic loop that winds along the bluffs overlooking Baugo Creek. Offers beautiful creek views and varied terrain.", mapUrl: "https://www.sjcparks.org/575/Ferrettie-Baugo-Creek", difficulty: "Moderate", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: "" },

  // Spicer Lake (park: 5)
  { id: 13, park: 5, geoJSON: 8, activityType: 'hiking', name: "Boardwalk Trail",                                        length: 0.25, description: "Walk back in time through the swamp. Look for Red-Shouldered Hawks, Pileated Woodpeckers & warblers.", mapUrl: "https://www.sjcparks.org/1142/Featured-Trails", difficulty: "Easy", surface: "Boardwalk", accessibility: "Accessible Boardwalk", notes: "Takes visitors through a portion of the wetland.", amenities: "Parking, Restrooms, Nature Center, Observation Platform, Picnic Shelter" },
  { id: 14, park: 5, geoJSON: 23, activityType: 'hiking', name: "Glacier Flats Trail",                                    length: 1.5,  description: "", mapUrl: "https://www.sjcparks.org/591/Spicer-Lake-Nature-Preserve", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: "" },
  { id: 15, park: 5, geoJSON: 11, activityType: 'hiking', name: "Hawthorn Trail",                                         length: 0.3,  description: "", mapUrl: "https://www.sjcparks.org/591/Spicer-Lake-Nature-Preserve", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: "" },
  { id: 16, park: 5, geoJSON: 19, activityType: 'hiking', name: "Maple Woods Trail",                                      length: 0.2,  description: "", mapUrl: "https://www.sjcparks.org/591/Spicer-Lake-Nature-Preserve", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: "" },
  { id: 17, park: 5, geoJSON: 12, activityType: 'hiking', name: "Old Field Trail",                                        length: 0.3,  description: "", mapUrl: "https://www.sjcparks.org/591/Spicer-Lake-Nature-Preserve", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: "" },
  { id: 18, park: 5, geoJSON: 16, activityType: 'hiking', name: "Sassafras Ridge Trail",                                  length: 0.2,  description: "", mapUrl: "https://www.sjcparks.org/591/Spicer-Lake-Nature-Preserve", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: "" },
  { id: 19, park: 5, activityType: 'hiking', name: "Wetland-Woodland-Lancaster Trail Loop",                  length: 1.6,  description: "Longer hike featuring Mayapples, Large-Flowered Trillium, Jack-in-the-Pulpit & Spring Beauty.", mapUrl: "https://www.sjcparks.org/1142/Featured-Trails", difficulty: "Moderate", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: "" },

  // St. Patrick's County Park (park: 6)
  { id: 20, park: 6, activityType: 'hiking', name: "River Ridge Trail + Manion Cabin Loop",                  length: 1.5,  description: "Tranquil walk along the St. Joseph River. Extend to Manion Cabin Loop to see Eastern Bluebirds & Osprey.", mapUrl: "https://www.sjcparks.org/1142/Featured-Trails", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "Riverside views; connects to other park trails.", amenities: "Parking, Restrooms, Picnic Shelter, Canoe Launch, Playground" },
  { id: 21, park: 6, geoJSON: 41, activityType: 'hiking', name: "River Ridge Trail",                                      length: 0,    description: "", mapUrl: "https://www.sjcparks.org/592/St-Patricks-County-Park", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: "" },
  { id: 22, park: 6, geoJSON: 40, activityType: 'hiking', name: "Horsetail Trace",                                        length: 0,    description: "", mapUrl: "https://www.sjcparks.org/592/St-Patricks-County-Park", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: "" },
  { id: 23, park: 6, activityType: 'hiking', name: "Manion Canyon Loop",                                     length: 0.4,  description: "", mapUrl: "https://www.sjcparks.org/592/St-Patricks-County-Park", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: "" },
  { id: 24, park: 6, activityType: 'hiking', name: "Pasture Loop",                                           length: 0.45, description: "", mapUrl: "https://www.sjcparks.org/592/St-Patricks-County-Park", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: "" },
  { id: 25, park: 6, geoJSON: 39, activityType: 'hiking', name: "Milkweed Loop",                                          length: 0.47, description: "", mapUrl: "https://www.sjcparks.org/592/St-Patricks-County-Park", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: "" },
  { id: 26, park: 6, geoJSON: 37, activityType: 'hiking', name: "Oak Tree Trail",                                         length: 0.56, description: "", mapUrl: "https://www.sjcparks.org/592/St-Patricks-County-Park", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: "" },
  { id: 27, park: 6, geoJSON: 38, activityType: 'hiking', name: "Cabin Walk",                                             length: 0,    description: "", mapUrl: "https://www.sjcparks.org/592/St-Patricks-County-Park", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: "" },
  { id: 28, park: 6, geoJSON: 34, activityType: 'hiking', name: "White Pine Letters Trail",                               length: 0,    description: "", mapUrl: "https://www.sjcparks.org/592/St-Patricks-County-Park", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: "" },
  { id: 29, park: 6, geoJSON: 36, activityType: 'hiking', name: "White Pine Extension",                                   length: 0,    description: "", mapUrl: "https://www.sjcparks.org/592/St-Patricks-County-Park", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: "" },
  { id: 30, park: 6, geoJSON: 42, activityType: 'hiking', name: "Woodlot Loop",                                           length: 0.39, description: "", mapUrl: "https://www.sjcparks.org/592/St-Patricks-County-Park", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: "" },
  { id: 31, park: 6, geoJSON: 44, activityType: 'hiking', name: "Box Turtle Loop",                                        length: 0.37, description: "", mapUrl: "https://www.sjcparks.org/592/St-Patricks-County-Park", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: "" },
  { id: 32, park: 6, geoJSON: 43, activityType: 'hiking', name: "Sycamore Loop",                                          length: 0.32, description: "", mapUrl: "https://www.sjcparks.org/592/St-Patricks-County-Park", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: "" },
  { id: 33, park: 6, geoJSON: 32, activityType: 'hiking', name: "Deer Run Loop",                                          length: 0.67, description: "", mapUrl: "https://www.sjcparks.org/592/St-Patricks-County-Park", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: "" },
  { id: 34, park: 6, geoJSON: 33, activityType: 'hiking', name: "Aspen Loop",                                             length: 0.67, description: "", mapUrl: "https://www.sjcparks.org/592/St-Patricks-County-Park", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: "" },
  { id: 35, park: 6, activityType: 'hiking', name: "Auten Trail (Indiana-Michigan River Valley Trail)",      length: 0,    description: "", mapUrl: "https://www.sjcparks.org/592/St-Patricks-County-Park", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: "" },

  // LaSalle Trail (park: 4)
  { id: 36, park: 4, geoJSON: 30, activityType: 'hiking', name: "LaSalle Trail (segment of Indiana-Michigan River Valley Trail)", length: 3.5, description: "Starts in Roseland near Town Park, runs to Indiana/Michigan state line; former interurban corridor from 1903.", mapUrl: "https://www.sjcparks.org/581/LaSalle-Trail", difficulty: "Easy", surface: "Paved", accessibility: "Fully Accessible", notes: "Part of regional multi-use trail network. Access to 30 miles of bike-pedestrian trails.", amenities: "Parking, Restrooms, Bike Repair Station" },

  // Beverly D. Crone (park:)
  { id: 37, park: 1, geoJSON: 25, activityType: 'hiking', name: "Trail 1", length: 1, description: "", mapUrl: "", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: ""},
  { id: 38, park: 1, geoJSON: 26, activityType: 'hiking', name: "Trail 2", length: 1, description: "", mapUrl: "", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: ""},
  { id: 39, park: 1, geoJSON: 27, activityType: 'hiking', name: "Trail 3", length: 1, description: "", mapUrl: "", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: ""},

  // Chamberlain Lake
  { id: 40, park: 2, geoJSON: 27, activityType: 'hiking', name: "Chamberlain Trail", length: 1, description: "", mapUrl: "", difficulty: "Easy", surface: "Natural", accessibility: "Hiking Only", notes: "", amenities: ""},
];

export type GeoWithId = {
  id: number;
  geoJSON: GeoJSON.Feature;
}

export const trailData: GeoWithId[] = [
  // Bendix Woods trail data
  { id: 0, geoJSON: { type: "Feature", properties: { Trail_Name: "Raccoon Run" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.495023, 41.6709472 ], [ -86.4951083, 41.6709037 ], [ -86.4953075, 41.6708308 ], [ -86.4954866, 41.6706723 ], [ -86.495695, 41.6705707 ], [ -86.4958942, 41.6704978 ], [ -86.4960753, 41.6704965 ], [ -86.4962932, 41.670514 ], [ -86.4964764, 41.6706538 ], [ -86.4965788, 41.670784 ], [ -86.4966947, 41.6709141 ], [ -86.4968302, 41.6710038 ], [ -86.4971, 41.6710825 ], [ -86.4975374, 41.6711398 ], [ -86.4980346, 41.6711362 ], [ -86.4985987, 41.671117 ], [ -86.4993236, 41.6710614 ], [ -86.4996084, 41.6709927 ], [ -86.5000363, 41.670911 ], [ -86.5001975, 41.6708455 ], [ -86.5002729, 41.6707806 ], [ -86.5004389, 41.6703506 ], [ -86.5005586, 41.6700281 ], [ -86.500699, 41.669827 ], [ -86.5007359, 41.6697338 ], [ -86.5007509, 41.6694192 ], [ -86.5006539, 41.6692842 ], [ -86.5006333, 41.6691628 ], [ -86.500565, 41.6690418 ], [ -86.5004786, 41.6689924 ], [ -86.5002666, 41.6688153 ], [ -86.5, 41.6688387 ], [ -86.4997329, 41.6688192 ], [ -86.4992469, 41.6688298 ], [ -86.498996, 41.6685887 ], [ -86.4988793, 41.6684108 ], [ -86.4987697, 41.6683557 ], [ -86.4987296, 41.6683218 ], [ -86.4986817, 41.6682969 ], [ -86.4986554, 41.6682554 ], [ -86.4986547, 41.6681975 ], [ -86.4986732, 41.6680962 ], [ -86.4986707, 41.6680287 ], [ -86.4986548, 41.6679596 ], [ -86.4986245, 41.6679421 ], [ -86.4982736, 41.6678546 ], [ -86.4981873, 41.667823 ], [ -86.4981053, 41.6677882 ], [ -86.4980514, 41.6677661 ], [ -86.4980105, 41.6677567 ], [ -86.4978989, 41.6677511 ], [ -86.497817, 41.6677291 ], [ -86.4977348, 41.6676718 ] ] ] } } },
  { id: 1, geoJSON: { type: "Feature", properties: { Trail_Name: "Lookout Trail" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.4921645, 41.6668634 ], [ -86.4924257, 41.6667779 ], [ -86.4925848, 41.6667024 ], [ -86.4926289, 41.666715 ], [ -86.4926597, 41.6667419 ], [ -86.4926718, 41.6667919 ], [ -86.4926637, 41.6669034 ], [ -86.4925174, 41.6672404 ], [ -86.4924342, 41.667594 ], [ -86.4923414, 41.6679377 ], [ -86.4923046, 41.6681881 ], [ -86.4923275, 41.6683395 ], [ -86.4923646, 41.6684107 ], [ -86.4923949, 41.6684841 ], [ -86.4925, 41.6685084 ], [ -86.4926004, 41.6685291 ], [ -86.4926729, 41.6686072 ], [ -86.4927028, 41.6687106 ], [ -86.4927277, 41.6687962 ], [ -86.4927284, 41.6688533 ], [ -86.4927147, 41.6688963 ], [ -86.4926296, 41.668947 ], [ -86.4925295, 41.6689477 ], [ -86.4924199, 41.668952 ], [ -86.4923771, 41.6689595 ] ] ] } } },
  { id: 2, geoJSON: { type: "Feature", properties: { Trail_Name: "Sauk Trail" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.4903142, 41.6711255 ], [ -86.4905476, 41.670745 ], [ -86.4905539, 41.6704913 ], [ -86.4905767, 41.6704053 ], [ -86.4907719, 41.6700216 ], [ -86.4907054, 41.6696612 ], [ -86.4908324, 41.6691564 ], [ -86.4906859, 41.6688859 ], [ -86.4906317, 41.6687397 ], [ -86.4907992, 41.6684241 ], [ -86.4908451, 41.6679092 ], [ -86.4908429, 41.6673661 ], [ -86.4910311, 41.6671753 ], [ -86.4909983, 41.6668504 ], [ -86.4911014, 41.6667067 ], [ -86.491173, 41.6663453 ], [ -86.4912056, 41.6662843 ], [ -86.4911181, 41.6661527 ], [ -86.4912368, 41.6661378 ], [ -86.4913354, 41.6660899 ], [ -86.491489, 41.6660173 ], [ -86.4915809, 41.6660395 ], [ -86.4916651, 41.6660646 ], [ -86.4917267, 41.6661085 ], [ -86.4917431, 41.6661928 ], [ -86.4917845, 41.6662984 ], [ -86.4918105, 41.6663912 ], [ -86.4918359, 41.6665884 ], [ -86.4918773, 41.6666925 ] ] ] } } },
  { id: 3, geoJSON: { type: "Feature", properties: { Trail_Name: "Central Trail" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.50078, 41.6659037 ], [ -86.5001385, 41.6664157 ], [ -86.4992781, 41.666958 ], [ -86.4982489, 41.6674364 ], [ -86.4978689, 41.6675936 ], [ -86.4977348, 41.6676718 ], [ -86.4975232, 41.6677908 ], [ -86.4972954, 41.6678842 ], [ -86.4971605, 41.6679629 ], [ -86.4970643, 41.6680335 ], [ -86.4970371, 41.6680753 ], [ -86.4970025, 41.6681618 ], [ -86.4969723, 41.668284 ], [ -86.4968313, 41.6682671 ], [ -86.496671, 41.6682891 ], [ -86.4965783, 41.6683299 ], [ -86.4965153, 41.6683676 ], [ -86.4964642, 41.6683962 ], [ -86.4963929, 41.6684071 ], [ -86.4963042, 41.668601 ], [ -86.4962074, 41.6687861 ], [ -86.4960688, 41.6690919 ], [ -86.4959802, 41.6692431 ], [ -86.4958736, 41.6694573 ], [ -86.4958077, 41.6695397 ], [ -86.4957603, 41.6695615 ], [ -86.4957324, 41.6696189 ], [ -86.4957283, 41.6696654 ], [ -86.4955856, 41.6696914 ], [ -86.4954763, 41.6697172 ], [ -86.4953388, 41.6697718 ], [ -86.4951588, 41.6698553 ], [ -86.4950691, 41.6699238 ], [ -86.4949232, 41.6700678 ], [ -86.4948288, 41.67014 ], [ -86.4947495, 41.6702692 ], [ -86.4947122, 41.6703374 ], [ -86.494605, 41.6705239 ], [ -86.494577, 41.6705742 ] ] ] } } },
  { id: 4, geoJSON: { type: "Feature", properties: { Trail_Name: "Hardwoods Loop" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.4986245, 41.6679421 ], [ -86.4988631, 41.6678117 ], [ -86.4989434, 41.6677113 ], [ -86.4991055, 41.6676361 ], [ -86.4991462, 41.6676278 ], [ -86.4992044, 41.6676515 ], [ -86.4992957, 41.6677442 ], [ -86.4993388, 41.6677567 ], [ -86.4995066, 41.6677877 ], [ -86.4995885, 41.6678129 ], [ -86.4996773, 41.6678782 ], [ -86.4997443, 41.6679131 ], [ -86.4998174, 41.6679287 ], [ -86.4999313, 41.6679391 ], [ -86.5002463, 41.6679046 ], [ -86.5004262, 41.6678792 ], [ -86.5005865, 41.6678265 ], [ -86.5006375, 41.6677924 ], [ -86.5007016, 41.667771 ], [ -86.5007568, 41.6677239 ], [ -86.5007842, 41.6676851 ], [ -86.5008288, 41.667651 ], [ -86.5008626, 41.6676073 ], [ -86.5008812, 41.6675525 ], [ -86.5008913, 41.6675025 ], [ -86.5008985, 41.6673931 ], [ -86.5008913, 41.6673352 ], [ -86.5008455, 41.6672808 ], [ -86.5008043, 41.6672489 ], [ -86.5007951, 41.6671991 ], [ -86.5007801, 41.66714 ], [ -86.5007237, 41.6669618 ], [ -86.5007122, 41.6668046 ], [ -86.5006667, 41.666724 ], [ -86.5006143, 41.6666076 ], [ -86.500527, 41.6664891 ], [ -86.5004379, 41.6664731 ], [ -86.5003613, 41.6664475 ], [ -86.5002319, 41.6664522 ], [ -86.5001485, 41.6664562 ], [ -86.5001385, 41.6664157 ] ] ] } } },
  { id: 5, geoJSON: { type: "Feature", properties: { Trail_Name: "Lower Big Tree Trail" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.4971765, 41.6658464 ], [ -86.4971069, 41.6658686 ], [ -86.4970265, 41.6658873 ], [ -86.496947, 41.6659309 ], [ -86.4969021, 41.6659372 ], [ -86.4968454, 41.6659311 ], [ -86.4967871, 41.6659206 ], [ -86.4967364, 41.6659319 ], [ -86.4966422, 41.6659522 ], [ -86.4965667, 41.6659614 ], [ -86.4964708, 41.6659654 ], [ -86.4963968, 41.6659714 ], [ -86.4963211, 41.6659643 ], [ -86.4962398, 41.6659649 ], [ -86.4961455, 41.6659808 ], [ -86.4960195, 41.6660112 ], [ -86.4959224, 41.6660326 ], [ -86.4958687, 41.6660384 ], [ -86.4958177, 41.66603 ], [ -86.4957491, 41.6660077 ], [ -86.4957038, 41.6659927 ], [ -86.4956427, 41.6659823 ], [ -86.4955772, 41.6659773 ], [ -86.4955173, 41.6659537 ], [ -86.4955705, 41.6659043 ], [ -86.4955247, 41.6658857 ], [ -86.49548, 41.6658799 ], [ -86.4954291, 41.6658748 ], [ -86.4953867, 41.6658555 ], [ -86.4953515, 41.6658285 ], [ -86.4953086, 41.6657678 ], [ -86.4952864, 41.6657429 ], [ -86.4952281, 41.6657292 ], [ -86.4951815, 41.6657197 ], [ -86.4951522, 41.6657003 ], [ -86.4951243, 41.6656776 ], [ -86.495114, 41.6656657 ], [ -86.4950845, 41.6656343 ], [ -86.4950289, 41.6656053 ], [ -86.4949691, 41.6655905 ], [ -86.4949223, 41.6655657 ], [ -86.4948319, 41.6655424 ], [ -86.4947576, 41.6655266 ], [ -86.4946644, 41.6655142 ], [ -86.4945827, 41.6654897 ], [ -86.4945416, 41.6654562 ], [ -86.4944917, 41.6654184 ], [ -86.4944707, 41.6653706 ], [ -86.4944527, 41.6653261 ], [ -86.4944623, 41.6652813 ], [ -86.4945413, 41.6650944 ], [ -86.4945812, 41.6650309 ], [ -86.4946009, 41.6649796 ], [ -86.4946266, 41.6649489 ], [ -86.49467, 41.6649289 ], [ -86.4947338, 41.6649154 ], [ -86.4948308, 41.6648929 ], [ -86.4949121, 41.6648825 ], [ -86.4950405, 41.6649241 ], [ -86.4951644, 41.6649483 ], [ -86.4952936, 41.664943 ], [ -86.495417, 41.6649279 ], [ -86.4955258, 41.664913 ], [ -86.4955781, 41.6649126 ], [ -86.4956931, 41.6649292 ], [ -86.495779, 41.6649373 ], [ -86.4958476, 41.6649673 ], [ -86.4959119, 41.6649886 ], [ -86.4959469, 41.6649982 ], [ -86.495994, 41.6650051 ], [ -86.496056, 41.6650072 ], [ -86.496114, 41.6650024 ], [ -86.4961735, 41.6649933 ], [ -86.49622, 41.6649919 ], [ -86.4962754, 41.6650056 ], [ -86.4963206, 41.6650173 ], [ -86.4963774, 41.66503 ], [ -86.4964152, 41.6650275 ], [ -86.4964732, 41.6650206 ], [ -86.4965068, 41.665029 ], [ -86.4965475, 41.6650287 ], [ -86.4966359, 41.6650107 ], [ -86.4967014, 41.6650189 ], [ -86.4967801, 41.665039 ], [ -86.4968482, 41.6650796 ], [ -86.4969693, 41.6650938 ], [ -86.4970622, 41.6651125 ], [ -86.4970935, 41.6651709 ], [ -86.4970978, 41.6652094 ], [ -86.4971193, 41.6652522 ], [ -86.497171, 41.6652675 ], [ -86.4972454, 41.6652713 ] ] ] } } },
  { id: 6, geoJSON: { type: "Feature", properties: { Trail_Name: "Big Tree Trail" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.5001385, 41.6664157 ], [ -86.5001091, 41.6663564 ], [ -86.5001114, 41.6662897 ], [ -86.5001137, 41.6662206 ], [ -86.5001318, 41.6661466 ], [ -86.5000958, 41.6660611 ], [ -86.5000614, 41.6658588 ], [ -86.4999464, 41.6655667 ], [ -86.499885, 41.6654813 ], [ -86.4998527, 41.6654387 ], [ -86.4997792, 41.6654059 ], [ -86.499639, 41.6653807 ], [ -86.4995809, 41.6653096 ], [ -86.4994597, 41.6652724 ], [ -86.4992364, 41.6651978 ], [ -86.4990672, 41.6651323 ], [ -86.498984, 41.6650877 ], [ -86.4988278, 41.6650459 ], [ -86.4987192, 41.6650014 ], [ -86.4986737, 41.6649231 ], [ -86.4986729, 41.6648636 ], [ -86.4985992, 41.6648117 ], [ -86.4985162, 41.6647813 ], [ -86.4984113, 41.6647726 ], [ -86.4983131, 41.6647995 ], [ -86.4982027, 41.6648575 ], [ -86.4981401, 41.6648846 ], [ -86.4981137, 41.6649019 ], [ -86.4980758, 41.6649237 ], [ -86.4979403, 41.6649594 ], [ -86.4978804, 41.6649937 ], [ -86.4978522, 41.6650268 ], [ -86.4978241, 41.6650627 ], [ -86.4977684, 41.6650729 ], [ -86.497706, 41.6650721 ], [ -86.4976279, 41.6650755 ], [ -86.4975576, 41.6650932 ], [ -86.4974921, 41.6651866 ], [ -86.497445, 41.6652298 ], [ -86.4973875, 41.6652268 ], [ -86.4973362, 41.665222 ], [ -86.4972454, 41.6652713 ], [ -86.4971833, 41.6653389 ], [ -86.4970776, 41.6654183 ], [ -86.4970594, 41.6654813 ], [ -86.4970686, 41.6656056 ], [ -86.4970615, 41.66565 ], [ -86.4970928, 41.6657112 ], [ -86.4971475, 41.6658094 ], [ -86.4971765, 41.6658464 ], [ -86.4973007, 41.6658655 ], [ -86.4973811, 41.6658906 ], [ -86.4974443, 41.6659173 ], [ -86.497599, 41.6659405 ], [ -86.4977366, 41.6659667 ], [ -86.4978229, 41.6660089 ], [ -86.4978464, 41.6660545 ], [ -86.4978486, 41.6660831 ], [ -86.4978057, 41.6661549 ], [ -86.4977548, 41.6662438 ], [ -86.4977542, 41.6663081 ], [ -86.4977577, 41.6663582 ], [ -86.4977612, 41.6664029 ], [ -86.4977415, 41.6664531 ], [ -86.4977657, 41.6665303 ], [ -86.4978076, 41.6666227 ], [ -86.4978774, 41.6667366 ], [ -86.4978836, 41.6667649 ], [ -86.497871, 41.6668009 ], [ -86.497889, 41.6668444 ], [ -86.497913, 41.6669063 ], [ -86.4979094, 41.6669608 ], [ -86.4978893, 41.667011 ], [ -86.4978524, 41.6671416 ], [ -86.4977937, 41.667253 ], [ -86.4977367, 41.6673259 ], [ -86.4976369, 41.6674038 ], [ -86.4975479, 41.6674962 ], [ -86.4974487, 41.667624 ], [ -86.4973494, 41.6677454 ], [ -86.4972954, 41.6678842 ] ] ] } } },
  { id: 7, geoJSON: { type: "Feature", properties: { Trail_Name: "Whispering Woods Loop" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.4974001, 41.668745 ], [ -86.4973803, 41.6687823 ], [ -86.4973464, 41.6688149 ], [ -86.4972896, 41.6688468 ], [ -86.4972339, 41.6688681 ], [ -86.4971707, 41.6688943 ], [ -86.4971253, 41.6689223 ], [ -86.4970598, 41.6689628 ], [ -86.4969943, 41.6690118 ], [ -86.4969489, 41.6690389 ], [ -86.4969049, 41.6690773 ], [ -86.496862, 41.6690986 ], [ -86.4968202, 41.6691112 ], [ -86.4967698, 41.6691412 ], [ -86.4967307, 41.6691681 ], [ -86.4966929, 41.6691894 ], [ -86.4966934, 41.6692313 ], [ -86.4966826, 41.6692771 ], [ -86.496683, 41.6693095 ], [ -86.4966768, 41.6693267 ], [ -86.4966503, 41.6693383 ], [ -86.496616, 41.6693367 ], [ -86.4965676, 41.6693341 ], [ -86.496532, 41.6693287 ], [ -86.4965028, 41.6693337 ], [ -86.4964942, 41.6693575 ], [ -86.4964552, 41.6693864 ], [ -86.4964301, 41.6694114 ], [ -86.4963999, 41.6694306 ], [ -86.496367, 41.6694471 ], [ -86.496324, 41.6694598 ], [ -86.4962363, 41.6694327 ], [ -86.4962002, 41.6694031 ], [ -86.4961722, 41.6693855 ], [ -86.4961649, 41.6693224 ] ], [ [ -86.4961649, 41.6693224 ], [ -86.4961663, 41.6692375 ], [ -86.4962062, 41.6691753 ], [ -86.4962548, 41.6690968 ], [ -86.4963212, 41.6690239 ], [ -86.4964031, 41.668969 ], [ -86.4965896, 41.6688476 ], [ -86.4966856, 41.6688064 ], [ -86.4968079, 41.6687624 ], [ -86.496899, 41.6687484 ], [ -86.4969663, 41.6687434 ], [ -86.4970753, 41.6687397 ], [ -86.497206, 41.6687224 ], [ -86.4973171, 41.6687122 ] ], [ [ -86.4958736, 41.6694573 ], [ -86.4959404, 41.6694593 ], [ -86.4960328, 41.6694291 ], [ -86.496112, 41.669358 ], [ -86.4961649, 41.6693224 ] ] ] } } },

  // Spicer Lake
  { id: 8, geoJSON: { type: "Feature", properties: { Trail_Name: "Boardwalk" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.5231486, 41.7578895 ], [ -86.523218, 41.7577186 ], [ -86.5232118, 41.7576174 ], [ -86.5233907, 41.7574291 ], [ -86.5233962, 41.757248 ], [ -86.523515, 41.7570899 ], [ -86.5235329, 41.7568777 ], [ -86.5235189, 41.7567814 ], [ -86.5235096, 41.7565634 ], [ -86.5234205, 41.7564426 ], [ -86.5233646, 41.756424 ], [ -86.5228862, 41.7564549 ], [ -86.5226782, 41.7563624 ], [ -86.5224133, 41.7560606 ], [ -86.5223717, 41.7559152 ], [ -86.5238645, 41.7577734 ], [ -86.5236246, 41.7579157 ], [ -86.5234085, 41.7579316 ], [ -86.5232952, 41.7579015 ], [ -86.5231562, 41.7578894 ], [ -86.5231487, 41.7578894 ] ] ] } } },
  { id: 9, geoJSON: { type: "Feature", properties: { Trail_Name: "Glacier Flats Shortcut 1" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.5207335, 41.7498445 ], [ -86.5208404, 41.7498412 ], [ -86.5209338, 41.7498333 ], [ -86.521035, 41.7498355 ], [ -86.5211724, 41.7498344 ], [ -86.5212831, 41.7498365 ], [ -86.5213804, 41.7498315 ], [ -86.5214664, 41.749838 ], [ -86.5215445, 41.7498274 ], [ -86.5216131, 41.7498226 ], [ -86.521714, 41.7498032 ], [ -86.5217996, 41.7497769 ], [ -86.5218888, 41.7497376 ], [ -86.5219971, 41.7497011 ], [ -86.5220481, 41.7496593 ], [ -86.5222228, 41.7495929 ] ] ] } } },
  { id: 10, geoJSON: { type: "Feature", properties: { Trail_Name: "Lancaster Lake Observation Platform" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.5174857, 41.7503492 ], [ -86.5172117, 41.7504411 ], [ -86.5171989, 41.7504932 ], [ -86.5171639, 41.7505275 ], [ -86.5170903, 41.7505573 ], [ -86.517013, 41.7505726 ], [ -86.5169732, 41.7505887 ], [ -86.5169448, 41.750606 ], [ -86.5169127, 41.7506348 ], [ -86.5168657, 41.7506852 ], [ -86.5168088, 41.7507415 ] ] ] } } },
  { id: 11, geoJSON: { type: "Feature", properties: { Trail_Name: "Hawthorn Trail" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.5212112, 41.7536498 ], [ -86.5212683, 41.7536513 ], [ -86.5213228, 41.7536529 ], [ -86.5213385, 41.7536605 ], [ -86.5213802, 41.7536777 ], [ -86.521378, 41.7537049 ], [ -86.5213887, 41.7537301 ], [ -86.5214175, 41.7537454 ], [ -86.5214642, 41.753749 ], [ -86.5215213, 41.7537485 ], [ -86.5215627, 41.7537385 ], [ -86.5215834, 41.7537325 ], [ -86.5216665, 41.7537377 ], [ -86.5217339, 41.7537372 ], [ -86.5217962, 41.7537368 ], [ -86.5218844, 41.7537381 ], [ -86.521939, 41.7537474 ], [ -86.521999, 41.7537683 ], [ -86.522038, 41.7537758 ], [ -86.5220666, 41.7537833 ], [ -86.5220929, 41.7538065 ], [ -86.5221164, 41.7538141 ], [ -86.5221369, 41.7537984 ], [ -86.5222014, 41.7537707 ], [ -86.5222815, 41.7537468 ], [ -86.5223203, 41.7537368 ], [ -86.5223199, 41.7537076 ], [ -86.5222962, 41.7536825 ], [ -86.5222645, 41.75364 ], [ -86.5222611, 41.7535779 ], [ -86.522258, 41.753539 ], [ -86.5222496, 41.7534925 ], [ -86.5222752, 41.7534631 ], [ -86.5223161, 41.7534162 ], [ -86.5223522, 41.7534004 ], [ -86.5224067, 41.7534039 ], [ -86.5224561, 41.7534093 ], [ -86.5225311, 41.7533952 ], [ -86.5225802, 41.7533793 ], [ -86.5226344, 41.7533536 ], [ -86.5227016, 41.7533356 ], [ -86.5227298, 41.753314 ], [ -86.5227399, 41.7532906 ], [ -86.5227265, 41.7532558 ], [ -86.5227082, 41.7532462 ], [ -86.5226562, 41.7532369 ], [ -86.522581, 41.7532433 ], [ -86.5224954, 41.753242 ], [ -86.5224305, 41.7532424 ], [ -86.5223631, 41.7532449 ], [ -86.522301, 41.753257 ], [ -86.5222545, 41.7532729 ], [ -86.5222134, 41.7533043 ], [ -86.5221856, 41.7533589 ], [ -86.522155, 41.7534058 ], [ -86.5221193, 41.7534468 ], [ -86.522086, 41.7534801 ], [ -86.5220319, 41.7535077 ], [ -86.5219592, 41.7535102 ], [ -86.5219048, 41.7535164 ], [ -86.5218612, 41.7535498 ], [ -86.5217887, 41.7535639 ], [ -86.5217004, 41.7535549 ], [ -86.5216429, 41.7535242 ], [ -86.5216084, 41.753472 ], [ -86.5215612, 41.7534296 ], [ -86.5215424, 41.7533851 ], [ -86.5215391, 41.7533326 ], [ -86.5215019, 41.753263 ], [ -86.5214601, 41.7532399 ], [ -86.5213743, 41.7532309 ], [ -86.5212781, 41.753216 ], [ -86.5212287, 41.7532048 ], [ -86.521205, 41.7531777 ], [ -86.5211708, 41.7531469 ], [ -86.521124, 41.7531395 ], [ -86.5211009, 41.7531571 ], [ -86.521096, 41.7531824 ], [ -86.5210965, 41.7532174 ], [ -86.5211228, 41.7532463 ], [ -86.5211568, 41.7532655 ], [ -86.5211856, 41.7532808 ], [ -86.5212015, 41.753306 ], [ -86.5211943, 41.7533546 ], [ -86.5211922, 41.7533896 ], [ -86.5212184, 41.7534108 ], [ -86.5212808, 41.753422 ], [ -86.5213045, 41.7534471 ], [ -86.5213155, 41.7534878 ], [ -86.5212978, 41.7535229 ], [ -86.5212774, 41.7535522 ], [ -86.5212518, 41.7535796 ], [ -86.5212238, 41.7536167 ], [ -86.5212112, 41.7536498 ] ] ] } } },
  { id: 12, geoJSON: { type: "Feature", properties: { Trail_Name: "Old Field Trail" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.5209672, 41.7536439 ], [ -86.5209575, 41.7536906 ], [ -86.5209657, 41.7537274 ], [ -86.5209919, 41.7537447 ], [ -86.5210261, 41.7537794 ], [ -86.5210217, 41.7538397 ], [ -86.520986, 41.7538885 ], [ -86.5208804, 41.7539457 ], [ -86.5208005, 41.7539851 ], [ -86.5206975, 41.7540461 ], [ -86.5206457, 41.7540543 ], [ -86.5205909, 41.7540275 ], [ -86.5205258, 41.7540085 ], [ -86.5205075, 41.7540028 ], [ -86.5203604, 41.7540252 ], [ -86.520218, 41.7540799 ], [ -86.5201466, 41.7540923 ], [ -86.5199475, 41.7540759 ], [ -86.5198597, 41.7540468 ], [ -86.5198664, 41.7539515 ], [ -86.5198888, 41.7538441 ], [ -86.5198633, 41.7537192 ], [ -86.5198141, 41.7536064 ], [ -86.5197803, 41.7534578 ], [ -86.5197137, 41.753232 ], [ -86.5197593, 41.7530708 ], [ -86.5197415, 41.752928 ], [ -86.5198107, 41.7527488 ], [ -86.5198494, 41.7526711 ] ] ] } } },
  { id: 13, geoJSON: { type: "Feature", properties: { Trail_Name: "Glacier Flats Shortcut 2" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.5205883, 41.748676 ], [ -86.5208054, 41.7486789 ], [ -86.5209637, 41.7486758 ], [ -86.5210907, 41.7486709 ], [ -86.5212283, 41.7486796 ], [ -86.5213553, 41.7486631 ], [ -86.5214566, 41.748676 ], [ -86.5215862, 41.7486692 ], [ -86.5217545, 41.7486388 ], [ -86.521767, 41.7486018 ], [ -86.521764, 41.7485746 ], [ -86.5217795, 41.7485667 ], [ -86.5218632, 41.7485766 ] ] ] } } },
  { id: 14, geoJSON: { type: "Feature", properties: { Trail_Name: "Lancaster Lk Trail" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.5208296, 41.7526143 ], [ -86.5207358, 41.7526255 ], [ -86.520648, 41.7526553 ], [ -86.5205576, 41.7526871 ], [ -86.5204828, 41.7527265 ], [ -86.5203741, 41.7527467 ], [ -86.5203099, 41.7527472 ], [ -86.520221, 41.7527578 ], [ -86.5201473, 41.7527707 ], [ -86.5201003, 41.7527749 ], [ -86.5199696, 41.7527417 ], [ -86.5198494, 41.7526711 ], [ -86.5197845, 41.7525763 ], [ -86.5196236, 41.7524346 ], [ -86.5194474, 41.7523406 ], [ -86.5191793, 41.7522932 ], [ -86.5190434, 41.7522671 ], [ -86.5189305, 41.7522479 ], [ -86.5187909, 41.7522261 ], [ -86.5186358, 41.7521886 ], [ -86.5184597, 41.7521471 ], [ -86.5183818, 41.7521127 ], [ -86.5183096, 41.7520627 ], [ -86.5182132, 41.7519845 ], [ -86.5181324, 41.7519249 ], [ -86.5180319, 41.7518401 ], [ -86.5180192, 41.7517581 ], [ -86.5180107, 41.7517135 ], [ -86.5179896, 41.7516243 ], [ -86.5179651, 41.7515709 ], [ -86.5179007, 41.7515148 ], [ -86.5178087, 41.7514708 ], [ -86.5177204, 41.7514089 ], [ -86.5176119, 41.7513234 ], [ -86.5175351, 41.7512316 ], [ -86.5173946, 41.7511344 ], [ -86.5172618, 41.7510103 ], [ -86.5171656, 41.7509574 ], [ -86.517115, 41.7509319 ], [ -86.5170959, 41.7509236 ], [ -86.5169728, 41.7508517 ], [ -86.5168088, 41.7507415 ], [ -86.5166165, 41.7506298 ], [ -86.5165434, 41.7505172 ], [ -86.5163288, 41.7502269 ], [ -86.5161593, 41.7500376 ], [ -86.5160582, 41.7499073 ], [ -86.5159812, 41.7498007 ], [ -86.5159445, 41.7497265 ], [ -86.5159277, 41.7496611 ], [ -86.5159305, 41.7495718 ], [ -86.5159726, 41.7494494 ], [ -86.5159872, 41.749351 ], [ -86.5160002, 41.7491751 ], [ -86.5159794, 41.7490452 ] ] ] } } },
  { id: 15, geoJSON: { type: "Feature", properties: { Trail_Name: "Wetland Trail" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.5159794, 41.7490452 ], [ -86.5159338, 41.7490641 ], [ -86.5159053, 41.7490729 ], [ -86.5158749, 41.7490817 ], [ -86.5158389, 41.7491034 ], [ -86.5158297, 41.7491292 ], [ -86.5158282, 41.7491564 ], [ -86.5158174, 41.7492065 ], [ -86.515803, 41.7492723 ], [ -86.5158042, 41.7493427 ], [ -86.5157967, 41.7493739 ], [ -86.5157836, 41.749394 ], [ -86.5157649, 41.7494213 ], [ -86.5157403, 41.7494429 ], [ -86.5156571, 41.7494978 ], [ -86.5155737, 41.7495456 ], [ -86.5155032, 41.7495547 ], [ -86.5154458, 41.7495465 ], [ -86.5154115, 41.7495468 ], [ -86.5153507, 41.7495658 ], [ -86.5152424, 41.7496038 ], [ -86.5152082, 41.7496155 ], [ -86.5151569, 41.7496387 ], [ -86.5151083, 41.7496557 ], [ -86.5150577, 41.7496733 ], [ -86.5150172, 41.7496945 ], [ -86.5149731, 41.7497344 ], [ -86.5149392, 41.7497747 ], [ -86.5149475, 41.7498261 ], [ -86.5149638, 41.7498974 ], [ -86.5149837, 41.7499645 ], [ -86.5150189, 41.7500271 ], [ -86.5150537, 41.7500583 ], [ -86.5150923, 41.7500966 ], [ -86.5151406, 41.7501377 ], [ -86.5151716, 41.7501718 ], [ -86.5152125, 41.7502372 ], [ -86.5152378, 41.7502685 ], [ -86.5152688, 41.7503097 ], [ -86.5153229, 41.7503536 ], [ -86.5153538, 41.7503862 ], [ -86.5153848, 41.7504203 ], [ -86.5154408, 41.7504685 ], [ -86.5155292, 41.750515 ], [ -86.5155946, 41.7505503 ], [ -86.5156143, 41.7506016 ], [ -86.515615, 41.7506502 ], [ -86.5156358, 41.7507786 ], [ -86.5156483, 41.75086 ], [ -86.515685, 41.7508969 ], [ -86.5157907, 41.7509462 ], [ -86.5159423, 41.7510079 ], [ -86.5161337, 41.7510537 ], [ -86.51626, 41.7510785 ], [ -86.5163557, 41.7510949 ], [ -86.5164533, 41.7511114 ], [ -86.5166042, 41.7511559 ], [ -86.5167322, 41.7512179 ], [ -86.5168521, 41.7512428 ], [ -86.5170687, 41.7513169 ], [ -86.5171933, 41.7513574 ], [ -86.5172799, 41.7514097 ], [ -86.5172766, 41.7514483 ], [ -86.5173155, 41.7515052 ], [ -86.517358, 41.7515492 ], [ -86.5174202, 41.7516273 ], [ -86.517521, 41.7517495 ], [ -86.5175954, 41.751889 ], [ -86.5176386, 41.7519721 ], [ -86.5176679, 41.7520286 ], [ -86.5177471, 41.7520995 ], [ -86.5178569, 41.7521801 ], [ -86.5179011, 41.7522245 ], [ -86.5179422, 41.7522795 ], [ -86.5179696, 41.7523294 ], [ -86.5180093, 41.7524228 ], [ -86.5180692, 41.7525161 ], [ -86.5180938, 41.7526008 ], [ -86.5181496, 41.7526824 ], [ -86.5181741, 41.7527642 ], [ -86.5181867, 41.7528315 ], [ -86.5181891, 41.7528823 ], [ -86.5182629, 41.7529807 ], [ -86.5182873, 41.7530281 ], [ -86.5182086, 41.7530883 ], [ -86.5182337, 41.7531834 ], [ -86.5183136, 41.7532126 ], [ -86.5183303, 41.753272 ], [ -86.5184132, 41.7535215 ], [ -86.5184464, 41.7536285 ], [ -86.518448, 41.7537535 ], [ -86.5184259, 41.7538847 ], [ -86.5184266, 41.7539383 ], [ -86.5184039, 41.7540219 ], [ -86.5183092, 41.7540821 ], [ -86.5182228, 41.7541602 ], [ -86.5181998, 41.7542259 ], [ -86.5182012, 41.7543331 ], [ -86.5183691, 41.7544033 ], [ -86.5185128, 41.7544439 ], [ -86.5186798, 41.7544367 ], [ -86.5188398, 41.7545129 ], [ -86.5190409, 41.7546842 ], [ -86.51917, 41.7548202 ], [ -86.5193294, 41.7548428 ], [ -86.5194731, 41.7548894 ], [ -86.5195292, 41.7549188 ], [ -86.5196107, 41.755067 ], [ -86.5197316, 41.7551853 ], [ -86.5198358, 41.75525 ], [ -86.5200025, 41.7552249 ], [ -86.520299, 41.7553954 ], [ -86.5205267, 41.7555221 ], [ -86.520611, 41.7555301 ], [ -86.5208098, 41.7555227 ], [ -86.5209217, 41.7555635 ], [ -86.5210972, 41.7556099 ], [ -86.5212313, 41.7556826 ], [ -86.5212575, 41.7557415 ], [ -86.5213012, 41.7557774 ], [ -86.5213423, 41.7558057 ], [ -86.5213958, 41.7558091 ], [ -86.5214467, 41.755803 ], [ -86.5214749, 41.7558237 ], [ -86.5215262, 41.75585 ], [ -86.5216052, 41.7558628 ], [ -86.5216762, 41.7558394 ], [ -86.5217399, 41.7558465 ], [ -86.5218216, 41.7558612 ], [ -86.5218598, 41.7558685 ], [ -86.5219339, 41.7558851 ], [ -86.5219748, 41.7559001 ], [ -86.5220867, 41.7558916 ], [ -86.5221452, 41.7558912 ], [ -86.522247, 41.7558904 ], [ -86.5223158, 41.7558975 ], [ -86.5223717, 41.7559152 ] ] ] } } },
  { id: 16, geoJSON: { type: "Feature", properties: { Trail_Name: "Sassafras Ridge Trail" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.5158297, 41.7491292 ], [ -86.5158646, 41.749169 ], [ -86.5158736, 41.7492704 ], [ -86.5158601, 41.7494063 ], [ -86.5158419, 41.7495541 ], [ -86.5158213, 41.7497126 ], [ -86.515807, 41.7497573 ], [ -86.5157974, 41.7498627 ], [ -86.5157981, 41.749917 ], [ -86.5157856, 41.7499828 ], [ -86.5157769, 41.7500429 ], [ -86.5158174, 41.7500812 ], [ -86.5159099, 41.7501463 ], [ -86.515966, 41.7501988 ], [ -86.5160257, 41.7502441 ], [ -86.5160547, 41.750271 ], [ -86.5160784, 41.7503266 ], [ -86.5160925, 41.7503865 ], [ -86.5160952, 41.7504465 ], [ -86.5161055, 41.7505007 ], [ -86.5161195, 41.750555 ], [ -86.5161546, 41.7506076 ], [ -86.5162127, 41.7506758 ], [ -86.5162707, 41.7507268 ], [ -86.5163534, 41.7507791 ], [ -86.5165035, 41.7508666 ], [ -86.5165863, 41.7509203 ], [ -86.5166536, 41.7509598 ], [ -86.5167152, 41.7509979 ], [ -86.5167559, 41.7510317 ], [ -86.5167888, 41.7510846 ], [ -86.5168125, 41.7511387 ], [ -86.5168521, 41.7512428 ] ], [ [ -86.5172799, 41.7514097 ], [ -86.5173548, 41.7514463 ], [ -86.5174651, 41.7515018 ], [ -86.5176436, 41.7516328 ], [ -86.5177283, 41.7516908 ], [ -86.5177692, 41.7517159 ], [ -86.5178156, 41.7517959 ], [ -86.5178682, 41.751877 ], [ -86.5179206, 41.7519452 ], [ -86.5179652, 41.7519935 ], [ -86.5180513, 41.7520129 ], [ -86.5181601, 41.7520135 ], [ -86.5182132, 41.7519845 ] ] ] } } },
  { id: 17, geoJSON: { type: "Feature", properties: { Trail_Name: "Wetland - Lancaster Connector" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.5181601, 41.7520135 ], [ -86.5181263, 41.7520523 ], [ -86.518087, 41.7521112 ], [ -86.5180235, 41.752216 ], [ -86.5179422, 41.7522795 ] ] ] } } },
  { id: 18, geoJSON: { type: "Feature", properties: { Trail_Name: "Woodland Trail" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.5187909, 41.7522261 ], [ -86.5189324, 41.7524874 ], [ -86.5190205, 41.7525403 ], [ -86.5190925, 41.7525696 ], [ -86.5191899, 41.7527177 ], [ -86.5192224, 41.7527711 ], [ -86.5191683, 41.7528846 ], [ -86.5191068, 41.7530518 ], [ -86.5190298, 41.753243 ], [ -86.5190635, 41.7533857 ], [ -86.5191051, 41.7535223 ], [ -86.5191703, 41.753641 ], [ -86.5191956, 41.753748 ], [ -86.5192039, 41.7537777 ], [ -86.5193082, 41.7538424 ], [ -86.5194607, 41.7539485 ], [ -86.5195888, 41.7540131 ], [ -86.5196851, 41.7540779 ], [ -86.5197027, 41.7542088 ], [ -86.5197512, 41.754262 ], [ -86.5198397, 41.7543388 ], [ -86.5199675, 41.7543795 ], [ -86.5200871, 41.7544084 ], [ -86.5201834, 41.7544672 ], [ -86.520239, 41.7544668 ], [ -86.520302, 41.7544187 ], [ -86.5204288, 41.754382 ], [ -86.5205639, 41.7543751 ], [ -86.5205805, 41.7544285 ], [ -86.5205894, 41.7544999 ], [ -86.5206482, 41.7547318 ], [ -86.5206813, 41.7548328 ], [ -86.5206899, 41.7548804 ], [ -86.5205987, 41.7552026 ], [ -86.5205456, 41.7553936 ], [ -86.5205267, 41.7555221 ] ] ] } } },
  { id: 19, geoJSON: { type: "Feature", properties: { Trail_Name: "Maple Woods Trail" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.5197085, 41.7480584 ], [ -86.5196576, 41.747795 ], [ -86.5196558, 41.747658 ], [ -86.5197337, 41.7475323 ], [ -86.5198984, 41.7473584 ], [ -86.5200494, 41.7473513 ], [ -86.5202325, 41.7473678 ], [ -86.5204776, 41.7472648 ], [ -86.5207871, 41.7472148 ], [ -86.5210888, 41.7471769 ], [ -86.521359, 41.7471629 ], [ -86.5214672, 41.7469239 ], [ -86.5214896, 41.7468165 ], [ -86.5216793, 41.7467258 ], [ -86.5218872, 41.7468136 ], [ -86.5219122, 41.7468968 ], [ -86.5218738, 41.7469983 ], [ -86.5218428, 41.747064 ], [ -86.5218686, 41.7472068 ], [ -86.5218326, 41.7474929 ], [ -86.5217729, 41.7477852 ], [ -86.5217641, 41.7481098 ] ] ] } } },
  { id: 20, geoJSON: { type: "Feature", properties: { Trail_Name: "Lancaster - Glacier Connector" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.5191793, 41.7522932 ], [ -86.5195388, 41.7520362 ], [ -86.5196567, 41.7519341 ], [ -86.5197729, 41.751695 ], [ -86.5199115, 41.7513545 ], [ -86.5199585, 41.7513005 ], [ -86.5200854, 41.7512698 ], [ -86.520172, 41.7512096 ], [ -86.5203284, 41.751006 ], [ -86.5203987, 41.7509102 ], [ -86.5204355, 41.7506836 ], [ -86.5205351, 41.7504029 ], [ -86.5206839, 41.7502291 ], [ -86.5209557, 41.7500462 ] ] ] } } },
  { id: 21, geoJSON: { type: "Feature", properties: { Trail_Name: "Glacier Flats - Woodland Connector" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.5205894, 41.7544999 ], [ -86.5207256, 41.7545764 ], [ -86.5210378, 41.7547229 ], [ -86.5212062, 41.7548289 ], [ -86.5212778, 41.7548283 ], [ -86.5213573, 41.7548277 ], [ -86.5214934, 41.7548982 ], [ -86.5215664, 41.7549989 ], [ -86.5217111, 41.7551169 ] ] ] } } },
  { id: 22, geoJSON: { type: "Feature", properties: { Trail_Name: "Observation Platform" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.5231487, 41.7578894 ], [ -86.5230225, 41.7578547 ], [ -86.5229165, 41.7577757 ], [ -86.5228952, 41.7577329 ], [ -86.5228473, 41.7577142 ], [ -86.5227278, 41.7577044 ], [ -86.5226182, 41.7577124 ], [ -86.5226114, 41.7576826 ], [ -86.5226271, 41.7576635 ], [ -86.5227186, 41.7577035 ] ] ] } } },
  { id: 23, geoJSON: { type: "Feature", properties: { Trail_Name: "Glacier Flats Trail" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.5211517, 41.7518958 ], [ -86.5211517, 41.7518959 ], [ -86.5223643, 41.7550889 ], [ -86.5223803, 41.7551403 ], [ -86.5223788, 41.7551746 ], [ -86.5223659, 41.7552061 ], [ -86.5223492, 41.7552406 ], [ -86.5223308, 41.7552572 ], [ -86.5223308, 41.7552572 ] ], [ [ -86.5222678, 41.7551483 ], [ -86.5223026, 41.7551852 ], [ -86.5223241, 41.7552207 ], [ -86.5223308, 41.7552572 ], [ -86.5223077, 41.755278 ], [ -86.5222242, 41.7553187 ], [ -86.5220855, 41.7553669 ], [ -86.5220171, 41.7553931 ], [ -86.5219735, 41.7554163 ], [ -86.5219528, 41.7554365 ], [ -86.5219399, 41.755468 ], [ -86.5219461, 41.7555037 ], [ -86.5219619, 41.755545 ], [ -86.5219813, 41.7555706 ], [ -86.5220199, 41.7555975 ], [ -86.5220679, 41.7556243 ], [ -86.5221101, 41.7556397 ], [ -86.5221656, 41.7556521 ], [ -86.5222267, 41.7556488 ], [ -86.5224365, 41.7556387 ], [ -86.522511, 41.7556381 ], [ -86.5225511, 41.7556407 ], [ -86.5225761, 41.7556534 ], [ -86.5225745, 41.7556805 ], [ -86.5225559, 41.7557121 ], [ -86.5225142, 41.7557353 ], [ -86.5224822, 41.7557698 ], [ -86.5224636, 41.7558072 ], [ -86.5224354, 41.7558388 ], [ -86.5224148, 41.7558733 ], [ -86.5223865, 41.7558992 ], [ -86.5223717, 41.7559152 ] ], [ [ -86.5221924, 41.7551682 ], [ -86.5220638, 41.7553037 ], [ -86.5220042, 41.7553709 ], [ -86.5219735, 41.7554163 ] ], [ [ -86.5219528, 41.7554365 ], [ -86.5219051, 41.7553537 ], [ -86.5218409, 41.7553125 ], [ -86.5217614, 41.7553131 ], [ -86.5217208, 41.7552479 ], [ -86.5217111, 41.7551169 ], [ -86.5216849, 41.7549385 ], [ -86.5216445, 41.7548971 ], [ -86.5216353, 41.7548019 ], [ -86.5216744, 41.754748 ], [ -86.5216014, 41.7546413 ], [ -86.5215685, 41.7545582 ], [ -86.5215825, 41.7544151 ], [ -86.5216352, 41.754315 ], [ -86.5215929, 41.7542551 ], [ -86.5215793, 41.7542125 ], [ -86.5215811, 41.7541522 ], [ -86.5215624, 41.7541077 ], [ -86.5215307, 41.7540632 ], [ -86.5215091, 41.7540012 ], [ -86.5214645, 41.7539646 ], [ -86.5214304, 41.7539377 ], [ -86.5214039, 41.753899 ], [ -86.521344, 41.75388 ], [ -86.5212425, 41.7538536 ], [ -86.5212084, 41.7538305 ], [ -86.5211974, 41.753784 ], [ -86.5212202, 41.7537391 ], [ -86.5212273, 41.7536905 ], [ -86.5212269, 41.7536594 ], [ -86.5212112, 41.7536498 ], [ -86.5211412, 41.7536523 ], [ -86.5210505, 41.7536627 ], [ -86.5210038, 41.7536611 ], [ -86.5209672, 41.7536439 ], [ -86.5209668, 41.7536089 ], [ -86.5209663, 41.7535759 ], [ -86.5209574, 41.7535573 ], [ -86.5208877, 41.7534 ], [ -86.5208865, 41.7533077 ], [ -86.5208801, 41.7531231 ], [ -86.5208981, 41.752986 ], [ -86.5209288, 41.7528994 ], [ -86.52094, 41.7528457 ], [ -86.5209395, 41.752807 ], [ -86.520939, 41.7527653 ], [ -86.5209104, 41.752709 ], [ -86.5208701, 41.7526705 ], [ -86.5208378, 41.7526321 ], [ -86.5208296, 41.7526143 ], [ -86.5208569, 41.7525754 ], [ -86.5209073, 41.7524797 ], [ -86.5209618, 41.75239 ], [ -86.521004, 41.7522735 ], [ -86.5210233, 41.7522257 ], [ -86.5210311, 41.7522041 ], [ -86.5211439, 41.7520039 ], [ -86.5211477, 41.7519231 ], [ -86.5211517, 41.7518959 ], [ -86.5211518, 41.7518958 ], [ -86.5212102, 41.7518342 ], [ -86.5212603, 41.7517815 ], [ -86.5212959, 41.751734 ], [ -86.521308, 41.7517141 ], [ -86.5213212, 41.7516988 ] ], [ [ -86.5218851, 41.7543754 ], [ -86.5218277, 41.7543544 ], [ -86.5217525, 41.754353 ], [ -86.5216926, 41.7543399 ], [ -86.5216353, 41.7543151 ], [ -86.5216352, 41.754315 ] ], [ [ -86.5211517, 41.7518958 ], [ -86.5211353, 41.7518357 ], [ -86.5210994, 41.7518182 ], [ -86.5210745, 41.7518296 ], [ -86.5210378, 41.7518465 ], [ -86.5209517, 41.7518876 ], [ -86.5208871, 41.7519055 ], [ -86.5207916, 41.7519412 ], [ -86.5207081, 41.7519088 ], [ -86.52063, 41.7518841 ], [ -86.520588, 41.7518514 ], [ -86.5205667, 41.7518108 ], [ -86.5205597, 41.7517781 ], [ -86.5205761, 41.7517369 ], [ -86.5206102, 41.7517032 ], [ -86.5206166, 41.7516831 ], [ -86.5206355, 41.7516658 ], [ -86.5206562, 41.7516421 ], [ -86.5206683, 41.7516163 ], [ -86.5206958, 41.7516075 ], [ -86.5207204, 41.7515937 ], [ -86.5207202, 41.7515737 ], [ -86.5207304, 41.7515522 ], [ -86.5207607, 41.7515348 ], [ -86.5207931, 41.7515303 ], [ -86.5208358, 41.751515 ], [ -86.5208642, 41.7514976 ], [ -86.5208947, 41.7514902 ], [ -86.5209254, 41.7515014 ], [ -86.520958, 41.7515126 ], [ -86.5209868, 41.7515267 ], [ -86.5210387, 41.7515563 ], [ -86.5210826, 41.7515589 ], [ -86.5211321, 41.7515428 ], [ -86.521168, 41.7515168 ], [ -86.5212211, 41.7514907 ], [ -86.5212475, 41.7514647 ], [ -86.5212604, 41.7514346 ], [ -86.5212694, 41.7513931 ], [ -86.5212669, 41.751346 ], [ -86.5213005, 41.7512885 ], [ -86.5213455, 41.7512296 ], [ -86.521366, 41.7511951 ], [ -86.5213637, 41.7511651 ], [ -86.5213214, 41.7511383 ], [ -86.5212867, 41.75111 ], [ -86.5212672, 41.7510801 ], [ -86.521257, 41.7510344 ], [ -86.5212451, 41.7509988 ], [ -86.5212485, 41.7509659 ], [ -86.5212519, 41.750933 ], [ -86.5212606, 41.7508715 ], [ -86.521246, 41.7507772 ], [ -86.5212472, 41.7507229 ], [ -86.5212945, 41.750694 ], [ -86.5213054, 41.7506539 ], [ -86.5212819, 41.7506055 ], [ -86.5212663, 41.7505813 ], [ -86.5212299, 41.7505715 ], [ -86.5211837, 41.7505419 ], [ -86.5211682, 41.7505234 ], [ -86.5211449, 41.7504964 ], [ -86.5211063, 41.7504638 ], [ -86.5210828, 41.7504211 ], [ -86.5210744, 41.750364 ], [ -86.5210647, 41.7503484 ], [ -86.5210491, 41.7503256 ], [ -86.5210201, 41.7502929 ], [ -86.5210026, 41.7502716 ], [ -86.5209907, 41.7502417 ], [ -86.5209828, 41.7502218 ], [ -86.5209845, 41.7501989 ], [ -86.5209993, 41.7501673 ], [ -86.5209931, 41.7501316 ], [ -86.5209791, 41.7500831 ], [ -86.5209557, 41.7500462 ], [ -86.520911, 41.7499836 ], [ -86.5208743, 41.749951 ], [ -86.5208114, 41.7499107 ], [ -86.5206892, 41.7498068 ], [ -86.5206375, 41.74975 ], [ -86.5205762, 41.7496861 ], [ -86.520566, 41.7496338 ], [ -86.5205845, 41.7495932 ], [ -86.5206475, 41.7495403 ], [ -86.5207136, 41.7494874 ], [ -86.5207704, 41.7494536 ], [ -86.5208049, 41.7494152 ], [ -86.5208361, 41.7493745 ], [ -86.5208515, 41.7493339 ], [ -86.5208537, 41.7492624 ], [ -86.520853, 41.7492076 ], [ -86.5208236, 41.7491483 ], [ -86.5207943, 41.7490961 ], [ -86.5207522, 41.749044 ], [ -86.5206978, 41.7490158 ], [ -86.5206586, 41.7489447 ], [ -86.5206865, 41.7488897 ], [ -86.5206793, 41.748823 ], [ -86.5206756, 41.7487825 ], [ -86.5206398, 41.7487209 ], [ -86.5205883, 41.748676 ], [ -86.5205278, 41.7486717 ], [ -86.520442, 41.7486818 ], [ -86.5203406, 41.7487112 ], [ -86.5202298, 41.7487477 ], [ -86.5201282, 41.7487675 ], [ -86.5200043, 41.7487756 ], [ -86.5198993, 41.7487764 ], [ -86.5198418, 41.7487578 ], [ -86.5197616, 41.7487036 ], [ -86.5197353, 41.7486442 ], [ -86.5197598, 41.7485726 ], [ -86.5197713, 41.7484748 ], [ -86.519764, 41.7484105 ], [ -86.5197634, 41.7483581 ], [ -86.5197497, 41.7482915 ], [ -86.51972, 41.7482108 ], [ -86.5197094, 41.7481251 ], [ -86.5197085, 41.7480584 ], [ -86.5197271, 41.7480225 ], [ -86.5197778, 41.7480055 ], [ -86.5198729, 41.7479857 ], [ -86.5199557, 41.7479922 ], [ -86.5200609, 41.7480034 ], [ -86.5201945, 41.7480095 ], [ -86.5203058, 41.7480063 ], [ -86.5204519, 41.7479862 ], [ -86.5206014, 41.7479874 ], [ -86.5207225, 41.7480008 ], [ -86.5208148, 41.7480073 ], [ -86.5209069, 41.7479947 ], [ -86.5209798, 41.7479751 ], [ -86.521021, 41.7479605 ], [ -86.5211225, 41.7479407 ], [ -86.5211865, 41.7479664 ], [ -86.5212636, 41.7480301 ], [ -86.5213219, 41.7481059 ], [ -86.5213862, 41.7481555 ], [ -86.5214246, 41.7481766 ], [ -86.5215106, 41.7481784 ], [ -86.5216087, 41.7481395 ], [ -86.521672, 41.7481153 ], [ -86.5217641, 41.7481098 ], [ -86.5218949, 41.7481374 ], [ -86.5219337, 41.74818 ], [ -86.521931, 41.7482229 ], [ -86.5219033, 41.7482898 ], [ -86.5218691, 41.748352 ], [ -86.5218579, 41.7484641 ], [ -86.5218526, 41.7485475 ], [ -86.5218725, 41.7486021 ], [ -86.5219207, 41.7486399 ], [ -86.5219815, 41.748668 ], [ -86.522055, 41.7486913 ], [ -86.5221284, 41.7487098 ], [ -86.5222975, 41.748749 ], [ -86.52239, 41.7487674 ], [ -86.5224414, 41.7488027 ], [ -86.5224737, 41.748843 ], [ -86.5224808, 41.7489001 ], [ -86.5224625, 41.7489574 ], [ -86.5224634, 41.7490217 ], [ -86.5224609, 41.7490766 ], [ -86.5224776, 41.749136 ], [ -86.5224718, 41.7491813 ], [ -86.5224534, 41.7492338 ], [ -86.5224159, 41.7492794 ], [ -86.5223621, 41.7493036 ], [ -86.5223307, 41.7493348 ], [ -86.5222998, 41.7494041 ], [ -86.5222783, 41.7494615 ], [ -86.5222599, 41.7495116 ], [ -86.5222228, 41.7495929 ], [ -86.5222234, 41.7496358 ], [ -86.5222411, 41.7497738 ], [ -86.5222524, 41.7499024 ], [ -86.5222631, 41.749988 ], [ -86.5222639, 41.75005 ], [ -86.5222612, 41.7500881 ], [ -86.5222298, 41.7501169 ], [ -86.5221604, 41.7501651 ], [ -86.5221132, 41.7501988 ], [ -86.5221013, 41.750268 ], [ -86.5221306, 41.7503154 ], [ -86.5223413, 41.7503681 ], [ -86.5224855, 41.7504528 ], [ -86.5225442, 41.7505596 ], [ -86.5225357, 41.7506383 ], [ -86.5224892, 41.7507315 ], [ -86.5223949, 41.7508108 ], [ -86.5222145, 41.7508836 ], [ -86.5220524, 41.750892 ], [ -86.521949, 41.7510143 ], [ -86.5217807, 41.7512799 ], [ -86.5216387, 41.7513668 ], [ -86.5215827, 41.7514601 ], [ -86.5213212, 41.7516988 ] ] ] } } },
  { id: 24, geoJSON: { type: "Feature", properties: { Trail_Name: "Buttonbush Observation Connector" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.5213291, 41.751693 ], [ -86.5216153, 41.7518308 ] ] ] } } },

  // Beverly D Crone
  { id: 25, geoJSON: { type: "Feature", properties: { Trail_Name: "Trail 1" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.2729142, 41.621384 ], [ -86.273038, 41.6213791 ], [ -86.2731198, 41.6213672 ], [ -86.2732813, 41.6213277 ], [ -86.2733895, 41.6212857 ], [ -86.2734767, 41.6212395 ], [ -86.2735789, 41.6211747 ], [ -86.2737304, 41.6210724 ], [ -86.2739878, 41.6208966 ], [ -86.2740408, 41.6208663 ], [ -86.274094, 41.6208432 ], [ -86.2741281, 41.6208273 ], [ -86.2742251, 41.6208053 ], [ -86.274324, 41.6207891 ], [ -86.2744534, 41.6207827 ], [ -86.274564, 41.6207878 ], [ -86.2746765, 41.6208087 ], [ -86.2747778, 41.6208396 ], [ -86.2748887, 41.6208876 ], [ -86.2749903, 41.6209542 ], [ -86.2751072, 41.6210322 ], [ -86.2752087, 41.6210846 ], [ -86.2753062, 41.6211198 ], [ -86.2754284, 41.6211506 ], [ -86.2755504, 41.6211657 ], [ -86.2756343, 41.6211709 ], [ -86.2757885, 41.6211601 ], [ -86.2758798, 41.6211511 ], [ -86.2759958, 41.6211233 ], [ -86.2761077, 41.6210755 ], [ -86.2762215, 41.6210192 ], [ -86.2763369, 41.6209371 ], [ -86.2764314, 41.6208565 ], [ -86.2766091, 41.6207127 ], [ -86.2768076, 41.6205572 ], [ -86.2769248, 41.6204523 ], [ -86.2769718, 41.6203863 ], [ -86.2770018, 41.6203375 ], [ -86.2770372, 41.6202573 ], [ -86.2770497, 41.6201729 ], [ -86.277049, 41.6200985 ], [ -86.2770216, 41.6200172 ], [ -86.2769636, 41.6199289 ], [ -86.2768848, 41.6198521 ], [ -86.2768176, 41.6197925 ], [ -86.2767274, 41.6197258 ], [ -86.2766469, 41.6196704 ], [ -86.2765817, 41.6196265 ], [ -86.2765317, 41.6195796 ], [ -86.2764797, 41.6195141 ], [ -86.2764582, 41.619457 ], [ -86.2764502, 41.6194185 ], [ -86.2764498, 41.6193713 ], [ -86.2764603, 41.6192698 ], [ -86.2765021, 41.6190651 ], [ -86.2765343, 41.6188363 ], [ -86.2765391, 41.6187419 ], [ -86.2765369, 41.6187076 ], [ -86.2765284, 41.6186133 ], [ -86.2765037, 41.6184191 ], [ -86.2764931, 41.6183091 ], [ -86.2765018, 41.6182232 ], [ -86.2765163, 41.6181446 ], [ -86.2765443, 41.6180787 ], [ -86.2765817, 41.618007 ], [ -86.2766211, 41.6179482 ], [ -86.2766756, 41.6178678 ], [ -86.2767985, 41.6177714 ], [ -86.2769464, 41.6176963 ], [ -86.2770831, 41.6176513 ], [ -86.2771934, 41.6176264 ], [ -86.2773037, 41.6176158 ], [ -86.2774675, 41.6176106 ], [ -86.2776276, 41.6176226 ], [ -86.2777592, 41.6176377 ], [ -86.2778754, 41.6176371 ], [ -86.2779477, 41.6176324 ], [ -86.2780313, 41.6176062 ], [ -86.2781318, 41.6175599 ], [ -86.2781866, 41.6175196 ], [ -86.2782225, 41.6174808 ], [ -86.2782563, 41.6174292 ], [ -86.2782806, 41.6173833 ], [ -86.2782896, 41.6173247 ], [ -86.2782813, 41.6172561 ], [ -86.2782483, 41.6171862 ], [ -86.2782019, 41.6171165 ], [ -86.2781538, 41.6170724 ], [ -86.2780444, 41.6169801 ], [ -86.2779752, 41.6169161 ], [ -86.2779117, 41.6168464 ], [ -86.2778903, 41.6167951 ], [ -86.2778763, 41.6167222 ], [ -86.2778699, 41.6166522 ], [ -86.2778713, 41.6166022 ] ] ] } } },
  { id: 26, geoJSON: { type: "Feature", properties: { Trail_Name: "Trail 2" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.2783508, 41.6173376 ], [ -86.2782854, 41.61729 ] ], [ [ -86.2783508, 41.6173376 ], [ -86.2782806, 41.6173833 ] ], [ [ -86.2771603, 41.6200696 ], [ -86.2771297, 41.6200692 ], [ -86.2771033, 41.6200682 ], [ -86.2770847, 41.6200622 ], [ -86.2770645, 41.6200553 ], [ -86.2770435, 41.6200449 ], [ -86.2770216, 41.6200172 ] ], [ [ -86.2771603, 41.6200696 ], [ -86.2773449, 41.6200506 ], [ -86.2775573, 41.6200273 ], [ -86.2776534, 41.6200254 ], [ -86.2777662, 41.6200303 ], [ -86.2778756, 41.6200616 ], [ -86.2779888, 41.6201165 ], [ -86.278223, 41.6202498 ], [ -86.2785148, 41.6204133 ], [ -86.2791505, 41.6207872 ], [ -86.2792341, 41.6208298 ], [ -86.2793231, 41.6208626 ], [ -86.2794306, 41.6208856 ], [ -86.2795268, 41.620899 ], [ -86.2796193, 41.6209013 ], [ -86.2797301, 41.6208937 ], [ -86.2798519, 41.6208723 ], [ -86.2799643, 41.6208315 ], [ -86.2800618, 41.6207838 ], [ -86.2801427, 41.6207362 ], [ -86.2802214, 41.6206525 ], [ -86.2802816, 41.6205718 ], [ -86.2803868, 41.6203548 ], [ -86.2804232, 41.620295 ], [ -86.2804502, 41.6202185 ], [ -86.2804548, 41.6201173 ], [ -86.2804575, 41.6200118 ], [ -86.2804399, 41.6199093 ], [ -86.280404, 41.6198248 ], [ -86.2803567, 41.6197183 ], [ -86.2803192, 41.6196561 ], [ -86.2802277, 41.6195622 ], [ -86.2800487, 41.6194037 ], [ -86.2799686, 41.619332 ], [ -86.2798546, 41.6192022 ], [ -86.2797553, 41.6190598 ], [ -86.2796933, 41.6189534 ], [ -86.2796401, 41.6188066 ], [ -86.2795919, 41.6186002 ], [ -86.279571, 41.6183437 ], [ -86.2795284, 41.6179417 ], [ -86.2795107, 41.6178322 ], [ -86.2794859, 41.6177421 ], [ -86.2794612, 41.6176812 ], [ -86.279407, 41.6176136 ], [ -86.2793697, 41.6175749 ], [ -86.2793287, 41.6175405 ], [ -86.2792709, 41.617495 ], [ -86.2791966, 41.6174496 ], [ -86.2791001, 41.6174071 ], [ -86.2790055, 41.6173813 ], [ -86.2788889, 41.6173625 ], [ -86.2787502, 41.6173549 ], [ -86.278606, 41.6173501 ], [ -86.2784063, 41.6173401 ], [ -86.2783508, 41.6173376 ] ], [ [ -86.2770493, 41.6201298 ], [ -86.2770792, 41.6201005 ], [ -86.2771086, 41.620081 ], [ -86.2771603, 41.6200696 ] ] ] } } },
  { id: 27, geoJSON: { type: "Feature", properties: { Trail_Name: "Trail 3" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.276538, 41.6187642 ], [ -86.2766438, 41.6187648 ], [ -86.2767441, 41.6187633 ], [ -86.2768013, 41.618764 ], [ -86.2768686, 41.6187674 ], [ -86.2769334, 41.6187661 ], [ -86.2770642, 41.6187712 ], [ -86.2771469, 41.6187802 ], [ -86.2772396, 41.6187883 ], [ -86.2772969, 41.6188014 ], [ -86.2773911, 41.6188218 ], [ -86.2774407, 41.618834 ], [ -86.277591, 41.6188865 ], [ -86.2777847, 41.6189579 ], [ -86.277893, 41.6189907 ], [ -86.2779236, 41.6189991 ], [ -86.2779656, 41.6190103 ], [ -86.2780496, 41.6190289 ], [ -86.2781577, 41.6190465 ], [ -86.2782416, 41.6190555 ], [ -86.2783368, 41.619056 ], [ -86.2784307, 41.6190526 ], [ -86.2785183, 41.6190445 ], [ -86.2785982, 41.6190327 ], [ -86.278673, 41.6190189 ], [ -86.2788047, 41.6189792 ], [ -86.2789172, 41.61893 ], [ -86.2790348, 41.6188703 ], [ -86.2791927, 41.6187875 ], [ -86.2793495, 41.6187114 ], [ -86.2794759, 41.6186526 ], [ -86.2795353, 41.6186246 ], [ -86.2795919, 41.6186002 ] ] ] } } },
  { id: 28, geoJSON: { type: "Feature", properties: { Trail_Name: "Trail Head" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.2804502, 41.6202185 ], [ -86.2804849, 41.6202485 ], [ -86.2805277, 41.6202751 ], [ -86.2805653, 41.6202889 ] ], [ [ -86.2805653, 41.6202889 ], [ -86.280637, 41.6203141 ], [ -86.2807139, 41.6203507 ], [ -86.2807824, 41.6203912 ], [ -86.2808355, 41.6204318 ], [ -86.2809214, 41.6205156 ] ], [ [ -86.2804076, 41.6203207 ], [ -86.2804479, 41.6202972 ], [ -86.2804853, 41.6202932 ], [ -86.2805653, 41.6202889 ] ] ] } } },

  // Chamberlain Lake
  { id: 29, geoJSON: { type: "Feature", properties: { Trail_Name: "Trail 1" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.3678787, 41.6541137 ], [ -86.3679099, 41.6541139 ], [ -86.3679537, 41.6541118 ], [ -86.3679854, 41.6541073 ], [ -86.3680082, 41.6540986 ], [ -86.3680347, 41.6540851 ], [ -86.3680484, 41.6540631 ], [ -86.3680527, 41.654043 ], [ -86.3680461, 41.6540231 ], [ -86.3680375, 41.653995 ], [ -86.3680297, 41.653975 ], [ -86.3680314, 41.6539598 ], [ -86.3680421, 41.6539435 ], [ -86.3680545, 41.6539201 ], [ -86.3680556, 41.6539053 ], [ -86.3680516, 41.6538863 ], [ -86.3680419, 41.6538706 ], [ -86.3680296, 41.6538478 ], [ -86.3680282, 41.6538354 ], [ -86.3680337, 41.6538187 ], [ -86.3680378, 41.6537892 ], [ -86.3680425, 41.6537453 ], [ -86.3680473, 41.6536614 ], [ -86.3680477, 41.6536466 ], [ -86.368052, 41.6536333 ], [ -86.3680626, 41.6536142 ], [ -86.3680743, 41.6535774 ], [ -86.3680722, 41.6535612 ], [ -86.3680715, 41.6535503 ], [ -86.3680821, 41.6535392 ], [ -86.3680839, 41.6535268 ], [ -86.3680863, 41.6535087 ], [ -86.3680867, 41.6534939 ], [ -86.3680961, 41.6534777 ], [ -86.3681293, 41.6534317 ], [ -86.3681498, 41.6533964 ], [ -86.3681744, 41.6533781 ], [ -86.3681864, 41.6533685 ], [ -86.3682033, 41.6533508 ], [ -86.3682447, 41.6533019 ], [ -86.368296, 41.6532216 ], [ -86.368319, 41.6531824 ], [ -86.3683315, 41.6531613 ], [ -86.3683446, 41.6531331 ], [ -86.3683507, 41.6531178 ], [ -86.3683498, 41.6530893 ], [ -86.3683603, 41.6530573 ], [ -86.3683719, 41.6530215 ], [ -86.3683893, 41.6529871 ], [ -86.3684056, 41.6529598 ], [ -86.3684212, 41.6529383 ], [ -86.3684287, 41.6529249 ], [ -86.3684271, 41.6528992 ], [ -86.3684179, 41.6528706 ], [ -86.3684011, 41.6528421 ], [ -86.3683838, 41.6528251 ], [ -86.3683747, 41.6528085 ], [ -86.3683649, 41.652779 ], [ -86.3683608, 41.6527571 ], [ -86.3683458, 41.6527181 ], [ -86.3683341, 41.6526958 ], [ -86.3683205, 41.6526687 ], [ -86.3683171, 41.652653 ], [ -86.3683175, 41.652634 ], [ -86.3683281, 41.6526148 ], [ -86.3683547, 41.6526013 ], [ -86.368392, 41.6525835 ], [ -86.3684242, 41.6525719 ], [ -86.3684521, 41.652565 ], [ -86.3684736, 41.6525553 ], [ -86.3684957, 41.6525443 ], [ -86.3685184, 41.6525255 ], [ -86.3685347, 41.6525111 ], [ -86.3685447, 41.6524963 ], [ -86.3685744, 41.6524809 ], [ -86.3685991, 41.6524722 ], [ -86.3686442, 41.6524676 ], [ -86.3686988, 41.6524654 ], [ -86.3687419, 41.6524603 ], [ -86.3687774, 41.6524549 ], [ -86.368804, 41.6524452 ], [ -86.3688293, 41.6524303 ], [ -86.368862, 41.6524038 ], [ -86.3688935, 41.6523751 ], [ -86.3689111, 41.6523578 ], [ -86.3689336, 41.6523281 ], [ -86.3689536, 41.6522937 ], [ -86.3689679, 41.6522707 ], [ -86.3689771, 41.6522407 ], [ -86.3689826, 41.6522149 ], [ -86.3689811, 41.6521925 ], [ -86.368977, 41.6521702 ], [ -86.3689717, 41.6521497 ], [ -86.368981, 41.6521301 ], [ -86.3689997, 41.6521 ], [ -86.3690204, 41.6520708 ], [ -86.3690277, 41.6520426 ], [ -86.3690275, 41.6520241 ], [ -86.3690241, 41.6520055 ], [ -86.3690277, 41.6519836 ], [ -86.3690376, 41.6519611 ], [ -86.3690476, 41.651941 ], [ -86.3690734, 41.6519228 ], [ -86.3691201, 41.6518953 ], [ -86.3691649, 41.6518679 ], [ -86.3692008, 41.6518377 ], [ -86.3692475, 41.6518116 ], [ -86.3692785, 41.6518005 ], [ -86.3693141, 41.6518008 ], [ -86.3693446, 41.6518034 ], [ -86.3693701, 41.6518033 ], [ -86.3693814, 41.6517984 ], [ -86.3693996, 41.6517793 ], [ -86.3694166, 41.6517591 ], [ -86.3694322, 41.6517333 ], [ -86.3694643, 41.6517069 ], [ -86.3695041, 41.65169 ], [ -86.3695307, 41.6516827 ], [ -86.3695644, 41.6516815 ], [ -86.3695924, 41.651688 ], [ -86.3696198, 41.651696 ], [ -86.3696498, 41.6517086 ], [ -86.3696715, 41.6517166 ], [ -86.3696918, 41.6517184 ], [ -86.3697261, 41.6517144 ], [ -86.3697597, 41.6517051 ], [ -86.3697862, 41.651694 ], [ -86.3698242, 41.651678 ], [ -86.3698752, 41.6516382 ], [ -86.3699117, 41.6516103 ], [ -86.3699426, 41.6515901 ], [ -86.3699596, 41.6515743 ], [ -86.369986, 41.6515455 ], [ -86.3700029, 41.651524 ], [ -86.3700238, 41.6515167 ], [ -86.3700459, 41.6515071 ], [ -86.3700579, 41.6514975 ], [ -86.3700532, 41.6514718 ], [ -86.3700453, 41.6514513 ], [ -86.3700559, 41.6514279 ], [ -86.3700594, 41.6514017 ], [ -86.3700521, 41.651377 ], [ -86.3700308, 41.6513442 ], [ -86.3700209, 41.6513214 ], [ -86.370037, 41.6512841 ], [ -86.3700289, 41.6512365 ], [ -86.3700308, 41.6511812 ], [ -86.3700328, 41.6511326 ], [ -86.3700312, 41.6510974 ], [ -86.3700029, 41.6510632 ], [ -86.3700127, 41.6510365 ], [ -86.3700276, 41.6510012 ], [ -86.3700411, 41.6509563 ], [ -86.3700433, 41.6509258 ], [ -86.3700251, 41.6508878 ], [ -86.3699942, 41.6508479 ], [ -86.3699874, 41.6508118 ], [ -86.3700021, 41.6507602 ], [ -86.3700102, 41.6506877 ], [ -86.3700259, 41.6506133 ], [ -86.3700381, 41.6505656 ], [ -86.3700543, 41.650536 ], [ -86.3700719, 41.6505178 ], [ -86.3700678, 41.6504911 ], [ -86.3700484, 41.6504598 ], [ -86.3700657, 41.6504177 ], [ -86.3701557, 41.6503386 ], [ -86.370225, 41.6502905 ], [ -86.3702432, 41.6502094 ], [ -86.3701092, 41.6501483 ], [ -86.3699815, 41.6500919 ], [ -86.3698474, 41.6500308 ], [ -86.3697769, 41.649974 ], [ -86.3697435, 41.649817 ], [ -86.3699206, 41.6497492 ], [ -86.3699771, 41.6496917 ], [ -86.3698366, 41.6496163 ], [ -86.3698542, 41.6494828 ], [ -86.3699169, 41.6494062 ], [ -86.3698651, 41.6493207 ], [ -86.3699591, 41.6492058 ], [ -86.3699005, 41.6490728 ], [ -86.3699243, 41.6489201 ], [ -86.3698972, 41.6487631 ], [ -86.3699724, 41.6486721 ], [ -86.3699966, 41.6485624 ], [ -86.3699194, 41.6484723 ], [ -86.3697978, 41.6483873 ], [ -86.3698159, 41.6482967 ], [ -86.369897, 41.6481675 ], [ -86.3698256, 41.648025 ], [ -86.3698053, 41.647906 ], [ -86.3698106, 41.6478155 ], [ -86.3696627, 41.6476496 ], [ -86.3695651, 41.647431 ], [ -86.369456, 41.6473316 ], [ -86.36943, 41.6472746 ] ] ] } } },

  // LaSalle Trail
  { id: 30, geoJSON: { type: "Feature", properties: { Trail_Name: "LaSalle Trail" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.2657644, 41.7303543 ], [ -86.2657644, 41.7303543 ], [ -86.2655942, 41.7306735 ], [ -86.2658672, 41.7306993 ], [ -86.266747, 41.7309139 ], [ -86.267276, 41.731035 ], [ -86.2675243, 41.7310575 ], [ -86.2678169, 41.731056 ], [ -86.2681728, 41.7310255 ], [ -86.2684206, 41.7310052 ], [ -86.2685352, 41.7310093 ], [ -86.2685991, 41.7310471 ], [ -86.2686186, 41.7310899 ], [ -86.2686068, 41.7311948 ], [ -86.268633, 41.7312661 ], [ -86.2686714, 41.7312993 ], [ -86.2687987, 41.7313081 ], [ -86.2688683, 41.7312649 ], [ -86.2688867, 41.7311933 ], [ -86.2687899, 41.7310414 ], [ -86.2685265, 41.7307616 ], [ -86.268469, 41.7307381 ], [ -86.2683799, 41.7307338 ], [ -86.2682022, 41.7307681 ], [ -86.267999, 41.730812 ], [ -86.2678338, 41.7308272 ], [ -86.2675537, 41.7308001 ], [ -86.2674707, 41.7307672 ], [ -86.267426, 41.7307436 ], [ -86.2674318, 41.7306864 ], [ -86.2677312, 41.730742 ], [ -86.2679474, 41.7307361 ], [ -86.2681188, 41.7306923 ], [ -86.2682834, 41.7306104 ], [ -86.2693961, 41.7298068 ] ], [ [ -86.2592296, 41.7302954 ], [ -86.2632046, 41.7302701 ], [ -86.2643431, 41.7302689 ], [ -86.2646074, 41.7302751 ], [ -86.2647735, 41.7302899 ], [ -86.2650037, 41.730313 ], [ -86.2652788, 41.730345 ], [ -86.2653703, 41.7303445 ], [ -86.265565, 41.7303435 ], [ -86.2656795, 41.7303429 ], [ -86.2657644, 41.7303543 ], [ -86.2658514, 41.7303659 ], [ -86.2660999, 41.7304074 ], [ -86.2674318, 41.7306864 ] ], [ [ -86.2653834, 41.730622 ], [ -86.2655506, 41.7304446 ], [ -86.265565, 41.7303435 ] ], [ [ -86.2556233, 41.7303044 ], [ -86.2592296, 41.7302954 ] ], [ [ -86.2543853, 41.7303131 ], [ -86.2556294, 41.7303022 ] ], [ [ -86.2532213, 41.7448818 ], [ -86.2531503, 41.7409181 ], [ -86.2531167, 41.7386218 ], [ -86.2530955, 41.7376976 ] ], [ [ -86.252906, 41.7667736 ], [ -86.2530153, 41.7606046 ], [ -86.2532776, 41.7606084 ], [ -86.2533131, 41.7591622 ], [ -86.2533216, 41.7487999 ], [ -86.2532221, 41.744964 ] ], [ [ -86.2530885, 41.7376214 ], [ -86.2530531, 41.7358301 ], [ -86.2529911, 41.7332052 ], [ -86.2529698, 41.7322667 ], [ -86.2529699, 41.7322659 ], [ -86.2529818, 41.7321904 ], [ -86.2530006, 41.7321569 ], [ -86.2530323, 41.7321472 ], [ -86.2530703, 41.732128 ], [ -86.2531084, 41.7321135 ], [ -86.2531719, 41.7321036 ], [ -86.2532546, 41.7321032 ], [ -86.2533503, 41.7321361 ], [ -86.2534459, 41.7321594 ], [ -86.2535477, 41.7321637 ], [ -86.2542028, 41.7321603 ], [ -86.2543043, 41.732136 ], [ -86.2543739, 41.732088 ], [ -86.2543988, 41.7320354 ], [ -86.254411, 41.7319782 ], [ -86.2543842, 41.7318259 ], [ -86.2543572, 41.7316592 ], [ -86.2543424, 41.7314306 ], [ -86.2543774, 41.7310779 ], [ -86.2543612, 41.7306968 ], [ -86.2543852, 41.7303132 ] ], [ [ -86.2529699, 41.7322667 ], [ -86.2529699, 41.7322659 ], [ -86.2529489, 41.7302974 ], [ -86.2529489, 41.7302974 ], [ -86.2529489, 41.7302974 ], [ -86.2528791, 41.7271834 ], [ -86.2528325, 41.7241534 ], [ -86.2528752, 41.7239626 ], [ -86.2528351, 41.723048 ] ], [ [ -86.2529489, 41.7302974 ], [ -86.2529489, 41.7302974 ], [ -86.2543865, 41.7303129 ] ], [ [ -86.2526966, 41.7302955 ], [ -86.2529489, 41.7302974 ], [ -86.2529489, 41.7302973 ] ], [ [ -86.2528351, 41.723048 ], [ -86.2527393, 41.7209045 ], [ -86.252693, 41.7186034 ], [ -86.252643, 41.7158974 ] ], [ [ -86.252643, 41.7158974 ], [ -86.252604, 41.7144111 ], [ -86.2526473, 41.7142727 ], [ -86.2526453, 41.7140488 ] ], [ [ -86.2526453, 41.7140488 ], [ -86.2525993, 41.7117859 ], [ -86.2525795, 41.7110094 ], [ -86.2525836, 41.7107568 ], [ -86.2525254, 41.7106523 ], [ -86.2523783, 41.7105578 ], [ -86.2522762, 41.7105202 ], [ -86.2518693, 41.7105222 ], [ -86.2505341, 41.710529 ], [ -86.2505085, 41.7105149 ] ] ] } } },

  // St Patrick's
  { id: 31, geoJSON: { type: "Feature", properties: { Trail_Name: "Oaktree - Milkweed Connector" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.2668668, 41.7509747 ], [ -86.2668061, 41.7510316 ], [ -86.2667446, 41.7510855 ], [ -86.2667744, 41.751214 ], [ -86.2668091, 41.7513496 ], [ -86.266829, 41.751446 ], [ -86.2668546, 41.7516317 ], [ -86.2668412, 41.7517282 ], [ -86.2667992, 41.7518249 ], [ -86.2667236, 41.7519075 ], [ -86.2665573, 41.7519906 ], [ -86.266458, 41.7520804 ], [ -86.266416, 41.7521807 ], [ -86.2663545, 41.7522453 ], [ -86.2662836, 41.7523207 ], [ -86.2662462, 41.7524031 ], [ -86.2662711, 41.7525138 ], [ -86.2662722, 41.7526281 ], [ -86.2662827, 41.7527281 ], [ -86.2663122, 41.752828 ], [ -86.266342, 41.7529494 ], [ -86.2663429, 41.7530494 ], [ -86.2663435, 41.7531137 ], [ -86.2663494, 41.7532917 ] ] ] } } },
  { id: 32, geoJSON: { type: "Feature", properties: { Trail_Name: "Deer Run Loop" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.2607854, 41.7568732 ], [ -86.2608133, 41.7567908 ], [ -86.2608168, 41.7566586 ], [ -86.2607924, 41.7565944 ], [ -86.2606727, 41.7565557 ], [ -86.2605724, 41.7565455 ], [ -86.2602908, 41.756547 ], [ -86.2600905, 41.7565516 ], [ -86.2597566, 41.7565748 ], [ -86.2594417, 41.7565764 ], [ -86.2592078, 41.756574 ], [ -86.2589404, 41.7565611 ], [ -86.2585821, 41.7565201 ], [ -86.2583625, 41.7565069 ], [ -86.2580187, 41.7564837 ], [ -86.2578276, 41.7564632 ], [ -86.2576225, 41.7564714 ], [ -86.2573984, 41.7565011 ], [ -86.257184, 41.7565308 ], [ -86.2571077, 41.7565419 ], [ -86.2570643, 41.7564921 ], [ -86.2570006, 41.7563067 ], [ -86.2569319, 41.7561069 ], [ -86.256892, 41.7559141 ], [ -86.2568856, 41.7557355 ], [ -86.2568888, 41.7555711 ], [ -86.2568497, 41.7554641 ], [ -86.2568484, 41.7553248 ], [ -86.2569046, 41.7552101 ], [ -86.256984, 41.7550132 ], [ -86.2570923, 41.7548626 ], [ -86.2571346, 41.7547837 ], [ -86.2571916, 41.7547548 ], [ -86.2571955, 41.7546583 ], [ -86.2571893, 41.7545083 ], [ -86.2571549, 41.7543941 ], [ -86.2573168, 41.7543647 ], [ -86.2576176, 41.7543739 ], [ -86.2578373, 41.7544013 ], [ -86.2581725, 41.7545211 ], [ -86.2583306, 41.7545918 ], [ -86.2584121, 41.7546342 ], [ -86.2584696, 41.7546625 ], [ -86.2585698, 41.7546548 ], [ -86.2586457, 41.7546116 ], [ -86.2587545, 41.7545074 ], [ -86.2588826, 41.754421 ], [ -86.2589726, 41.754349 ], [ -86.2591061, 41.7543412 ], [ -86.2593016, 41.7543223 ], [ -86.2595166, 41.7543462 ], [ -86.2596553, 41.7543848 ], [ -86.2598374, 41.7544589 ], [ -86.2599575, 41.7545512 ], [ -86.2600831, 41.7547185 ], [ -86.260108, 41.7548256 ], [ -86.2601527, 41.7550219 ], [ -86.2601637, 41.7551755 ], [ -86.2601799, 41.7553826 ], [ -86.2601953, 41.7555005 ], [ -86.2602391, 41.7555932 ], [ -86.2603453, 41.7557248 ], [ -86.2604177, 41.7558174 ], [ -86.2604761, 41.755935 ], [ -86.2605911, 41.755988 ], [ -86.2606583, 41.7560234 ], [ -86.2607301, 41.756048 ], [ -86.2607879, 41.7561085 ], [ -86.2608365, 41.7562011 ], [ -86.2608168, 41.7566586 ] ] ] } } },
  { id: 33, geoJSON: { type: "Feature", properties: { Trail_Name: "Aspen Loop" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.2571549, 41.7543941 ], [ -86.2570777, 41.7543052 ], [ -86.2569867, 41.7542699 ], [ -86.2569053, 41.7542418 ], [ -86.2568191, 41.75421 ], [ -86.2567424, 41.7541676 ], [ -86.2567417, 41.7540889 ], [ -86.2567984, 41.7540279 ], [ -86.2568598, 41.7539633 ], [ -86.2568879, 41.7538988 ], [ -86.2571266, 41.7539154 ], [ -86.2573274, 41.7539501 ], [ -86.2574608, 41.7539352 ], [ -86.2576899, 41.7539376 ], [ -86.2577613, 41.7539193 ], [ -86.2579141, 41.7539221 ], [ -86.2580764, 41.7539356 ], [ -86.2582001, 41.7538885 ], [ -86.2583094, 41.753845 ], [ -86.2585572, 41.753808 ], [ -86.2587723, 41.7538427 ], [ -86.2588966, 41.7538706 ], [ -86.2590164, 41.75392 ], [ -86.2591218, 41.7539695 ], [ -86.2593032, 41.7539686 ], [ -86.2595797, 41.7539385 ], [ -86.2597894, 41.7539089 ], [ -86.2599947, 41.7539221 ], [ -86.2603192, 41.7539204 ], [ -86.2605673, 41.7539156 ], [ -86.2607677, 41.7539181 ], [ -86.2609108, 41.7539138 ], [ -86.2609918, 41.7539027 ], [ -86.2610678, 41.7538558 ], [ -86.2610906, 41.7537449 ], [ -86.261055, 41.7535021 ], [ -86.2610778, 41.7533948 ], [ -86.261047, 41.7531591 ], [ -86.2610693, 41.7529839 ], [ -86.2611012, 41.7528229 ], [ -86.2611288, 41.7527156 ], [ -86.2611136, 41.7526156 ], [ -86.2610745, 41.7525193 ], [ -86.2609598, 41.7524914 ], [ -86.2608884, 41.7525132 ], [ -86.2608365, 41.7525849 ], [ -86.2607802, 41.7526817 ], [ -86.260743, 41.7527855 ], [ -86.2607294, 41.7528642 ], [ -86.260692, 41.7529501 ], [ -86.260621, 41.7530112 ], [ -86.2605591, 41.753033 ], [ -86.2605069, 41.7530583 ], [ -86.2604503, 41.75313 ], [ -86.2603792, 41.7531876 ], [ -86.2603033, 41.7532309 ], [ -86.2602034, 41.7532635 ], [ -86.2600795, 41.7532856 ], [ -86.2599411, 41.7532863 ], [ -86.2597932, 41.7532871 ], [ -86.2596927, 41.7532626 ], [ -86.2596397, 41.7532057 ], [ -86.2595723, 41.7531346 ], [ -86.2594718, 41.7531029 ], [ -86.2593714, 41.7530856 ], [ -86.2592618, 41.7531076 ], [ -86.2591666, 41.7531259 ], [ -86.2590475, 41.7531516 ], [ -86.258967, 41.7532235 ], [ -86.2589003, 41.7532309 ], [ -86.2587906, 41.7532351 ], [ -86.2587239, 41.7532497 ], [ -86.2586621, 41.7532715 ], [ -86.2585379, 41.7532578 ], [ -86.2584182, 41.753212 ], [ -86.258294, 41.7531983 ], [ -86.2581987, 41.7532203 ], [ -86.2580892, 41.7532458 ], [ -86.257994, 41.7532749 ], [ -86.2579034, 41.7532825 ], [ -86.2578033, 41.7532938 ], [ -86.2576986, 41.7533229 ], [ -86.2576229, 41.7533948 ], [ -86.2575568, 41.7534701 ], [ -86.2575055, 41.7536062 ], [ -86.2575156, 41.7536669 ], [ -86.2575067, 41.7537348 ], [ -86.2574738, 41.7537886 ], [ -86.257527, 41.7538598 ], [ -86.2576037, 41.7539058 ], [ -86.2576899, 41.7539376 ] ] ] } } },
  { id: 34, geoJSON: { type: "Feature", properties: { Trail_Name: "White Pine Letters Trail" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.2713499, 41.7597947 ], [ -86.271356, 41.759934 ], [ -86.2713859, 41.7600696 ], [ -86.2713868, 41.7601661 ], [ -86.2713681, 41.7602019 ], [ -86.2713493, 41.7602377 ], [ -86.2712733, 41.7602703 ], [ -86.2711825, 41.7602601 ], [ -86.2710869, 41.7602391 ], [ -86.2709723, 41.7602397 ], [ -86.2709294, 41.7602399 ], [ -86.2707766, 41.7602372 ], [ -86.2706479, 41.7602486 ], [ -86.2705526, 41.7602705 ], [ -86.2704098, 41.7603034 ], [ -86.2703621, 41.7603108 ], [ -86.2702619, 41.7603114 ], [ -86.2701331, 41.7603156 ], [ -86.270028, 41.760309 ], [ -86.2698991, 41.7603025 ], [ -86.2697747, 41.760271 ], [ -86.2697077, 41.7602464 ], [ -86.2696024, 41.7602148 ], [ -86.2695498, 41.7602079 ], [ -86.2694348, 41.760162 ], [ -86.2693535, 41.7601375 ], [ -86.2691624, 41.760117 ], [ -86.2690575, 41.7601247 ], [ -86.2689287, 41.760129 ], [ -86.2688332, 41.7601259 ], [ -86.2687567, 41.760112 ], [ -86.2686227, 41.7600734 ], [ -86.268532, 41.7600667 ], [ -86.2683935, 41.7600567 ], [ -86.2681833, 41.76004 ], [ -86.2680784, 41.7600512 ], [ -86.268012, 41.7600945 ], [ -86.2679359, 41.7601163 ], [ -86.2678024, 41.7601313 ], [ -86.2677069, 41.7601282 ], [ -86.2676019, 41.7601252 ], [ -86.2675446, 41.7601219 ], [ -86.2674825, 41.7601222 ], [ -86.2674443, 41.7601224 ], [ -86.2673632, 41.7601229 ], [ -86.2672776, 41.7601519 ], [ -86.2671824, 41.760181 ], [ -86.26713, 41.7601956 ], [ -86.2670251, 41.7602068 ], [ -86.2669441, 41.7602144 ], [ -86.2668533, 41.7602077 ], [ -86.2667722, 41.760201 ], [ -86.2667053, 41.7601942 ], [ -86.2666383, 41.7601803 ], [ -86.266538, 41.7601701 ], [ -86.2664519, 41.7601455 ], [ -86.2663466, 41.7601103 ], [ -86.2661885, 41.760054 ], [ -86.2660736, 41.7600153 ], [ -86.2659779, 41.7599872 ], [ -86.2658584, 41.7599592 ], [ -86.2657627, 41.7599347 ], [ -86.2657757, 41.7592633 ] ] ] } } },
  { id: 35, geoJSON: { type: "Feature", properties: { Trail_Name: "River Ramble - White Pines Fork" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.2713499, 41.7597946 ], [ -86.2715473, 41.7598677 ], [ -86.2717018, 41.7598801 ] ] ] } } },
  { id: 36, geoJSON: { type: "Feature", properties: { Trail_Name: "White Pines Extension" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.2657757, 41.7592633 ], [ -86.2657917, 41.7584373 ], [ -86.2657533, 41.7584125 ], [ -86.2656622, 41.7583629 ], [ -86.2655615, 41.7583134 ], [ -86.2653986, 41.7582428 ], [ -86.2652643, 41.7581685 ], [ -86.2651207, 41.7581299 ], [ -86.2649535, 41.7581094 ], [ -86.2647718, 41.758071 ], [ -86.2646665, 41.7580394 ], [ -86.2645706, 41.7579863 ], [ -86.2644983, 41.7579116 ], [ -86.2643735, 41.7578337 ], [ -86.264268, 41.7577842 ], [ -86.2641733, 41.7577493 ] ] ] } } },
  { id: 37, geoJSON: { type: "Feature", properties: { Trail_Name: "Oak Tree Trail" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.2694144, 41.7533835 ], [ -86.2695053, 41.7534009 ], [ -86.269653, 41.7533823 ], [ -86.2697242, 41.753339 ], [ -86.2697952, 41.7532779 ], [ -86.2698091, 41.7532394 ] ], [ [ -86.2694144, 41.7533835 ], [ -86.2693092, 41.7533591 ], [ -86.2692185, 41.753356 ], [ -86.2691803, 41.753349 ], [ -86.2691133, 41.7533279 ], [ -86.2690419, 41.7533533 ], [ -86.2689946, 41.7533964 ], [ -86.2689284, 41.7534647 ], [ -86.2688766, 41.75354 ], [ -86.2688049, 41.7535261 ], [ -86.2687856, 41.7534959 ], [ -86.2687662, 41.7534655 ], [ -86.2687318, 41.7533585 ], [ -86.2686883, 41.753298 ], [ -86.2685969, 41.753227 ], [ -86.2685343, 41.7531594 ], [ -86.2685865, 41.7531341 ], [ -86.2685528, 41.753095 ], [ -86.2684523, 41.7530705 ], [ -86.2683925, 41.7530663 ], [ -86.268381, 41.7529954 ], [ -86.2683648, 41.7528959 ], [ -86.2684166, 41.7528206 ], [ -86.2683727, 41.7527243 ], [ -86.2682529, 41.7526678 ], [ -86.2681095, 41.75264 ], [ -86.2679654, 41.7525371 ], [ -86.2677928, 41.7524558 ], [ -86.2676587, 41.7524029 ], [ -86.2675584, 41.7523856 ], [ -86.2674247, 41.7524176 ], [ -86.2673298, 41.7524404 ], [ -86.2672438, 41.7524301 ], [ -86.2671192, 41.7523736 ], [ -86.2669127, 41.7522353 ], [ -86.2667936, 41.7522538 ], [ -86.2666938, 41.7522972 ], [ -86.266481, 41.7525847 ], [ -86.266484, 41.7529135 ], [ -86.2663494, 41.7532917 ], [ -86.26637, 41.753914 ], [ -86.2663703, 41.7540036 ], [ -86.2663721, 41.7546501 ], [ -86.2663721, 41.7546501 ], [ -86.2664533, 41.7546533 ], [ -86.2665627, 41.7546205 ], [ -86.266691, 41.7545627 ], [ -86.2668241, 41.7545012 ], [ -86.2669378, 41.7544113 ], [ -86.2670947, 41.7543569 ], [ -86.2673613, 41.7542805 ], [ -86.2675851, 41.7542328 ], [ -86.2677805, 41.7542068 ], [ -86.267943, 41.754231 ], [ -86.2681245, 41.7542515 ], [ -86.2682634, 41.7543079 ], [ -86.2682782, 41.7543578 ], [ -86.2683171, 41.7544291 ], [ -86.2683507, 41.7544575 ], [ -86.2684511, 41.7544677 ], [ -86.2684511, 41.7544677 ], [ -86.2684843, 41.7544461 ], [ -86.2686082, 41.7544347 ], [ -86.2687181, 41.7544485 ], [ -86.2688036, 41.7544051 ], [ -86.268908, 41.7543403 ], [ -86.2689839, 41.7542934 ], [ -86.2692725, 41.7542024 ], [ -86.2693581, 41.7541485 ], [ -86.2694142, 41.754064 ], [ -86.2694641, 41.7539665 ], [ -86.2695283, 41.7538938 ], [ -86.2695734, 41.7538211 ], [ -86.2695972, 41.7537502 ], [ -86.2696804, 41.7537236 ], [ -86.2699069, 41.7535421 ], [ -86.2699639, 41.7533818 ], [ -86.2699177, 41.7532933 ], [ -86.2698091, 41.7532394 ] ], [ [ -86.2663721, 41.7546501 ], [ -86.2663721, 41.7546501 ], [ -86.2663721, 41.7546501 ] ] ] } } },
  { id: 38, geoJSON: { type: "Feature", properties: { Trail_Name: "Cabin Walk" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.2698091, 41.7532394 ], [ -86.2698185, 41.7532134 ], [ -86.2697987, 41.7531421 ], [ -86.2698598, 41.7530417 ], [ -86.2698972, 41.7529629 ], [ -86.2699444, 41.7529091 ], [ -86.2699338, 41.7527876 ], [ -86.269928, 41.7526804 ], [ -86.2699223, 41.7525804 ], [ -86.2698644, 41.7525093 ], [ -86.2697971, 41.7524596 ], [ -86.2696727, 41.7524209 ], [ -86.2695626, 41.7523893 ], [ -86.2694716, 41.7523541 ], [ -86.2694042, 41.7522866 ], [ -86.2693893, 41.7522295 ], [ -86.269422, 41.7521471 ], [ -86.2693734, 41.752058 ], [ -86.2693628, 41.7519437 ], [ -86.2692618, 41.7518621 ], [ -86.2691279, 41.7518306 ], [ -86.2689845, 41.7517992 ], [ -86.268798, 41.7517644 ], [ -86.2684807, 41.7513273 ] ], [ [ -86.2680606, 41.7505504 ], [ -86.267986, 41.7506574 ], [ -86.2680344, 41.7507286 ], [ -86.2681307, 41.750821 ], [ -86.2682416, 41.7509383 ], [ -86.2684807, 41.7513273 ] ] ] } } },
  { id: 39, geoJSON: { type: "Feature", properties: { Trail_Name: "Milkweed Loop" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.268905, 41.7500207 ], [ -86.2681838, 41.750464 ], [ -86.2680606, 41.7505504 ], [ -86.2679604, 41.7505581 ], [ -86.2677411, 41.7505771 ], [ -86.2675601, 41.7506138 ], [ -86.2673602, 41.7506648 ], [ -86.2671891, 41.7507372 ], [ -86.2671701, 41.7507516 ], [ -86.2671281, 41.7508519 ], [ -86.2670478, 41.7509416 ], [ -86.266967, 41.7509742 ], [ -86.2668668, 41.7509747 ], [ -86.2668088, 41.7508893 ], [ -86.266746, 41.7508146 ], [ -86.266764, 41.7507001 ], [ -86.2667253, 41.750636 ], [ -86.2666526, 41.7505185 ], [ -86.2665519, 41.7504654 ], [ -86.2664463, 41.7503945 ], [ -86.2663879, 41.7502768 ], [ -86.2663775, 41.7501804 ], [ -86.2663664, 41.7500125 ], [ -86.2663366, 41.7498912 ], [ -86.2663506, 41.7498518 ], [ -86.266455, 41.7497941 ], [ -86.2665977, 41.7497469 ], [ -86.2666928, 41.7497107 ] ], [ [ -86.268905, 41.7500207 ], [ -86.2686253, 41.7499254 ], [ -86.2682267, 41.7499456 ], [ -86.2679313, 41.7499901 ], [ -86.2677166, 41.7499912 ], [ -86.2673913, 41.7499107 ], [ -86.2672673, 41.7499078 ], [ -86.2671095, 41.7498729 ], [ -86.2668654, 41.7497955 ], [ -86.2666928, 41.7497107 ] ] ] } } },
  { id: 40, geoJSON: { type: "Feature", properties: { Trail_Name: "Horsetail Trace" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.2704101, 41.7520373 ], [ -86.2705321, 41.751864 ] ], [ [ -86.270296, 41.7533459 ], [ -86.2701281, 41.7533559 ], [ -86.2699621, 41.7533835 ] ], [ [ -86.2702445, 41.7517467 ], [ -86.2703483, 41.7519096 ], [ -86.2704101, 41.7520373 ], [ -86.270372, 41.7521721 ], [ -86.270315, 41.7523848 ], [ -86.270277, 41.7524771 ], [ -86.2702865, 41.7525515 ], [ -86.2702722, 41.7526154 ], [ -86.2702389, 41.7527217 ], [ -86.2702247, 41.7528388 ], [ -86.2702437, 41.7529806 ], [ -86.2703245, 41.7530799 ], [ -86.2703483, 41.7531828 ], [ -86.2703055, 41.7532324 ], [ -86.270296, 41.7533459 ], [ -86.2703863, 41.7533884 ], [ -86.2705194, 41.75347 ], [ -86.2707238, 41.7536331 ], [ -86.2708426, 41.7537785 ], [ -86.2708712, 41.7539629 ], [ -86.2708759, 41.7542112 ], [ -86.2708319, 41.7544266 ] ] ] } } },
  { id: 41, geoJSON: { type: "Feature", properties: { Trail_Name: "River Ridge Trail" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.2681984, 41.7564216 ], [ -86.2681531, 41.7545768 ], [ -86.2684511, 41.7544677 ], [ -86.2684511, 41.7544677 ] ], [ [ -86.2684511, 41.7544677 ], [ -86.2684511, 41.7544677 ], [ -86.2686083, 41.7546504 ], [ -86.2686826, 41.7548099 ], [ -86.268641, 41.7549606 ], [ -86.268638, 41.7552399 ], [ -86.2686409, 41.7563658 ], [ -86.2685514, 41.7563649 ], [ -86.2683898, 41.7563702 ], [ -86.2682828, 41.7563827 ], [ -86.2682044, 41.7564358 ], [ -86.2681854, 41.7565139 ], [ -86.2681283, 41.7566061 ], [ -86.2680689, 41.7567071 ], [ -86.2680166, 41.7568082 ], [ -86.2678954, 41.7569022 ], [ -86.267836, 41.7569784 ], [ -86.2678265, 41.7570812 ], [ -86.2678645, 41.7572514 ], [ -86.2678788, 41.7573844 ], [ -86.2678823, 41.7575706 ], [ -86.2678728, 41.7580262 ], [ -86.2678907, 41.7585759 ] ] ] } } },
  { id: 42, geoJSON: { type: "Feature", properties: { Trail_Name: "Woodlot Loop" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.2641733, 41.7577493 ], [ -86.2641723, 41.7577489 ], [ -86.2641524, 41.7576597 ], [ -86.2640945, 41.7575957 ], [ -86.2639702, 41.7575678 ], [ -86.2638168, 41.7575671 ], [ -86.2635788, 41.7575662 ], [ -86.2633184, 41.7575684 ], [ -86.2630109, 41.7575692 ], [ -86.2625771, 41.7575791 ], [ -86.2624206, 41.7576037 ], [ -86.2624206, 41.7576037 ] ], [ [ -86.2641723, 41.7577489 ], [ -86.2640004, 41.7577463 ], [ -86.263805, 41.7577687 ], [ -86.2637146, 41.7577978 ], [ -86.2636338, 41.7578339 ], [ -86.2635626, 41.7578772 ], [ -86.2635012, 41.7579418 ], [ -86.2634446, 41.7580136 ], [ -86.263407, 41.7580781 ], [ -86.263393, 41.7581139 ], [ -86.2633984, 41.7581782 ], [ -86.2633799, 41.7582462 ], [ -86.2633469, 41.7582928 ], [ -86.2633426, 41.7583393 ], [ -86.2633957, 41.7584033 ], [ -86.2634105, 41.7584568 ], [ -86.2634161, 41.7585497 ], [ -86.2634168, 41.7586248 ], [ -86.2634461, 41.7586925 ], [ -86.2634897, 41.7587709 ], [ -86.2634334, 41.7588712 ], [ -86.2633478, 41.7589038 ], [ -86.2633101, 41.7589541 ], [ -86.263215, 41.7589974 ], [ -86.2631343, 41.7590443 ], [ -86.2630584, 41.759084 ], [ -86.2629825, 41.7591344 ], [ -86.2629256, 41.7591812 ], [ -86.262916, 41.7591777 ] ], [ [ -86.262916, 41.7591777 ], [ -86.2628334, 41.7591895 ], [ -86.2627265, 41.7592051 ], [ -86.2626522, 41.7591696 ], [ -86.2626017, 41.759174 ], [ -86.2625423, 41.7591231 ], [ -86.2624502, 41.7590278 ], [ -86.2623937, 41.7589635 ], [ -86.2623818, 41.7589036 ], [ -86.2623313, 41.7588482 ], [ -86.2624175, 41.7587662 ], [ -86.2624531, 41.7587042 ], [ -86.2624056, 41.7586311 ], [ -86.262364, 41.758518 ], [ -86.2622986, 41.7584116 ], [ -86.2622868, 41.758303 ], [ -86.2624353, 41.7582188 ], [ -86.2625304, 41.7581656 ], [ -86.262471, 41.7580548 ], [ -86.2624264, 41.7579595 ], [ -86.262462, 41.7578443 ], [ -86.262468, 41.757729 ], [ -86.2624206, 41.7576037 ] ] ] } } },
  { id: 43, geoJSON: { type: "Feature", properties: { Trail_Name: "Sycamore Loop" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.260835, 41.7581164 ], [ -86.2607583, 41.7580775 ], [ -86.2606198, 41.7580675 ], [ -86.2604382, 41.7580363 ], [ -86.26029, 41.7580121 ], [ -86.2601897, 41.7579983 ], [ -86.2600991, 41.758013 ], [ -86.2599562, 41.7580388 ], [ -86.2598513, 41.7580465 ], [ -86.2597652, 41.7580326 ], [ -86.25976, 41.7579826 ], [ -86.2597927, 41.7579003 ], [ -86.25984, 41.7578536 ], [ -86.2598775, 41.7577891 ], [ -86.2598626, 41.7577248 ], [ -86.2598002, 41.7576823 ], [ -86.2596998, 41.7576578 ], [ -86.2595614, 41.7576585 ], [ -86.2594278, 41.7576663 ], [ -86.2592131, 41.757671 ], [ -86.2589603, 41.757683 ], [ -86.2587646, 41.757684 ], [ -86.2586928, 41.7576558 ], [ -86.2586635, 41.7575881 ], [ -86.2586913, 41.7574986 ], [ -86.258695, 41.7573807 ], [ -86.2587136, 41.7573198 ], [ -86.2587802, 41.757298 ], [ -86.2588662, 41.7573155 ], [ -86.2589857, 41.7573291 ], [ -86.2591478, 41.7573212 ], [ -86.2594342, 41.7573268 ], [ -86.2595773, 41.7573154 ], [ -86.2596535, 41.7573007 ], [ -86.2597199, 41.7572575 ], [ -86.2597814, 41.7571928 ], [ -86.2598237, 41.7571247 ], [ -86.259847, 41.7570638 ], [ -86.2598798, 41.7569993 ], [ -86.2599463, 41.7569597 ], [ -86.2600702, 41.7569448 ], [ -86.2602707, 41.7569509 ], [ -86.2605378, 41.7569388 ], [ -86.2606951, 41.7569129 ], [ -86.2607854, 41.7568732 ], [ -86.260818, 41.7569466 ], [ -86.2608184, 41.7569944 ], [ -86.2608161, 41.7570695 ], [ -86.2608288, 41.7571331 ], [ -86.2608449, 41.7572331 ], [ -86.2608493, 41.7573742 ], [ -86.2608594, 41.7574811 ], [ -86.2608694, 41.7575834 ], [ -86.2608674, 41.7576949 ], [ -86.2608564, 41.7578155 ], [ -86.2608364, 41.7579544 ], [ -86.260825, 41.7580364 ], [ -86.260835, 41.7581164 ] ], [ [ -86.2607854, 41.7568732 ], [ -86.2607854, 41.7568732 ] ] ] } } },
  { id: 44, geoJSON: { type: "Feature", properties: { Trail_Name: "Box Turtle Loop" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.2624206, 41.7576037 ], [ -86.2623222, 41.7576191 ], [ -86.2621157, 41.7576338 ], [ -86.2620002, 41.757623 ], [ -86.2619179, 41.757603 ], [ -86.2618423, 41.7576288 ] ], [ [ -86.2618423, 41.7576288 ], [ -86.2617332, 41.757708 ], [ -86.261663, 41.7578549 ], [ -86.261622, 41.7580623 ], [ -86.2616276, 41.7581516 ], [ -86.2615428, 41.75827 ], [ -86.2615289, 41.7583165 ], [ -86.2615151, 41.7583773 ], [ -86.2615747, 41.7586307 ], [ -86.2616386, 41.7588341 ], [ -86.2616513, 41.7591771 ], [ -86.2616587, 41.7594522 ], [ -86.2616358, 41.7595595 ], [ -86.2615188, 41.7598138 ], [ -86.2614763, 41.7598569 ], [ -86.2613809, 41.7598681 ], [ -86.2612615, 41.759858 ], [ -86.2611085, 41.7598267 ], [ -86.260965, 41.7597917 ], [ -86.2608788, 41.7597599 ], [ -86.260864, 41.7597064 ], [ -86.260858, 41.7595707 ], [ -86.2608603, 41.7593027 ], [ -86.2608621, 41.758981 ], [ -86.2608481, 41.7584951 ], [ -86.260835, 41.7581164 ], [ -86.260835, 41.7581164 ], [ -86.2618423, 41.7576288 ] ] ] } } },
  { id: 45, geoJSON: { type: "Feature", properties: { Trail_Name: "River Ramble" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.2704207, 41.7579092 ], [ -86.2705118, 41.7579516 ], [ -86.2706311, 41.7580092 ], [ -86.2706135, 41.7581119 ], [ -86.2706385, 41.7582333 ], [ -86.2707552, 41.7582987 ], [ -86.270774, 41.7584255 ], [ -86.2708421, 41.7585681 ], [ -86.2708861, 41.7586822 ], [ -86.2708966, 41.7587786 ], [ -86.2709454, 41.7588999 ], [ -86.2709462, 41.7589785 ], [ -86.2709517, 41.7590606 ], [ -86.2709666, 41.7591249 ], [ -86.2710151, 41.7591997 ], [ -86.2710971, 41.7592993 ], [ -86.2711886, 41.7593881 ], [ -86.2712324, 41.7594772 ], [ -86.2712669, 41.7595914 ], [ -86.2713063, 41.7597163 ], [ -86.2713499, 41.7597946 ], [ -86.2713499, 41.7597947 ] ], [ [ -86.2711784, 41.7518508 ], [ -86.2713113, 41.7520234 ], [ -86.2713412, 41.752159 ], [ -86.2713183, 41.7522699 ], [ -86.2713914, 41.7524232 ], [ -86.2714458, 41.7526338 ], [ -86.2714246, 41.7528274 ], [ -86.2713824, 41.7529944 ], [ -86.2713957, 41.7531402 ], [ -86.2713764, 41.7532029 ], [ -86.2713049, 41.7532062 ], [ -86.2712411, 41.7531887 ], [ -86.2711776, 41.7532039 ], [ -86.2711382, 41.7532488 ], [ -86.2711429, 41.7533202 ], [ -86.2711912, 41.7533795 ], [ -86.2712436, 41.7534626 ], [ -86.2712168, 41.75357 ], [ -86.2712295, 41.7536503 ], [ -86.2712022, 41.753707 ], [ -86.2711913, 41.7538203 ], [ -86.2712086, 41.753972 ], [ -86.2711893, 41.7540347 ], [ -86.2711662, 41.7541063 ], [ -86.2711308, 41.7541571 ], [ -86.2711353, 41.7542077 ], [ -86.2711001, 41.7542734 ] ], [ [ -86.2708319, 41.7544266 ], [ -86.2708891, 41.754412 ], [ -86.27097, 41.7543902 ], [ -86.2710316, 41.754347 ], [ -86.2711001, 41.7542734 ] ], [ [ -86.2704798, 41.7565761 ], [ -86.2705123, 41.7564794 ], [ -86.2705264, 41.7564543 ] ], [ [ -86.2703986, 41.7570732 ], [ -86.2704209, 41.7569051 ], [ -86.2704575, 41.7567334 ], [ -86.2704798, 41.7565761 ], [ -86.2705563, 41.7565864 ], [ -86.2705942, 41.756554 ], [ -86.2706322, 41.756536 ], [ -86.2706933, 41.7565053 ], [ -86.2707154, 41.7564431 ], [ -86.2707514, 41.7563667 ], [ -86.2707158, 41.7562961 ], [ -86.2707101, 41.7561925 ], [ -86.2706947, 41.7560818 ], [ -86.2707324, 41.7560316 ], [ -86.2708083, 41.755974 ], [ -86.2708171, 41.7559025 ], [ -86.270821, 41.7558024 ], [ -86.2708058, 41.7557167 ], [ -86.2708286, 41.7556023 ], [ -86.270842, 41.7554986 ], [ -86.2708554, 41.755402 ], [ -86.2708974, 41.7553018 ], [ -86.270892, 41.7552339 ], [ -86.2708814, 41.7551232 ], [ -86.2708755, 41.7549981 ], [ -86.2708554, 41.7548946 ], [ -86.2708829, 41.7547694 ], [ -86.2708676, 41.7546659 ], [ -86.2708572, 41.754573 ], [ -86.2708234, 41.7545339 ], [ -86.2708319, 41.7544266 ] ], [ [ -86.2704207, 41.7579092 ], [ -86.2703986, 41.7570732 ] ] ] } } },
  { id: 46, geoJSON: { type: "Feature", properties: { Trail_Name: "Bridge - Orchard Trail" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.2663721, 41.7546501 ], [ -86.2663729, 41.7547287 ], [ -86.2663786, 41.7548323 ], [ -86.2663841, 41.7549109 ], [ -86.2663655, 41.754961 ], [ -86.2663137, 41.7550435 ], [ -86.2662524, 41.7551188 ], [ -86.2662337, 41.7551582 ], [ -86.26622, 41.7552262 ], [ -86.2662443, 41.7552725 ], [ -86.2659574, 41.7551138 ], [ -86.2659444, 41.7540632 ], [ -86.2663703, 41.7540036 ] ], [ [ -86.2663494, 41.7532917 ], [ -86.2662524, 41.7533058 ], [ -86.2660984, 41.7534008 ], [ -86.2659729, 41.7535356 ], [ -86.265914, 41.7536576 ], [ -86.2658911, 41.7537852 ], [ -86.2658873, 41.7539072 ], [ -86.2658911, 41.7540037 ], [ -86.2659444, 41.7540632 ] ] ] } } },
]

export const bikeTrailData: GeoWithId[] = [
  { id: 0, geoJSON: { type: "Feature", properties: { Trail_Name: "Bendix Bike Trail" }, geometry: { type: "MultiLineString", coordinates: [ [ [ -86.4956147, 41.6702497 ], [ -86.4967334, 41.6705228 ], [ -86.4967589, 41.6705273 ], [ -86.4969271, 41.6705095 ], [ -86.4969746, 41.670502 ], [ -86.4970671, 41.6705299 ], [ -86.4972999, 41.6705949 ], [ -86.4973222, 41.6705971 ], [ -86.4973761, 41.6705944 ], [ -86.4976584, 41.6705518 ], [ -86.4977472, 41.670544 ], [ -86.4978856, 41.6704334 ], [ -86.4979491, 41.6704306 ], [ -86.4979775, 41.6704161 ], [ -86.4980246, 41.6703729 ], [ -86.4980941, 41.6703414 ], [ -86.4981576, 41.6703362 ], [ -86.4982873, 41.6702947 ], [ -86.498337, 41.6702039 ], [ -86.4983621, 41.6701775 ], [ -86.4983611, 41.6700989 ], [ -86.4983829, 41.6700677 ], [ -86.4984399, 41.6700506 ], [ -86.4984427, 41.6700244 ], [ -86.4984828, 41.6699312 ], [ -86.4985893, 41.6698137 ], [ -86.4986238, 41.6697801 ], [ -86.4986234, 41.6697468 ], [ -86.4986165, 41.6697063 ], [ -86.4986221, 41.669642 ], [ -86.498644, 41.669618 ], [ -86.4987449, 41.6695601 ], [ -86.4987121, 41.6694793 ], [ -86.4986327, 41.6694823 ], [ -86.4985849, 41.6694707 ], [ -86.4985366, 41.6694163 ], [ -86.4984561, 41.6693382 ], [ -86.4983952, 41.6692934 ], [ -86.4983504, 41.6692675 ], [ -86.4983374, 41.669251 ], [ -86.498339, 41.6691247 ], [ -86.4983577, 41.6690936 ], [ -86.4983986, 41.6690695 ], [ -86.4985153, 41.6690019 ], [ -86.498597, 41.6689322 ], [ -86.4986728, 41.6688912 ], [ -86.4987545, 41.6688239 ], [ -86.4987952, 41.6687736 ], [ -86.498833, 41.6687519 ], [ -86.4989124, 41.6687489 ], [ -86.4990577, 41.6686835 ], [ -86.499197, 41.6686444 ], [ -86.499419, 41.6686166 ], [ -86.4995492, 41.6686109 ], [ -86.4996032, 41.6686105 ], [ -86.4996442, 41.6685864 ], [ -86.4996819, 41.6685527 ], [ -86.4997228, 41.6685215 ], [ -86.499774, 41.6685473 ], [ -86.4997902, 41.6685734 ], [ -86.4998378, 41.6685707 ], [ -86.4999011, 41.6685464 ], [ -86.4999645, 41.6685364 ], [ -86.500025, 41.6685479 ], [ -86.5000538, 41.668562 ], [ -86.5000862, 41.6686118 ], [ -86.5000993, 41.668645 ], [ -86.5001281, 41.6686639 ], [ -86.5001757, 41.6686587 ], [ -86.500299, 41.6686126 ], [ -86.5004097, 41.6685665 ], [ -86.5004855, 41.668535 ], [ -86.5005205, 41.6685395 ], [ -86.5005781, 41.6685724 ], [ -86.5006167, 41.6686055 ], [ -86.5006646, 41.6686242 ], [ -86.5007123, 41.6686263 ], [ -86.5007566, 41.6686188 ], [ -86.500801, 41.6686066 ], [ -86.5008958, 41.6685678 ], [ -86.5010222, 41.6685192 ], [ -86.5011079, 41.6685114 ], [ -86.5011623, 41.6685396 ], [ -86.5011789, 41.6685967 ], [ -86.5011864, 41.6686871 ], [ -86.5011599, 41.6688446 ], [ -86.5011354, 41.6689162 ], [ -86.5010947, 41.6689642 ], [ -86.50106, 41.6689858 ], [ -86.5010283, 41.6689885 ], [ -86.5009838, 41.6689864 ], [ -86.5009296, 41.6689725 ], [ -86.5008496, 41.6689326 ], [ -86.5007569, 41.6688832 ], [ -86.5006578, 41.6688363 ], [ -86.5005748, 41.6688107 ], [ -86.5005049, 41.6688041 ], [ -86.5003969, 41.6688072 ], [ -86.5003271, 41.6688149 ], [ -86.5002641, 41.6688558 ], [ -86.5002646, 41.6688987 ], [ -86.5002779, 41.6689415 ], [ -86.5003512, 41.66896 ], [ -86.5005135, 41.6689827 ], [ -86.5005772, 41.6689965 ], [ -86.5006539, 41.6690293 ], [ -86.5007694, 41.6691166 ], [ -86.5008787, 41.6692111 ], [ -86.5009756, 41.6693367 ], [ -86.5010087, 41.6694388 ], [ -86.5010257, 41.6695269 ], [ -86.5010106, 41.6695889 ], [ -86.5009539, 41.6696227 ], [ -86.5008743, 41.6696137 ], [ -86.5008073, 41.669588 ], [ -86.5006632, 41.6695057 ], [ -86.5005411, 41.6693994 ], [ -86.5004127, 41.6692931 ], [ -86.5003225, 41.6692008 ], [ -86.5002647, 41.6691536 ], [ -86.5002231, 41.6691301 ], [ -86.5001913, 41.6691279 ], [ -86.500163, 41.6691472 ], [ -86.5001446, 41.6692045 ], [ -86.5001676, 41.6692591 ], [ -86.5002516, 41.6693705 ], [ -86.500361, 41.6694769 ], [ -86.5004742, 41.6696285 ], [ -86.5005678, 41.6697398 ], [ -86.5007188, 41.6698745 ], [ -86.5007669, 41.6699051 ], [ -86.5007957, 41.6699216 ], [ -86.5008338, 41.6699213 ], [ -86.5008811, 41.6698948 ], [ -86.5009252, 41.6698611 ], [ -86.5009974, 41.6697939 ], [ -86.5010575, 41.669772 ], [ -86.5011271, 41.6697524 ], [ -86.5011779, 41.6697473 ], [ -86.5012511, 41.6697563 ], [ -86.501498, 41.6696854 ], [ -86.501498, 41.6696854 ] ], [ [ -86.501498, 41.6696854 ], [ -86.501498, 41.6696854 ], [ -86.5015261, 41.6696519 ], [ -86.5015599, 41.6695587 ], [ -86.5015922, 41.669356 ], [ -86.5016189, 41.6692081 ], [ -86.5016271, 41.6691032 ], [ -86.5016209, 41.6688746 ], [ -86.5016421, 41.668791 ], [ -86.5016603, 41.6687266 ], [ -86.5017073, 41.6686715 ], [ -86.5017923, 41.668616 ], [ -86.5019253, 41.668577 ], [ -86.5021689, 41.6684966 ], [ -86.5024187, 41.668409 ], [ -86.5025608, 41.6683389 ], [ -86.5026077, 41.6682766 ], [ -86.5026734, 41.6681999 ], [ -86.5027423, 41.6681279 ], [ -86.5028236, 41.6680225 ], [ -86.5028731, 41.6679221 ], [ -86.5029086, 41.667717 ], [ -86.5028974, 41.6675908 ], [ -86.5028765, 41.6674456 ], [ -86.5027972, 41.6672127 ], [ -86.5027444, 41.6670583 ], [ -86.5027041, 41.6668894 ], [ -86.5026873, 41.6668181 ], [ -86.5026852, 41.6666585 ], [ -86.5026963, 41.6665321 ], [ -86.5027468, 41.6662602 ], [ -86.5028378, 41.6659284 ], [ -86.5029032, 41.6655801 ], [ -86.5029305, 41.6654846 ], [ -86.5029741, 41.6654105 ], [ -86.5030748, 41.6653406 ], [ -86.5032425, 41.6652846 ], [ -86.5033723, 41.6652503 ], [ -86.5037779, 41.6651711 ], [ -86.5039236, 41.6651343 ], [ -86.5039804, 41.6651101 ], [ -86.504044, 41.665112 ], [ -86.5045346, 41.6652133 ], [ -86.5045632, 41.6652131 ], [ -86.5045792, 41.6652225 ], [ -86.5045446, 41.6652537 ], [ -86.5045293, 41.6652943 ], [ -86.5045265, 41.6653253 ], [ -86.5044791, 41.6653471 ], [ -86.5043744, 41.6653598 ], [ -86.5042696, 41.6653581 ], [ -86.50419, 41.6653444 ], [ -86.504123, 41.6653235 ], [ -86.504024, 41.6652837 ], [ -86.5039312, 41.6652367 ], [ -86.5038834, 41.6652252 ], [ -86.5038169, 41.6652399 ], [ -86.5037729, 41.6652784 ], [ -86.5037322, 41.6653192 ], [ -86.503707, 41.6653408 ], [ -86.5036564, 41.6653531 ], [ -86.5035863, 41.6653441 ], [ -86.5035131, 41.6653327 ], [ -86.5034399, 41.6653237 ], [ -86.5033479, 41.6653267 ], [ -86.5032781, 41.6653415 ], [ -86.5031929, 41.6653803 ], [ -86.5031333, 41.6654403 ], [ -86.5030929, 41.665512 ], [ -86.5030591, 41.665598 ], [ -86.5030443, 41.6656815 ], [ -86.5030277, 41.6658722 ], [ -86.5030126, 41.6661773 ], [ -86.5029322, 41.6668401 ], [ -86.5029225, 41.6670713 ], [ -86.5029238, 41.6671713 ], [ -86.5029356, 41.6673451 ], [ -86.5029613, 41.6676189 ], [ -86.5029669, 41.6678023 ], [ -86.502959, 41.6679262 ], [ -86.5029475, 41.6680192 ], [ -86.50292, 41.6681099 ], [ -86.5028829, 41.6681841 ], [ -86.5028265, 41.668244 ], [ -86.5027385, 41.6683209 ], [ -86.5026881, 41.6683546 ], [ -86.5026535, 41.6683835 ], [ -86.5026379, 41.6684074 ], [ -86.5026578, 41.6684716 ], [ -86.5026582, 41.6685002 ], [ -86.50263, 41.6685337 ], [ -86.5025796, 41.6685603 ], [ -86.5025257, 41.668575 ], [ -86.5024305, 41.668578 ], [ -86.5023129, 41.6685765 ], [ -86.5022493, 41.6685722 ], [ -86.5021794, 41.6685703 ], [ -86.5021065, 41.6685852 ], [ -86.5020528, 41.6686141 ], [ -86.5019962, 41.6686598 ], [ -86.5019335, 41.6687222 ], [ -86.5018772, 41.6687917 ], [ -86.5018431, 41.6688563 ], [ -86.5018248, 41.6689136 ], [ -86.5018225, 41.6689803 ], [ -86.5018124, 41.669433 ], [ -86.5018102, 41.6695093 ], [ -86.5018024, 41.6696403 ], [ -86.501807, 41.6699976 ], [ -86.5018113, 41.670081 ], [ -86.5017995, 41.6701502 ], [ -86.5017878, 41.6702289 ], [ -86.5017479, 41.6703411 ], [ -86.501662, 41.6705776 ], [ -86.5016319, 41.6707017 ], [ -86.5016144, 41.6708257 ], [ -86.5016193, 41.6709591 ], [ -86.5016281, 41.6711496 ], [ -86.5016389, 41.6712495 ], [ -86.5016463, 41.6713305 ], [ -86.5016376, 41.6713949 ], [ -86.5016222, 41.6714331 ], [ -86.5015915, 41.6715167 ], [ -86.5015198, 41.671622 ], [ -86.5014539, 41.6716868 ], [ -86.5013847, 41.671735 ], [ -86.5013341, 41.6717592 ], [ -86.5012836, 41.671781 ], [ -86.5012233, 41.6717838 ], [ -86.5011563, 41.6717629 ], [ -86.5011017, 41.6717228 ], [ -86.5010537, 41.6716945 ], [ -86.5010537, 41.6716921 ] ], [ [ -86.5010537, 41.6716922 ], [ -86.5007949, 41.6715844 ], [ -86.5007344, 41.671573 ], [ -86.5006708, 41.6715687 ], [ -86.500569, 41.6715599 ], [ -86.5003911, 41.6715635 ], [ -86.5001752, 41.6715723 ], [ -86.4999972, 41.6715664 ], [ -86.4997872, 41.6715465 ], [ -86.4996981, 41.6715304 ], [ -86.4996756, 41.6715116 ], [ -86.4996814, 41.6714734 ], [ -86.4997347, 41.6714158 ], [ -86.4998008, 41.6713701 ], [ -86.4998513, 41.6713411 ], [ -86.499921, 41.671324 ], [ -86.4999622, 41.6713141 ], [ -86.4999842, 41.6712949 ], [ -86.4999869, 41.6712615 ], [ -86.5000055, 41.6712257 ], [ -86.5000402, 41.6712064 ], [ -86.5000909, 41.6711941 ], [ -86.5001546, 41.6712079 ], [ -86.5002058, 41.6712361 ], [ -86.5002571, 41.6712691 ], [ -86.5002862, 41.6713142 ], [ -86.5003092, 41.6713664 ], [ -86.5003384, 41.6714162 ], [ -86.5003929, 41.6714563 ], [ -86.5004441, 41.6714798 ], [ -86.5004951, 41.6714913 ], [ -86.500533, 41.6714767 ], [ -86.5005739, 41.6714431 ], [ -86.5005985, 41.6713857 ], [ -86.5006358, 41.6713164 ], [ -86.5006668, 41.6712614 ], [ -86.5007076, 41.6712182 ], [ -86.5008172, 41.6710959 ], [ -86.5009425, 41.6709592 ], [ -86.5010676, 41.6708058 ], [ -86.5011111, 41.6707269 ], [ -86.50112, 41.6706744 ], [ -86.5011004, 41.6706365 ], [ -86.5010684, 41.67062 ], [ -86.5010208, 41.6706204 ], [ -86.5009891, 41.6706301 ], [ -86.5009768, 41.6706588 ], [ -86.5009838, 41.6707112 ], [ -86.5009558, 41.6707566 ], [ -86.5009467, 41.6707877 ], [ -86.5009473, 41.6708353 ], [ -86.5009414, 41.6708735 ], [ -86.5009259, 41.6708974 ], [ -86.5008913, 41.670931 ], [ -86.5007841, 41.6709937 ], [ -86.5007339, 41.6710417 ], [ -86.5006998, 41.6711039 ], [ -86.5006717, 41.6711494 ], [ -86.5006373, 41.6711854 ], [ -86.5005836, 41.6712096 ], [ -86.5005361, 41.6712266 ], [ -86.5004759, 41.6712342 ], [ -86.5004533, 41.6712129 ], [ -86.5004592, 41.6711724 ], [ -86.5004776, 41.6711198 ], [ -86.500493, 41.6710887 ], [ -86.500515, 41.6710647 ], [ -86.5006418, 41.6710424 ], [ -86.5006765, 41.6710255 ], [ -86.5007013, 41.67098 ], [ -86.5007625, 41.6707938 ], [ -86.500762, 41.670758 ], [ -86.5007426, 41.6707343 ], [ -86.5005374, 41.6705834 ], [ -86.5004991, 41.6705741 ], [ -86.500474, 41.6705957 ], [ -86.5004488, 41.6706126 ], [ -86.5004172, 41.6706271 ], [ -86.5003601, 41.6706371 ], [ -86.5003191, 41.6706564 ], [ -86.5002911, 41.6707067 ], [ -86.5002729, 41.6707806 ], [ -86.5002385, 41.6708119 ], [ -86.5001975, 41.6708455 ], [ -86.5001375, 41.6708698 ], [ -86.5001219, 41.6708913 ], [ -86.5001192, 41.6709271 ], [ -86.5001643, 41.670972 ], [ -86.5002, 41.6710289 ], [ -86.5002259, 41.6710716 ], [ -86.5002328, 41.6711097 ], [ -86.5002268, 41.6711359 ], [ -86.5002046, 41.6711408 ], [ -86.5001694, 41.671122 ], [ -86.5001305, 41.6710628 ], [ -86.5000434, 41.6709586 ], [ -86.4999468, 41.6708592 ], [ -86.499886, 41.6708287 ], [ -86.4998284, 41.6707981 ], [ -86.4997805, 41.6707771 ], [ -86.4997641, 41.6707414 ], [ -86.4997538, 41.670682 ], [ -86.4997784, 41.6706127 ], [ -86.4997872, 41.6705555 ], [ -86.49978, 41.6704888 ], [ -86.4997441, 41.6704152 ], [ -86.49965, 41.6702658 ], [ -86.4996303, 41.6702159 ], [ -86.4996264, 41.6701588 ], [ -86.4996573, 41.6700919 ], [ -86.4996914, 41.6700273 ], [ -86.4997284, 41.6699389 ], [ -86.4997715, 41.6698337 ], [ -86.4998183, 41.6697643 ], [ -86.4998717, 41.6697163 ], [ -86.4999505, 41.6696681 ], [ -86.5000456, 41.6696507 ], [ -86.5001505, 41.6696571 ], [ -86.5002271, 41.6696827 ], [ -86.5002816, 41.6697228 ], [ -86.5003331, 41.6697773 ], [ -86.5003725, 41.6698747 ], [ -86.5004087, 41.6699721 ], [ -86.5004475, 41.6700194 ], [ -86.5004448, 41.6700576 ], [ -86.5003633, 41.6701487 ], [ -86.5002855, 41.6702684 ], [ -86.5002733, 41.6703089 ], [ -86.5002737, 41.6703399 ], [ -86.5002995, 41.6703707 ], [ -86.5003408, 41.6703704 ], [ -86.5003947, 41.6703629 ], [ -86.5006006, 41.6703137 ], [ -86.5008919, 41.6702401 ], [ -86.5010217, 41.6702035 ], [ -86.5010976, 41.6701696 ], [ -86.501173, 41.6701071 ], [ -86.5011821, 41.670076 ], [ -86.5010735, 41.6700316 ], [ -86.5010322, 41.6700319 ], [ -86.5009499, 41.6700539 ], [ -86.5008927, 41.6700543 ], [ -86.5008387, 41.6700571 ], [ -86.5007976, 41.6700669 ], [ -86.5007467, 41.6700649 ], [ -86.5006988, 41.6700462 ], [ -86.5006442, 41.6699989 ], [ -86.500531, 41.6698449 ], [ -86.5003867, 41.6697388 ], [ -86.5003027, 41.6696346 ], [ -86.500155, 41.6695117 ], [ -86.5000867, 41.6693955 ], [ -86.4999665, 41.6691867 ], [ -86.4999405, 41.6691393 ], [ -86.4999496, 41.6691059 ], [ -86.4999871, 41.669058 ], [ -86.5000182, 41.6690101 ], [ -86.5000176, 41.6689577 ], [ -86.4999821, 41.6689174 ], [ -86.4999219, 41.6689274 ], [ -86.499894, 41.6689824 ], [ -86.4998385, 41.6691186 ], [ -86.4998078, 41.6691974 ], [ -86.4997796, 41.6692262 ], [ -86.4996975, 41.6692721 ], [ -86.4996856, 41.6693341 ], [ -86.4996764, 41.6693604 ], [ -86.4995853, 41.6694396 ], [ -86.4995537, 41.6694494 ], [ -86.4995091, 41.669445 ], [ -86.4994708, 41.6694309 ], [ -86.4994737, 41.6694071 ], [ -86.4995049, 41.6693592 ], [ -86.4995675, 41.6692921 ], [ -86.4996305, 41.6692464 ], [ -86.4996838, 41.6691936 ], [ -86.4997149, 41.6691362 ], [ -86.4997205, 41.6690813 ], [ -86.4997039, 41.6690267 ], [ -86.4996684, 41.6689816 ], [ -86.4996172, 41.6689582 ], [ -86.4995442, 41.6689611 ], [ -86.4994903, 41.668971 ], [ -86.499405, 41.669005 ], [ -86.4993232, 41.6690699 ], [ -86.4992574, 41.6691395 ], [ -86.4991975, 41.669178 ], [ -86.4990969, 41.6692597 ], [ -86.4990657, 41.6693076 ], [ -86.4990212, 41.6693056 ], [ -86.4989732, 41.6692797 ], [ -86.4989381, 41.6692657 ], [ -86.49894, 41.669168 ], [ -86.4989255, 41.6690228 ], [ -86.4989028, 41.6689872 ], [ -86.4988454, 41.6689709 ], [ -86.4987881, 41.6689642 ], [ -86.4987659, 41.6689715 ], [ -86.4987424, 41.6691194 ], [ -86.4987268, 41.6691409 ], [ -86.4986824, 41.6691436 ], [ -86.4985806, 41.6691372 ], [ -86.4985393, 41.6691375 ], [ -86.4984791, 41.6691499 ], [ -86.4984413, 41.6691716 ], [ -86.4984131, 41.6692028 ], [ -86.4984071, 41.6692314 ], [ -86.4984265, 41.6692551 ], [ -86.4984902, 41.6692713 ], [ -86.4985731, 41.6692921 ], [ -86.4986498, 41.6693249 ], [ -86.498682, 41.6693628 ], [ -86.4986985, 41.6694056 ], [ -86.4987147, 41.6694317 ], [ -86.4989927, 41.6695559 ], [ -86.4990658, 41.6695578 ], [ -86.4991707, 41.6695594 ], [ -86.4992185, 41.6695733 ], [ -86.4992506, 41.6696017 ], [ -86.499283, 41.6696443 ], [ -86.4993244, 41.6696583 ], [ -86.4994705, 41.6696549 ], [ -86.4996759, 41.6695676 ], [ -86.4997141, 41.6695721 ], [ -86.4997493, 41.6695933 ], [ -86.4997689, 41.6696289 ], [ -86.499766, 41.6696527 ], [ -86.4997475, 41.6696958 ], [ -86.4996971, 41.6697342 ], [ -86.4995713, 41.6698281 ], [ -86.4994926, 41.6698906 ], [ -86.4994357, 41.6699076 ], [ -86.4993817, 41.6699104 ], [ -86.4993433, 41.6698916 ], [ -86.4993174, 41.6698513 ], [ -86.4993202, 41.6698251 ], [ -86.4993867, 41.6698056 ], [ -86.4994373, 41.6697885 ], [ -86.4994369, 41.6697599 ], [ -86.4994079, 41.6697244 ], [ -86.4993697, 41.6697175 ], [ -86.4988155, 41.6698574 ], [ -86.4987871, 41.6698766 ], [ -86.4987811, 41.6699029 ], [ -86.4988103, 41.6699479 ], [ -86.4988457, 41.6699834 ], [ -86.4989032, 41.6700044 ], [ -86.4989763, 41.6700134 ], [ -86.4990527, 41.6700248 ], [ -86.4991133, 41.6700386 ], [ -86.4992666, 41.6700995 ], [ -86.4993591, 41.6701274 ], [ -86.4994421, 41.6701601 ], [ -86.4994775, 41.6701956 ], [ -86.4994944, 41.6702765 ], [ -86.4995603, 41.6704594 ], [ -86.4995897, 41.6705188 ], [ -86.4995805, 41.6705427 ], [ -86.4995554, 41.6705714 ], [ -86.4990837, 41.6706987 ], [ -86.4990393, 41.6707062 ], [ -86.4989977, 41.6706851 ], [ -86.4989558, 41.6706353 ], [ -86.4989169, 41.6705808 ], [ -86.4989066, 41.670519 ], [ -86.4989054, 41.6704284 ], [ -86.4989143, 41.6703783 ], [ -86.4989105, 41.6703283 ], [ -86.4988655, 41.6702906 ], [ -86.4988047, 41.6702553 ], [ -86.4987441, 41.670239 ], [ -86.4986742, 41.6702348 ], [ -86.498611, 41.6702638 ], [ -86.4985671, 41.6703094 ], [ -86.4985487, 41.6703596 ], [ -86.498559, 41.6704167 ], [ -86.4985914, 41.6704688 ], [ -86.4986461, 41.6705185 ], [ -86.4987005, 41.6705514 ], [ -86.4987008, 41.6705776 ], [ -86.4986602, 41.6706279 ], [ -86.4986292, 41.6706877 ], [ -86.4985947, 41.6707237 ], [ -86.4985597, 41.670724 ], [ -86.4985277, 41.6707051 ], [ -86.4985018, 41.6706624 ], [ -86.4984819, 41.6706006 ], [ -86.4984653, 41.6705412 ], [ -86.4984456, 41.6704961 ], [ -86.498404, 41.6704726 ], [ -86.4983658, 41.6704633 ], [ -86.4983247, 41.6704851 ], [ -86.4983282, 41.6705112 ], [ -86.4983479, 41.6705564 ], [ -86.4983963, 41.6706108 ], [ -86.4984708, 41.6707246 ], [ -86.4984938, 41.670784 ], [ -86.4985198, 41.6708267 ], [ -86.4985455, 41.6708527 ], [ -86.498587, 41.6708691 ], [ -86.4986285, 41.6708783 ], [ -86.4986888, 41.6708803 ], [ -86.4988094, 41.6708651 ], [ -86.4989078, 41.6708596 ], [ -86.4990349, 41.6708587 ], [ -86.4992478, 41.6708643 ], [ -86.4994671, 41.6708699 ], [ -86.49955, 41.6708859 ], [ -86.4996457, 41.670921 ], [ -86.4997067, 41.6709682 ], [ -86.4997618, 41.6710488 ], [ -86.4997882, 41.671132 ], [ -86.4997858, 41.6711915 ], [ -86.4997581, 41.6712608 ], [ -86.4997208, 41.6713206 ], [ -86.4996546, 41.6713664 ], [ -86.4996013, 41.6714192 ], [ -86.499586, 41.6714598 ], [ -86.4995803, 41.671517 ], [ -86.4995746, 41.6715647 ], [ -86.4995367, 41.6715816 ], [ -86.4994699, 41.6715797 ], [ -86.4993965, 41.6715517 ], [ -86.4993454, 41.671533 ], [ -86.4992881, 41.6715263 ], [ -86.499193, 41.6715389 ], [ -86.4991107, 41.6715609 ], [ -86.4990346, 41.6715758 ], [ -86.4989552, 41.6715811 ], [ -86.498847, 41.6715628 ], [ -86.4987767, 41.6715347 ], [ -86.4987094, 41.6714923 ], [ -86.4986421, 41.6714428 ], [ -86.4986353, 41.6714095 ], [ -86.4986668, 41.6713878 ], [ -86.4987145, 41.6713923 ], [ -86.4987625, 41.6714157 ], [ -86.4987975, 41.671425 ], [ -86.4988293, 41.6714248 ], [ -86.4988608, 41.6714055 ], [ -86.4988858, 41.671372 ], [ -86.4989458, 41.6713382 ], [ -86.499009, 41.6713139 ], [ -86.4990564, 41.6712969 ], [ -86.4990911, 41.6712752 ], [ -86.4991033, 41.6712394 ], [ -86.4990709, 41.6711848 ], [ -86.4990099, 41.6711352 ], [ -86.4989523, 41.6711047 ], [ -86.4987328, 41.6710872 ], [ -86.4986217, 41.6710904 ], [ -86.4985167, 41.6710816 ], [ -86.498421, 41.6710561 ], [ -86.4983603, 41.671028 ], [ -86.4982896, 41.6709665 ], [ -86.4982569, 41.6708929 ], [ -86.4982401, 41.6708192 ], [ -86.4982421, 41.6707263 ], [ -86.4982602, 41.670657 ], [ -86.4982752, 41.6705855 ], [ -86.4982683, 41.6705474 ], [ -86.4982329, 41.6705072 ], [ -86.4981817, 41.6704813 ], [ -86.4981339, 41.6704698 ], [ -86.4980992, 41.6704867 ], [ -86.4980901, 41.6705249 ], [ -86.4981006, 41.670601 ], [ -86.4981496, 41.6707055 ], [ -86.4981742, 41.670884 ], [ -86.4981749, 41.6709411 ], [ -86.498156, 41.6709556 ], [ -86.4981243, 41.6709606 ], [ -86.497994, 41.670952 ], [ -86.4979492, 41.6709333 ], [ -86.4978946, 41.6708836 ], [ -86.4978047, 41.6708104 ], [ -86.497769, 41.6707535 ], [ -86.4977684, 41.6707082 ], [ -86.4978285, 41.6706888 ], [ -86.497863, 41.6706528 ], [ -86.4978723, 41.6706336 ], [ -86.4978308, 41.6706197 ], [ -86.4977926, 41.6706152 ], [ -86.4977132, 41.6706181 ], [ -86.4976274, 41.6706116 ], [ -86.4975925, 41.6706166 ], [ -86.4975293, 41.670648 ], [ -86.4974976, 41.670653 ], [ -86.4974466, 41.6706391 ], [ -86.4973862, 41.6706348 ], [ -86.4972054, 41.6706575 ], [ -86.4970596, 41.6706824 ], [ -86.497034, 41.6706754 ], [ -86.4969958, 41.6706638 ], [ -86.4969637, 41.6706402 ], [ -86.4969001, 41.6706383 ], [ -86.4968304, 41.6706531 ], [ -86.4967767, 41.6706749 ], [ -86.4967229, 41.6706944 ], [ -86.4966659, 41.6707043 ], [ -86.4966055, 41.6707024 ], [ -86.4965575, 41.6706765 ], [ -86.4965444, 41.6706456 ], [ -86.4965121, 41.6706101 ], [ -86.4964484, 41.6705915 ], [ -86.4963596, 41.6706088 ], [ -86.4962581, 41.6706239 ], [ -86.4961946, 41.6706267 ], [ -86.4959971, 41.6705853 ], [ -86.495943, 41.6705809 ], [ -86.4958703, 41.6706052 ], [ -86.4957883, 41.6706511 ], [ -86.4957253, 41.6706944 ], [ -86.4956619, 41.6707092 ], [ -86.4955826, 41.6707169 ], [ -86.495558, 41.670779 ], [ -86.495552, 41.67081 ], [ -86.4955776, 41.6708265 ], [ -86.4956318, 41.6708356 ], [ -86.4958541, 41.6708269 ], [ -86.4959839, 41.6707974 ], [ -86.4961263, 41.6707463 ], [ -86.4962306, 41.6707027 ], [ -86.496313, 41.6706878 ], [ -86.4963861, 41.670692 ], [ -86.4964275, 41.6706989 ], [ -86.496409, 41.6707467 ], [ -86.4963618, 41.6707756 ], [ -86.4962731, 41.6708 ], [ -86.496175, 41.670827 ], [ -86.4961213, 41.6708535 ], [ -86.4960677, 41.6708897 ], [ -86.4959955, 41.6709521 ], [ -86.4958024, 41.6710131 ], [ -86.4957485, 41.6710159 ], [ -86.4956561, 41.6710022 ], [ -86.4954333, 41.6709705 ], [ -86.4953793, 41.6709709 ], [ -86.4953318, 41.6709784 ], [ -86.495218, 41.6710244 ], [ -86.4952056, 41.6710531 ], [ -86.4952313, 41.6710744 ], [ -86.4953491, 41.6710926 ], [ -86.4954445, 41.6711014 ], [ -86.4957999, 41.6710631 ], [ -86.4959837, 41.6710261 ], [ -86.4962054, 41.6709721 ], [ -86.4962688, 41.6709621 ], [ -86.4966723, 41.6709568 ], [ -86.4968533, 41.6709531 ], [ -86.4968976, 41.6709361 ], [ -86.4969385, 41.6709072 ], [ -86.4969731, 41.6708808 ], [ -86.4970363, 41.6708541 ], [ -86.4972642, 41.6707857 ], [ -86.4973371, 41.6707733 ], [ -86.4973786, 41.6707849 ], [ -86.4974299, 41.6708227 ], [ -86.4975548, 41.670898 ], [ -86.4975649, 41.6709456 ], [ -86.4975529, 41.6709981 ], [ -86.4975375, 41.6710315 ], [ -86.4975283, 41.6710602 ], [ -86.4975286, 41.6710864 ], [ -86.4975733, 41.6711051 ], [ -86.4976496, 41.6711046 ], [ -86.4979998, 41.6711592 ], [ -86.4980382, 41.6711804 ], [ -86.498109, 41.6712537 ], [ -86.4981795, 41.6712961 ], [ -86.4981862, 41.6713222 ], [ -86.49819, 41.6713722 ], [ -86.4981779, 41.67142 ], [ -86.4981693, 41.6714891 ], [ -86.4981602, 41.6715273 ], [ -86.4981162, 41.6715633 ], [ -86.4980594, 41.6715923 ], [ -86.4980118, 41.6715974 ], [ -86.4979512, 41.6715788 ], [ -86.4978807, 41.6715365 ], [ -86.4978298, 41.6715249 ], [ -86.4977916, 41.6715204 ], [ -86.4977314, 41.6715328 ], [ -86.4976745, 41.6715618 ], [ -86.4976365, 41.6715668 ], [ -86.4975855, 41.6715577 ], [ -86.4975505, 41.6715484 ], [ -86.4974013, 41.671559 ], [ -86.4973474, 41.6715689 ], [ -86.4973027, 41.6715573 ], [ -86.4972737, 41.6715242 ], [ -86.4972734, 41.671498 ], [ -86.4973145, 41.671481 ], [ -86.497346, 41.6714641 ], [ -86.49739, 41.671428 ], [ -86.4977357, 41.6713779 ], [ -86.4979299, 41.6714098 ], [ -86.4979649, 41.671412 ], [ -86.4980347, 41.6714019 ], [ -86.4980471, 41.6713804 ], [ -86.498034, 41.6713495 ], [ -86.4979892, 41.671326 ], [ -86.4979382, 41.6713097 ], [ -86.4978842, 41.6713077 ], [ -86.4974907, 41.6713463 ], [ -86.4974367, 41.6713467 ], [ -86.4973477, 41.6713497 ], [ -86.4972811, 41.6713597 ], [ -86.4972368, 41.6713744 ], [ -86.4971707, 41.6714177 ], [ -86.497136, 41.6714394 ], [ -86.4970822, 41.6714565 ], [ -86.497025, 41.6714569 ], [ -86.4969487, 41.6714479 ], [ -86.496866, 41.6714461 ], [ -86.4967962, 41.6714538 ], [ -86.4967489, 41.6714803 ], [ -86.4966291, 41.671555 ], [ -86.4965785, 41.6715697 ], [ -86.4965181, 41.6715701 ], [ -86.4964453, 41.6715873 ], [ -86.496207, 41.671589 ] ], [ [ -86.494174, 41.670272 ], [ -86.494085, 41.6702679 ], [ -86.4939831, 41.6702495 ], [ -86.4938939, 41.6702311 ], [ -86.4938746, 41.670217 ], [ -86.4937107, 41.6703182 ], [ -86.4935469, 41.670429 ], [ -86.4933448, 41.6705257 ], [ -86.4932631, 41.670593 ], [ -86.4932131, 41.6706648 ], [ -86.4931948, 41.6707174 ], [ -86.4931761, 41.6707461 ], [ -86.4932411, 41.6708647 ], [ -86.4931659, 41.6709463 ], [ -86.4931539, 41.6710035 ], [ -86.4931998, 41.6711128 ], [ -86.493207, 41.6711747 ], [ -86.493214, 41.671227 ], [ -86.4931955, 41.6712701 ], [ -86.4931453, 41.6713181 ], [ -86.4930885, 41.6713518 ], [ -86.4931843, 41.671394 ], [ -86.493267, 41.6713982 ], [ -86.4933557, 41.6713785 ], [ -86.4934511, 41.6713826 ], [ -86.493591, 41.6713911 ], [ -86.4937498, 41.6713852 ], [ -86.4938703, 41.6713653 ], [ -86.4940037, 41.6713643 ], [ -86.4941118, 41.671373 ], [ -86.4942011, 41.6713962 ], [ -86.4943282, 41.6713953 ], [ -86.4943594, 41.6713522 ], [ -86.4943587, 41.671295 ], [ -86.4942816, 41.6712336 ], [ -86.4942054, 41.6712342 ], [ -86.4940658, 41.6712495 ], [ -86.493983, 41.6712358 ], [ -86.4939, 41.6712078 ], [ -86.4937921, 41.6712181 ], [ -86.4936652, 41.6712286 ], [ -86.4936017, 41.6712338 ], [ -86.4935887, 41.6712148 ], [ -86.4936068, 41.6711385 ], [ -86.4935747, 41.6711101 ], [ -86.4934857, 41.6711107 ], [ -86.4933967, 41.6711066 ], [ -86.4933835, 41.6710686 ], [ -86.4933511, 41.6710164 ], [ -86.4934077, 41.6709684 ], [ -86.493503, 41.6709677 ], [ -86.4936238, 41.6709716 ], [ -86.4937703, 41.6709991 ], [ -86.4936932, 41.670933 ], [ -86.4935909, 41.670886 ], [ -86.4935076, 41.6708295 ], [ -86.4934876, 41.6707629 ], [ -86.493544, 41.6706958 ], [ -86.493575, 41.6706384 ], [ -86.493677, 41.6706615 ], [ -86.4937601, 41.6707038 ], [ -86.4938053, 41.6707606 ], [ -86.4938315, 41.6708176 ], [ -86.4938389, 41.6708986 ], [ -86.4939275, 41.6708741 ], [ -86.4939965, 41.6708021 ], [ -86.4942349, 41.6705622 ], [ -86.494133, 41.6705439 ], [ -86.4940451, 41.6706303 ], [ -86.4939949, 41.6706783 ], [ -86.4939124, 41.6706884 ], [ -86.493836, 41.6706746 ], [ -86.4938229, 41.6706462 ], [ -86.4938602, 41.6705792 ], [ -86.4939041, 41.670536 ], [ -86.4941505, 41.6704199 ], [ -86.4942782, 41.6704714 ], [ -86.4943357, 41.6704948 ], [ -86.4943361, 41.6705233 ], [ -86.494299, 41.6706046 ], [ -86.4942619, 41.6706859 ], [ -86.4942312, 41.6707719 ], [ -86.4941937, 41.6708198 ], [ -86.4940991, 41.6708729 ], [ -86.4940236, 41.6709353 ], [ -86.4939989, 41.6709927 ], [ -86.4940123, 41.671045 ], [ -86.4940445, 41.6710734 ], [ -86.4941083, 41.6710967 ], [ -86.4941652, 41.6710773 ], [ -86.4941964, 41.6710294 ], [ -86.4942019, 41.6709626 ], [ -86.494258, 41.6708765 ], [ -86.4943523, 41.6707996 ], [ -86.4944725, 41.6707558 ], [ -86.4945041, 41.6707461 ], [ -86.4944605, 41.6708131 ], [ -86.4944107, 41.6708897 ], [ -86.494386, 41.670947 ], [ -86.4943864, 41.6709804 ], [ -86.494406, 41.6710231 ], [ -86.4944253, 41.6710373 ], [ -86.4944827, 41.6710559 ], [ -86.4945592, 41.6710744 ], [ -86.4945976, 41.6710932 ], [ -86.4946107, 41.6711241 ], [ -86.4945822, 41.6711314 ], [ -86.4945152, 41.6711152 ], [ -86.4944929, 41.6711059 ], [ -86.4945384, 41.6711842 ], [ -86.4945771, 41.6712291 ], [ -86.4946346, 41.6712549 ], [ -86.4947236, 41.6712614 ], [ -86.4947872, 41.671261 ], [ -86.4948795, 41.6712746 ], [ -86.4949465, 41.6713003 ], [ -86.4949628, 41.6713336 ], [ -86.4949726, 41.6713525 ], [ -86.4949508, 41.6713837 ], [ -86.4949064, 41.6713888 ], [ -86.4948393, 41.6713654 ], [ -86.4947946, 41.6713419 ], [ -86.4947371, 41.6713233 ], [ -86.4946517, 41.6713477 ], [ -86.4945853, 41.6713744 ], [ -86.4945064, 41.6714178 ], [ -86.4944368, 41.6714422 ], [ -86.4943734, 41.6714545 ], [ -86.4942876, 41.6714552 ], [ -86.494208, 41.6714414 ], [ -86.4941348, 41.6714277 ], [ -86.4940871, 41.671428 ], [ -86.4940141, 41.6714333 ], [ -86.4939318, 41.671453 ], [ -86.4938589, 41.6714702 ], [ -86.4937763, 41.6714707 ], [ -86.4937064, 41.6714665 ], [ -86.4936141, 41.6714552 ], [ -86.4934963, 41.6714394 ], [ -86.49342, 41.6714352 ], [ -86.493347, 41.6714405 ], [ -86.4932613, 41.6714482 ], [ -86.4931948, 41.6714654 ], [ -86.4931378, 41.6714777 ], [ -86.4930805, 41.6714686 ], [ -86.4930547, 41.671445 ], [ -86.4930287, 41.6713975 ], [ -86.4930213, 41.6713142 ], [ -86.49301, 41.6711785 ], [ -86.4930001, 41.6711452 ], [ -86.4929872, 41.6711334 ], [ -86.4929617, 41.671124 ], [ -86.4929045, 41.6711268 ], [ -86.4928631, 41.6711152 ], [ -86.4928341, 41.6710845 ], [ -86.4928177, 41.6710488 ], [ -86.4927889, 41.6710324 ], [ -86.4927318, 41.6710375 ], [ -86.4926367, 41.6710549 ], [ -86.4925605, 41.6710626 ], [ -86.492516, 41.6710582 ], [ -86.4924933, 41.6710226 ], [ -86.4924769, 41.6709822 ], [ -86.4924541, 41.6709347 ], [ -86.4924819, 41.6708773 ], [ -86.492513, 41.6708247 ], [ -86.4926336, 41.6708119 ], [ -86.4926719, 41.6708236 ], [ -86.4926914, 41.6708568 ], [ -86.4927267, 41.6708851 ], [ -86.4927649, 41.6708944 ], [ -86.4929395, 41.6708788 ], [ -86.4929742, 41.6708595 ], [ -86.492993, 41.6708379 ], [ -86.4929989, 41.6708022 ], [ -86.4929841, 41.6706403 ], [ -86.4929837, 41.6706141 ], [ -86.4930297, 41.670478 ], [ -86.4930538, 41.6703753 ], [ -86.4930756, 41.6703466 ], [ -86.4931105, 41.6703368 ], [ -86.4931456, 41.6703556 ], [ -86.4931652, 41.6703936 ], [ -86.4931781, 41.6704054 ], [ -86.4932004, 41.6704124 ], [ -86.4932419, 41.6704264 ], [ -86.4932863, 41.6704189 ], [ -86.4933273, 41.6703996 ], [ -86.4933903, 41.6703539 ], [ -86.4934849, 41.6703008 ], [ -86.4935163, 41.6702696 ], [ -86.4935476, 41.670236 ], [ -86.493544, 41.6702003 ], [ -86.4934986, 41.6701315 ], [ -86.4934502, 41.6700676 ], [ -86.4933895, 41.6700442 ], [ -86.4933164, 41.6700447 ], [ -86.4932689, 41.670057 ], [ -86.493168, 41.6701125 ], [ -86.4930382, 41.6701539 ], [ -86.4928737, 41.6702123 ], [ -86.4927883, 41.6702391 ], [ -86.4927249, 41.6702514 ], [ -86.4926709, 41.6702518 ], [ -86.4926171, 41.6702641 ], [ -86.4924812, 41.6703247 ], [ -86.4922761, 41.6704381 ], [ -86.49197, 41.6705952 ], [ -86.491983, 41.6706236 ], [ -86.4920408, 41.6706661 ], [ -86.492092, 41.6706943 ], [ -86.492111, 41.6706918 ], [ -86.4921769, 41.6706246 ], [ -86.4921956, 41.6706031 ], [ -86.4922497, 41.6706027 ], [ -86.4923038, 41.6706166 ], [ -86.492355, 41.6706448 ], [ -86.4923743, 41.6706613 ], [ -86.4923842, 41.6706898 ], [ -86.4923655, 41.670721 ], [ -86.492334, 41.6707402 ], [ -86.4922832, 41.6707454 ], [ -86.4922325, 41.6707505 ], [ -86.4922105, 41.6707673 ], [ -86.4921981, 41.670796 ], [ -86.4921731, 41.6708272 ], [ -86.4921064, 41.67083 ], [ -86.4920619, 41.670828 ], [ -86.4920048, 41.6708379 ], [ -86.491967, 41.670862 ], [ -86.4919169, 41.6709219 ], [ -86.4918792, 41.6709531 ], [ -86.491851, 41.6709843 ], [ -86.4918264, 41.6710488 ], [ -86.49174, 41.6712472 ], [ -86.4917211, 41.671264 ], [ -86.4916835, 41.6713 ], [ -86.4915102, 41.6714132 ], [ -86.4914534, 41.6714469 ], [ -86.4914284, 41.6714805 ], [ -86.4914128, 41.6715044 ], [ -86.4914194, 41.6715234 ], [ -86.4914355, 41.6715376 ], [ -86.491461, 41.6715446 ], [ -86.4915118, 41.671537 ], [ -86.4915685, 41.6715033 ], [ -86.4916252, 41.6714648 ], [ -86.491663, 41.6714407 ], [ -86.4916915, 41.6714286 ], [ -86.4917391, 41.6714258 ], [ -86.491895, 41.671439 ], [ -86.4919619, 41.6714552 ], [ -86.4921246, 41.6715088 ], [ -86.4921854, 41.6715417 ], [ -86.49223, 41.6715509 ], [ -86.4923411, 41.671543 ], [ -86.4924363, 41.6715376 ], [ -86.4924709, 41.6715087 ], [ -86.4924833, 41.6714848 ], [ -86.4924669, 41.6714444 ], [ -86.4924411, 41.6714089 ], [ -86.4923772, 41.6713808 ], [ -86.4922528, 41.6713459 ], [ -86.4921157, 41.6713064 ], [ -86.4919978, 41.671281 ], [ -86.4919594, 41.6712575 ], [ -86.4919527, 41.6712313 ], [ -86.4919619, 41.6712051 ], [ -86.4919965, 41.6711786 ], [ -86.4920249, 41.6711617 ], [ -86.4920724, 41.6711495 ], [ -86.4921231, 41.6711396 ], [ -86.4922151, 41.6711342 ], [ -86.4923613, 41.6711331 ], [ -86.4925395, 41.6711533 ], [ -86.4927498, 41.6711994 ], [ -86.4927818, 41.6712206 ], [ -86.4927921, 41.6712825 ], [ -86.4928359, 41.6714727 ], [ -86.4928522, 41.6715107 ], [ -86.4929005, 41.6715604 ], [ -86.4929519, 41.6716029 ], [ -86.4929839, 41.6716218 ], [ -86.4930253, 41.671631 ], [ -86.4930791, 41.6716116 ], [ -86.4931801, 41.6715608 ], [ -86.4932528, 41.6715293 ], [ -86.4933003, 41.6715171 ], [ -86.4933512, 41.6715215 ], [ -86.4933991, 41.6715378 ], [ -86.4934724, 41.6715587 ], [ -86.4935358, 41.6715463 ], [ -86.493599, 41.6715197 ], [ -86.4936402, 41.6715146 ], [ -86.4937134, 41.6715188 ], [ -86.4937772, 41.6715374 ], [ -86.4938344, 41.6715394 ], [ -86.4938756, 41.6715367 ], [ -86.493939, 41.671522 ], [ -86.4939834, 41.6715145 ], [ -86.4940759, 41.6715401 ], [ -86.4941619, 41.6715633 ], [ -86.4942382, 41.6715675 ], [ -86.4943304, 41.6715668 ], [ -86.4944159, 41.6715495 ], [ -86.4945047, 41.6715298 ], [ -86.4945805, 41.6714959 ], [ -86.4946594, 41.6714549 ], [ -86.4946908, 41.6714308 ], [ -86.4947256, 41.6714186 ], [ -86.4947925, 41.6714253 ], [ -86.4949613, 41.6714598 ], [ -86.4951141, 41.6714849 ], [ -86.4951717, 41.6715155 ], [ -86.4952072, 41.6715557 ], [ -86.4952423, 41.6715722 ], [ -86.4953027, 41.6715693 ], [ -86.4953377, 41.6715762 ], [ -86.4953666, 41.6715998 ], [ -86.4953861, 41.6716354 ], [ -86.4954021, 41.6716425 ], [ -86.4954816, 41.6716514 ], [ -86.4955422, 41.6716629 ], [ -86.4955994, 41.6716673 ], [ -86.496207, 41.6715891 ] ], [ [ -86.494174, 41.670272 ], [ -86.4947122, 41.6703374 ], [ -86.4947554, 41.6703621 ], [ -86.4947947, 41.6703655 ], [ -86.4948681, 41.6703355 ], [ -86.4949365, 41.6703055 ], [ -86.4950102, 41.670305 ], [ -86.4951336, 41.6703373 ], [ -86.4950807, 41.6704298 ], [ -86.495032, 41.670467 ], [ -86.4949633, 41.6704786 ], [ -86.4948517, 41.6704625 ], [ -86.494804, 41.6704581 ], [ -86.4947755, 41.670463 ], [ -86.4947471, 41.6704775 ], [ -86.4947537, 41.6704989 ], [ -86.4947668, 41.6705298 ], [ -86.494802, 41.6705462 ], [ -86.494977, 41.6705688 ], [ -86.4950184, 41.6705733 ], [ -86.4950532, 41.6705611 ], [ -86.4950877, 41.6705299 ], [ -86.4951286, 41.6704986 ], [ -86.4951792, 41.6704768 ], [ -86.4952264, 41.6704431 ], [ -86.4953137, 41.6703162 ], [ -86.4953198, 41.6702971 ], [ -86.4952814, 41.6702736 ], [ -86.4951981, 41.6702218 ], [ -86.4951439, 41.6702079 ], [ -86.49509, 41.6702154 ], [ -86.4950458, 41.6702348 ], [ -86.4950141, 41.6702398 ], [ -86.4949627, 41.6701949 ], [ -86.4949174, 41.6701356 ], [ -86.49493, 41.6701213 ], [ -86.4949869, 41.6701042 ], [ -86.4950852, 41.6700892 ], [ -86.495136, 41.6700864 ], [ -86.4952951, 41.670102 ], [ -86.4953685, 41.67013 ], [ -86.4955188, 41.6702004 ], [ -86.4956147, 41.6702497 ] ] ] } } },
]

export const parkBoundaryData: GeoWithId[] = [
  // ...
]

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
