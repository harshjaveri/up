import { Award, TrendingUp, Zap, Users } from 'lucide-react'
import type {
  NavLink,
  Service,
  ServiceDetailed,
  Stat,
  TimelineEvent,
  Value,
  ProcessStep,
  MediaCategory,
} from '@/types'

// ── Navigation ──
export const navLinks: NavLink[] = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'About' },
  { href: '/media',    label: 'Media' },
  { href: '/services', label: 'Services' },
  { href: '/contact',  label: 'Contact' },
]

// ── Home Page — Services (compact) ──
export const services: Service[] = [
  { icon: '🏗️', title: 'Hoardings',             desc: 'Massive format displays at premium locations across Maharashtra.' },
  { icon: '🚂', title: 'Railway Advertising',    desc: 'Station panels, bridge banners reaching millions daily.' },
  { icon: '🏬', title: 'Mall Advertising',       desc: 'Strategic placements inside Maharashtra\'s top shopping destinations.' },
  { icon: '✈️', title: 'Airport Advertising',    desc: 'Premium exposure to high-value business travellers.' },
  { icon: '🛤️', title: 'Highway Advertising',    desc: 'Unigaze hoardings on NH & SH corridors with maximum dwell time.' },
  { icon: '🏙️', title: 'City Advertising',       desc: 'Bus shelters, kiosks, and city-centre placements.' },
  { icon: '🚉', title: 'Railway Station Ads',    desc: 'Platform banners, concourse displays & FOB hoardings.' },
]

// ── Footer — short service list ──
export const footerServices: string[] = [
  'Hoardings', 'Railway Advertising', 'Mall Advertising',
  'Airport Ads', 'Highway Advertising', 'City Advertising',
]

// ── Home Page — Stats ──
export const stats: Stat[] = [
  { value: '60+',  label: 'Years of Excellence', icon: Award },
  { value: '500+', label: 'Active Displays',      icon: TrendingUp },
  { value: '200+', label: 'Brand Partners',       icon: Zap },
  { value: '18',   label: 'Districts Covered',    icon: Users },
]

// ── Home Page — Brands ──
export const brands: string[] = [
  'Bajaj Auto', 'Mahindra', 'HDFC Bank', 'Tata Motors', 'Reliance',
  'Asian Paints', 'Godrej', 'Cipla', 'Titan', 'Wockhardt',
  'Zydus', 'MRF Tyres', 'Bank of Maharashtra', 'MAHAGENCO', 'TVS Motors',
]

// ── About Page — Timeline ──
export const timeline: TimelineEvent[] = [
  {
    year: '1965',
    title: 'Foundation Year',
    desc: 'Upendra Publicity founded in Aurangabad (now Chhatrapati Sambhajinagar). First hoarding erected at the city\'s prime commercial junction.',
  },
  {
    year: '1978',
    title: 'Regional Expansion',
    desc: 'Extended operations across the Marathwada region. First railway station advertising contract with Indian Railways.',
  },
  {
    year: '1992',
    title: 'State-Wide Reach',
    desc: 'Operations expanded to Pune, Nashik, and Nagpur. Signed first national brand partnerships including automotive and FMCG giants.',
  },
  {
    year: '2003',
    title: 'Infrastructure Upgrade',
    desc: 'Introduced digital-grade backlit hoardings and large-format vinyl printing. First mall advertising partnerships in Aurangabad.',
  },
  {
    year: '2015',
    title: 'Digital Integration',
    desc: 'Launched campaign monitoring dashboards for clients. Airport advertising contracts across Maharashtra\'s tier-2 airports.',
  },
  {
    year: '2025',
    title: 'Modern Maharashtra',
    desc: '500+ active display locations across 18 districts. Trusted by 200+ brands nationally with a full-service outdoor advertising suite.',
  },
]

// ── About Page — Values ──
export const values: Value[] = [
  { icon: '🎯', title: 'Precision Placement', desc: 'Every location selected on verified footfall data and audience demographics.' },
  { icon: '🤝', title: 'Long-term Partnerships', desc: 'We build decades-long relationships, not just campaigns.' },
  { icon: '⚡', title: '24-Hour Execution', desc: 'From brief to live campaign — our turnaround is unmatched in the industry.' },
  { icon: '📊', title: 'Data-Driven Results', desc: 'Every campaign backed by visibility metrics and brand recall data.' },
]

// ── Services Page — Detailed services ──
export const servicesDetailed: ServiceDetailed[] = [
  {
    icon: '🏗️',
    title: 'Hoarding Advertising',
    tag: 'Most Popular',
    desc: 'Our flagship offering — massive 40×20 ft to 60×30 ft unipole and structure hoardings at Maharashtra\'s highest-footfall locations. Illuminated and non-illuminated options available.',
    features: ['Premium backlit vinyl printing', 'Structural fabrication & installation', 'Monthly site verification photos', 'Footfall certification available'],
    locations: '180+ prime hoarding locations',
  },
  {
    icon: '🚂',
    title: 'Railway Advertising',
    desc: 'Capture commuters where they dwell — platforms, waiting areas, concourses, and foot-over bridges. Exclusive contracts across 14 Maharashtra railway stations.',
    features: ['Platform banners & display boards', 'Foot-over bridge hoardings', 'Waiting room display panels', 'Train wrap advertising'],
    locations: '14 railway stations covered',
  },
  {
    icon: '🏬',
    title: 'Mall Advertising',
    desc: 'Indoor advertising at Maharashtra\'s premium shopping destinations. Atrium banners, escalator branding, food court displays, and mall entrance arches.',
    features: ['Atrium & skylight banners', 'Digital screen placements', 'Pillar wraps & floor graphics', 'Entrance arch branding'],
    locations: '8 malls across Maharashtra',
  },
  {
    icon: '✈️',
    title: 'Airport Advertising',
    desc: 'Reach high-value business and leisure travellers at Maharashtra\'s airports. From check-in counters to baggage belts — total coverage for maximum brand recall.',
    features: ['Arrival & departure hall panels', 'Baggage belt advertising', 'Check-in counter branding', 'Boarding gate displays'],
    locations: '4 Maharashtra airports',
  },
  {
    icon: '🛤️',
    title: 'Highway Advertising',
    desc: 'Unigaze hoardings on National Highway and State Highway corridors. Minimum 3-second visibility window guaranteed. Ideal for auto, travel, and lifestyle brands.',
    features: ['NH & SH corridor locations', 'Minimum 3-sec visibility', 'GPS-tagged site data', 'Traffic count reports'],
    locations: '300+ highway km covered',
  },
  {
    icon: '🏙️',
    title: 'City Advertising',
    desc: 'Urban brand touchpoints across city centres, bus shelters, kiosks, and pedestrian-heavy zones. Perfect for retail, FMCG, and service sector campaigns.',
    features: ['Bus shelter back panels', 'City kiosk advertising', 'Junction corner hoardings', 'Pedestrian zone banners'],
    locations: '8 cities across Maharashtra',
  },
  {
    icon: '🚉',
    title: 'Railway Station Ads',
    desc: 'Comprehensive advertising across station premises — from platform edges to enquiry counters. High repeat exposure for commuter-targeted campaigns.',
    features: ['Platform edge boards', 'Enquiry & booking counter boards', 'Station entrance archways', 'Retiring room display panels'],
    locations: '14 stations, 28 formats',
  },
  {
    icon: '🖨️',
    title: 'Hoarding Printing Services',
    tag: 'In-House',
    desc: 'Full in-house large-format printing facility. Vinyl, flex, digital, and canvas options with colour-accurate proofing. 72-hour print-to-install turnaround.',
    features: ['Large-format digital UV printing', 'Backlit vinyl & frontlit flex', 'Solvent & eco-solvent inks', '72-hr turnaround guarantee'],
    locations: 'In-house production unit, Aurangabad',
  },
]

// ── Services Page — Process ──
export const processSteps: ProcessStep[] = [
  { step: '01', title: 'Site Selection', desc: 'We identify locations based on your target audience, geography, and campaign objectives.' },
  { step: '02', title: 'Creative Production', desc: 'Our in-house print facility produces campaign materials with colour-accurate proofing.' },
  { step: '03', title: 'Installation', desc: 'Professional installation team deploys your campaign within the committed timeline.' },
  { step: '04', title: 'Monitoring', desc: 'Regular photo reports and footfall data delivered to your dashboard throughout the campaign.' },
]

// ── Contact Page — Service options for dropdown ──
export const serviceOptions: string[] = [
  'Hoarding Advertising',
  'Railway Advertising',
  'Mall Advertising',
  'Airport Advertising',
  'Highway Advertising',
  'City Advertising',
  'Railway Station Ads',
  'Hoarding Printing',
  'Other / Multiple',
]

// ── Media Page — Categories ──
export const mediaCategories: MediaCategory[] = [
  {
    id: 'hoardings',
    icon: '🏗️',
    title: 'Hoardings',
    count: 48,
    photos: [
      { src: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?w=800', location: 'Jalna Road, Chhatrapati Sambhajinagar' },
      { src: 'https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?w=800', location: 'Beed Bypass Road, Aurangabad' },
      { src: 'https://images.pexels.com/photos/2096700/pexels-photo-2096700.jpeg?w=800', location: 'MIDC Waluj, Aurangabad' },
      { src: 'https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?w=800', location: 'Cantonment Area, Aurangabad' },
    ],
  },
  {
    id: 'railway',
    icon: '🚂',
    title: 'Railway Advertising',
    count: 32,
    photos: [
      { src: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?w=800', location: 'Aurangabad Railway Station, Platform 1' },
      { src: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?w=800', location: 'Manmad Junction Bridge Banner' },
      { src: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?w=800', location: 'Nanded Station Concourse' },
    ],
  },
  {
    id: 'mall',
    icon: '🏬',
    title: 'Mall Advertising',
    count: 24,
    photos: [
      { src: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?w=800', location: 'Prozone Mall, Aurangabad – Atrium' },
      { src: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?w=800', location: 'City Centre, Nashik – Level 2' },
    ],
  },
  {
    id: 'airport',
    icon: '✈️',
    title: 'Airport Advertising',
    count: 18,
    photos: [
      { src: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?w=800', location: 'Aurangabad Airport – Arrival Hall' },
      { src: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?w=800', location: 'Nanded Airport – Check-in Lobby' },
    ],
  },
  {
    id: 'highway',
    icon: '🛤️',
    title: 'Highway Advertising',
    count: 56,
    photos: [
      { src: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?w=800', location: 'NH-52 Pune–Aurangabad Corridor, KM 89' },
      { src: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?w=800', location: 'SH-27 Aurangabad–Jalna, KM 12' },
      { src: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?w=800', location: 'NH-161 Solapur–Aurangabad, KM 34' },
    ],
  },
  {
    id: 'city',
    icon: '🏙️',
    title: 'City Advertising',
    count: 120,
    photos: [
      { src: 'https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?w=800', location: 'Kranti Chowk Bus Shelter, Aurangabad' },
      { src: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?w=800', location: 'City Chowk Kiosk, Aurangabad' },
    ],
  },
  {
    id: 'station',
    icon: '🚉',
    title: 'Railway Station Ads',
    count: 28,
    photos: [
      { src: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?w=800', location: 'Aurangabad Rly Station – Platform Boards' },
      { src: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?w=800', location: 'Latur Station – FOB Banner' },
    ],
  },
]
