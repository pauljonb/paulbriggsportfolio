export type WorkItem =
  | { type: 'image'; title: string; src: string; alt: string; description?: string; portrait?: boolean }
  | { type: 'video'; title: string; src: string; poster?: string; description?: string; portrait?: boolean }
  | { type: 'file'; title: string; src: string; description?: string }
  | { type: 'link'; title: string; src: string; cover: string; alt: string; description?: string }

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
  { id: 'image-editing', label: 'Image Editing', items: [] },
  {
    id: 'video-editing',
    label: 'Video Editing',
    items: [
      {
        type: 'video',
        title: 'Superman',
        src: '/work/superman.mp4',
        poster: '/work/superman-cover.jpg',
        portrait: true,
      },
    ],
  },
  { id: 'data-visualization', label: 'Data Visualization', items: [] },
]
