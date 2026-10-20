export type WorkItem =
  | {
      type: 'image'
      title: string
      src: string
      alt: string
      description?: string
      note?: string
      portrait?: boolean
      wide?: boolean
    }
  | { type: 'video'; title: string; src: string; poster?: string; description?: string; portrait?: boolean }
  | { type: 'file'; title: string; src: string; description?: string }
  | { type: 'link'; title: string; src: string; cover: string; alt: string; description?: string }
  | {
      type: 'comparison'
      title: string
      src: string
      before: { src: string; alt: string }
      after: { src: string; alt: string }
      description?: string
    }

export type WorkCategory = {
  id: string
  label: string
  items: WorkItem[]
}

export const workCategories: WorkCategory[] = [
  {
    id: 'ai',
    label: 'Created with AI',
    items: [
      {
        type: 'link',
        title: 'Music Quiz Game',
        src: 'https://briggspmg.netlify.app',
        cover: '/work/music-quiz-cover.png',
        alt: 'Music quiz game landing page reading: Know the song. Beat the room.',
        description: 'A game I created with AI.',
      },
    ],
  },
  {
    id: 'image-editing',
    label: 'Image Editing',
    items: [
      {
        type: 'comparison',
        title: 'Company Reservation Page Redesign',
        src: 'westgate-redesign',
        before: {
          src: '/work/westgate-before.png',
          alt: 'Original company reservation page with a search bar above a mostly empty black area and a bowling photo',
        },
        after: {
          src: '/work/westgate-after.png',
          alt: 'Redesigned company reservation page with a Schedule Reservation form, Reserve button, neon bowling graphic, and family photo',
        },
        description: 'A company sign-up page I redesigned.',
      },
    ],
  },
  {
    id: 'video-editing',
    label: 'Video Editing',
    items: [
      {
        type: 'video',
        title: 'Lift Off',
        src: '/work/superman.mp4#t=0.1',
        portrait: true,
      },
    ],
  },
  {
    id: 'data-visualization',
    label: 'Data Visualization',
    items: [
      {
        type: 'image',
        title: 'Time of Day Patterns Across Multiple Years',
        src: '/work/time-of-day-trends.png',
        alt: 'Bar charts of counts by time of day (6:00pm to 8:15pm) for each year from 2008 to 2022, with totals per time slot',
        description: 'Showing trends over time.',
        note: 'Title and presentation adapted for portfolio purposes.',
        wide: true,
      },
    ],
  },
]
