import { ContactLink } from '@/components/contact-link'

export function CallingCard() {
  return (
    <article className="w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <header className="flex flex-col gap-3 bg-primary px-8 py-10 text-primary-foreground sm:px-12">
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Paul Briggs
        </h1>
        <p className="text-lg font-medium text-primary-foreground/85">
          Marketing, Research &amp; Analytics
        </p>
      </header>
      <div className="flex flex-col gap-8 p-8 sm:p-12">

        <p className="leading-relaxed text-muted-foreground text-pretty">
          I combine research, data analysis, and creativity to help businesses
          better understand their audiences and improve their marketing. My
          background includes marketing projects, data visualization, content
          creation, and digital marketing, with a focus on turning ideas and
          information into useful results.
        </p>

        <section aria-labelledby="contact-heading" className="flex flex-col gap-3">
          <h2
            id="contact-heading"
            className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
          >
            Get in touch
          </h2>
          <ul className="flex flex-col gap-3">
            <li>
              <ContactLink
                href="mailto:pauljonbriggs@gmail.com"
                label="Email"
                value="pauljonbriggs@gmail.com"
                icon="mail"
              />
            </li>
            <li>
              <ContactLink
                href="https://www.linkedin.com/in/paul-j-briggs"
                label="LinkedIn"
                value="linkedin.com/in/paul-j-briggs"
                icon="linkedin"
                external
              />
            </li>
          </ul>
        </section>
      </div>
    </article>
  )
}
