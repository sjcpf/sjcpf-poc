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

// Mock data loader (replace with API/store later)
export const activityData = {
  discGolf: {
    title: 'Disc Golf',
    image: '/images/disc.png',
    phone: '574-674-9765',
    locations: 'Bendix Woods County Park',
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
  }
}
