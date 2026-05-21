export const site = {
  name: 'Anushka Shah',
  tagline: 'Actor · Playwright · Poet',
  email: 'hello@anushkashahactor.com',
  locations: ['Los Angeles', 'Washington DC'],
  social: {
    instagram: 'https://instagram.com/',
    linkedin: 'https://linkedin.com/',
  },
} as const

export const homeCopy = {
  greeting: "hi! i'm anushka!",
  intro:
    "I'm a performer, playwright, and poet based in LA and Washington DC, passionate about exploring and exploding the boundaries and intersections of genre and form through my work.",
  cta: 'Explore my work',
} as const

export const aboutCopy = {
  title: 'about me',
  paragraphs: [
    'My work ranges from performance to playwrighting, from direction to dramaturgy. I prioritize collaboration, community building, and culturally responsive critique practices in everything I create while seeking to challenge the notion of who gets to be on stage, and what theater can be.',
    'I graduated with a BFA in Acting from the California Institute of the Arts in 2026. While at CalArts, I also pursued a double minor in Creative Writing and Arts Education. In the past, I have performed at the Hollywood Fringe Festival, Ojai Playwrights Conference, Walt Disney Modular Theater, CalArts Coffeehouse, and more.',
    'I have also worked as a teaching artist at Washington DC’s TheaterLab School for the Arts and at CalArts.',
    'When I’m not on stage, I love to crochet, cook Indian food, and rewatch The Office!',
  ],
  highlights: [
    { label: 'Training', value: 'BFA Acting, CalArts (2026)' },
    { label: 'Minors', value: 'Creative Writing · Arts Education' },
    { label: 'Focus', value: 'Performance, playwriting, dramaturgy' },
    { label: 'Markets', value: 'Theater · Film · New work development' },
  ],
} as const

export type ProjectCategory = 'theater' | 'playwriting' | 'teaching' | 'festival'

export interface Project {
  id: string
  title: string
  venue: string
  role: string
  year: string
  category: ProjectCategory
  description: string
  image?: string
}

export const projects: Project[] = [
  {
    id: 'hollywood-fringe',
    title: 'Hollywood Fringe Festival',
    venue: 'Hollywood Fringe',
    role: 'Performer',
    year: '2024–2025',
    category: 'festival',
    description: 'Festival performance showcasing devised and contemporary work.',
    image: '/images/portrait-about.jpg',
  },
  {
    id: 'ojai-playwrights',
    title: 'Ojai Playwrights Conference',
    venue: 'Ojai Playwrights Conference',
    role: 'Performer / Collaborator',
    year: '2024',
    category: 'theater',
    description: 'New work development with playwrights and ensemble artists.',
    image: '/images/portrait-about.jpg',
  },
  {
    id: 'disney-modular',
    title: 'Walt Disney Modular Theater',
    venue: 'CalArts',
    role: 'Performer',
    year: '2025',
    category: 'theater',
    description: 'Mainstage production in CalArts’ flagship performance space.',
    image: '/images/hero.jpg',
  },
  {
    id: 'calarts-coffeehouse',
    title: 'CalArts Coffeehouse',
    venue: 'California Institute of the Arts',
    role: 'Performer',
    year: '2024–2025',
    category: 'theater',
    description: 'Intimate student-produced performances and experimental work.',
    image: '/images/portrait-home.jpg',
  },
  {
    id: 'theaterlab',
    title: 'TheaterLab School for the Arts',
    venue: 'Washington DC',
    role: 'Teaching Artist',
    year: '2023–2025',
    category: 'teaching',
    description: 'Youth arts education and performance workshops in the DC area.',
    image: '/images/portrait-contact.jpg',
  },
  {
    id: 'calarts-teaching',
    title: 'CalArts Arts Education',
    venue: 'California Institute of the Arts',
    role: 'Teaching Artist',
    year: '2025',
    category: 'teaching',
    description: 'Supporting emerging artists through culturally responsive pedagogy.',
    image: '/images/portrait-home.jpg',
  },
]

export interface Headshot {
  id: string
  title: string
  type: 'Theatrical' | 'Commercial' | 'Portrait'
  src: string
  alt: string
}

export const headshots: Headshot[] = [
  {
    id: '1',
    title: 'Theatrical — Stage',
    type: 'Theatrical',
    src: '/images/portrait-about.jpg',
    alt: 'Anushka Shah theatrical headshot from stage production',
  },
  {
    id: '2',
    title: 'Portrait — Studio',
    type: 'Portrait',
    src: '/images/portrait-home.jpg',
    alt: 'Anushka Shah portrait photograph',
  },
  {
    id: '3',
    title: 'Commercial — Natural Light',
    type: 'Commercial',
    src: '/images/portrait-contact.jpg',
    alt: 'Anushka Shah commercial-style portrait',
  },
  {
    id: '4',
    title: 'Performance — Production Still',
    type: 'Theatrical',
    src: '/images/hero.jpg',
    alt: 'Anushka Shah performance still',
  },
]

export interface ReelItem {
  id: string
  title: string
  description: string
  duration?: string
  embedUrl?: string
}

export const reels: ReelItem[] = [
  {
    id: 'main',
    title: 'Performance Reel',
    description:
      'Scene work and stage highlights — full reel available on request for casting and creative teams.',
    duration: 'Coming soon',
  },
  {
    id: 'theater',
    title: 'Theater Highlights',
    description: 'Selections from CalArts productions and festival performances.',
    duration: 'Coming soon',
  },
  {
    id: 'monologues',
    title: 'Monologues',
    description: 'Contemporary and classical monologue samples for auditions.',
    duration: 'Coming soon',
  },
]

export const skills = [
  'Acting (stage & camera)',
  'Playwriting',
  'Devised theater',
  'Dramaturgy',
  'Direction',
  'Teaching artist',
  'Voice & movement',
  'Hindi / English',
] as const
