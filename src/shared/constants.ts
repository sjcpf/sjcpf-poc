export const appName = 'SJCPF'

export const appDescription = `
${appName} provides information about parks, trails, and events in St. Joseph County.`

export const activities = [
  { name:'biking', label: 'Bike Trails', img: '/images/bike.png' },
  { name:'canoeing', label: 'Canoe Rentals', img: '/images/canoe.png' },
  { name:'discGolf', label: 'Disc Golf', img: '/images/disc.png' },
  { name:'geoCache', label: 'Geocaching', img: '/images/geo.png' },
  { name:'hiking', label: 'Hiking Trails', img: '/images/hike.png' },
  { name:'orienteering', label: 'Orienteering', img: '/images/orient.png' },
  { name:'playGround', label: 'Playgrounds', img: '/images/play.png' },
  { name:'runing', label: 'Running Wild', img: '/images/run.png' }
]

type Activity = {
  title: string;
  image: string;
  phone: string;
  location: string;
  details: string[];
  description: string;
  documents: { label: string; url: string }[];
};

// Mock data loader (replace with API/store later)
export const activityData: Record<string, Activity> = {
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
