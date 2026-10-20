import { ArrowUpRight, Mail, UserRound } from 'lucide-react'

type ContactLinkProps = {
  href: string
  label: string
  value: string
  icon: 'mail' | 'linkedin'
  external?: boolean
}

export function ContactLink({ href, label, value, icon, external }: ContactLinkProps) {
  const Icon = icon === 'mail' ? Mail : UserRound

  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group flex items-center gap-4 rounded-xl border border-border p-4 transition-colors hover:border-primary hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="text-sm text-muted-foreground">{label}</span>
        <span className="truncate font-medium">{value}</span>
      </span>
      <ArrowUpRight
        className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
        aria-hidden="true"
      />
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </a>
  )
}
