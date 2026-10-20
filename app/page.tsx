import { CallingCard } from '@/components/calling-card'
import { WorkTabs } from '@/components/work-tabs'

export default function Page() {
  return (
    <main className="flex min-h-dvh flex-col items-center gap-16 px-4 py-12 sm:py-20">
      <CallingCard />
      <WorkTabs />
    </main>
  )
}
