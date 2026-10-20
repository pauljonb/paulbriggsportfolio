import { ExternalLink, FileText, ImageIcon } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { workCategories, type WorkItem } from '@/lib/work'

function WorkCard({ item }: { item: WorkItem }) {
  return (
    <figure
      className={`flex flex-col overflow-hidden rounded-xl border border-border bg-card ${
        item.type === 'comparison' || (item.type === 'image' && item.wide) ? 'sm:col-span-2 lg:col-span-3' : ''
      }`}
    >
      {item.type === 'comparison' && (
        <div className="grid gap-px bg-border md:grid-cols-2">
          {[
            { label: 'Before', image: item.before },
            { label: 'After', image: item.after },
          ].map(({ label, image }) => (
            <div key={label} className="flex flex-col gap-2 bg-card p-3">
              <span
                className={`w-fit rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  label === 'After' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}
              >
                {label}
              </span>
              <a href={image.src} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-md">
                <img src={image.src || '/placeholder.svg'} alt={image.alt} className="w-full object-contain" />
                <span className="sr-only">Open {label.toLowerCase()} image full size</span>
              </a>
            </div>
          ))}
        </div>
      )}
      {item.type === 'image' && (
        <img
          src={item.src || '/placeholder.svg'}
          alt={item.alt}
          className={
            item.wide
              ? 'h-auto w-full bg-white object-contain'
              : `w-full object-cover ${item.portrait ? 'aspect-[9/16]' : 'aspect-video'}`
          }
        />
      )}
      {item.type === 'video' && (
        <video
          src={item.src}
          poster={item.poster}
          controls
          preload="metadata"
          className={`w-full bg-muted ${item.portrait ? 'aspect-[9/16]' : 'aspect-video'}`}
        />
      )}
      {item.type === 'file' && (
        <a
          href={item.src}
          target="_blank"
          rel="noopener noreferrer"
          className="flex aspect-video w-full items-center justify-center bg-muted text-primary transition-colors hover:bg-accent"
        >
          <FileText className="size-10" aria-hidden="true" />
          <span className="sr-only">Open {item.title}</span>
        </a>
      )}
      {item.type === 'link' && (
        <a href={item.src} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden">
          <img
            src={item.cover || '/placeholder.svg'}
            alt={item.alt}
            className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
          />
          <span className="sr-only">Open {item.title} in a new tab</span>
        </a>
      )}
      <figcaption className="flex flex-col gap-1 p-4">
        <span className="font-medium">{item.title}</span>
        {item.type === 'link' && (
          <a
            href={item.src}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            Play the game
            <ExternalLink className="size-3.5" aria-hidden="true" />
          </a>
        )}
        {item.description && (
          <span className="text-sm leading-relaxed text-muted-foreground">{item.description}</span>
        )}
      </figcaption>
    </figure>
  )
}

function EmptyState({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border px-6 py-16 text-center">
      <ImageIcon className="size-8 text-primary" aria-hidden="true" />
      <p className="text-sm text-muted-foreground">{label} work coming soon.</p>
    </div>
  )
}

export function WorkTabs() {
  return (
    <section aria-labelledby="work-heading" className="flex w-full max-w-4xl flex-col gap-6">
      <h2 id="work-heading" className="text-2xl font-semibold tracking-tight">
        My Work
      </h2>
      <Tabs defaultValue={workCategories[0].id} className="flex flex-col gap-6">
        <TabsList className="flex h-auto w-full flex-wrap justify-start gap-1 sm:w-fit">
          {workCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="flex-none px-4 py-2 data-active:bg-primary data-active:text-primary-foreground data-active:shadow-sm">
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {workCategories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            {category.items.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <WorkCard key={item.src} item={item} />
                ))}
              </div>
            ) : (
              <EmptyState label={category.label} />
            )}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}
