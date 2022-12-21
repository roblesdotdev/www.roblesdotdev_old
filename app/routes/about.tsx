import type { MetaFunction } from '@remix-run/node'
import { info, skills } from '~/content/data'

export const meta: MetaFunction = () => ({
  title: 'About - Aldo R. Robles',
})

export default function AboutPage() {
  return (
    <div className="mx-auto h-full max-w-xl py-12 px-6 md:max-w-2xl lg:max-w-4xl">
      <section className="flex flex-col gap-6 font-mono font-light leading-[1.80] text-fg-muted md:text-lg lg:leading-loose">
        <div className="flex items-center gap-2">
          <img
            alt="My pic profile"
            src="/images/profile.jpg"
            className="h-16 w-16 rounded-full ring-4 ring-border-color"
          />
        </div>
        {info.map((paragraph, idx) => (
          <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </section>
      <section className="mt-12 flex flex-col gap-6 font-mono font-light leading-[1.80] text-fg-muted md:text-lg lg:leading-loose">
        <h1 className="text-2xl font-bold">Skills</h1>
        {skills.map((paragraph, idx) => (
          <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </section>

      <section className="mt-12 flex flex-col gap-6 font-mono font-light leading-[1.80] text-fg-muted md:text-lg lg:leading-loose">
        <h1 className="text-2xl font-bold">About this site</h1>
        <p>If you're interested, this site is built with:</p>
        <ul className="list">
          <li>
            <a
              className="underline hover:text-link"
              href="https://remix.run"
              target="_blank"
              rel="noreferrer"
            >
              Remix
            </a>{' '}
            as main framework
          </li>
          <li>
            <a
              className="underline hover:text-link"
              href="https://tailwindcss.com"
              target="_blank"
              rel="noreferrer"
            >
              TailwindCSS
            </a>{' '}
            for styling
          </li>
          <li>
            Hosted on{' '}
            <a
              className="underline hover:text-link"
              href="https://tailwindcss.com"
              target="_blank"
              rel="noreferrer"
            >
              Fly.io
            </a>
          </li>
        </ul>
        <p>
          You can find the full code and more projects on my{' '}
          <a
            className="text-link-dark underline hover:text-link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/roblesdotdev"
          >
            github
          </a>
          .
        </p>
      </section>
    </div>
  )
}
