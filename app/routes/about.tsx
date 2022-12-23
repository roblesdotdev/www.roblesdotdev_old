import type { MetaFunction } from '@remix-run/node'
import { H2, Paragraph } from '~/components/typography'
import { info, siteStack, skills } from '~/content/data'

export const meta: MetaFunction = () => ({
  title: 'About - Aldo R. Robles',
})

export default function AboutPage() {
  return (
    <div className="mx-auto h-full max-w-xl py-12 px-6 md:max-w-2xl lg:max-w-4xl">
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <img
            alt="My pic profile"
            src="/images/profile.jpg"
            className="h-16 w-16 rounded-full ring-4 ring-border-color"
          />
        </div>
        {info.map((paragraph, idx) => (
          <Paragraph
            key={idx}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
      </section>
      <section className="mt-12 flex flex-col gap-6 font-mono font-light leading-[1.80] text-fg-muted md:text-lg lg:leading-loose">
        <H2>Skills</H2>
        {skills.map((paragraph, idx) => (
          <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </section>

      <section className="mt-12 flex flex-col gap-6">
        <H2>About this site</H2>
        <Paragraph>If you're interested, this site is built with:</Paragraph>
        <ul className="list">
          {siteStack.map(stack => (
            <Paragraph as="li" key={stack.url}>
              <a
                className="underline hover:text-link"
                href={stack.url}
                target="_blank"
                rel="noreferrer"
              >
                {stack.label}
              </a>{' '}
              {stack.description}
            </Paragraph>
          ))}
        </ul>
        <Paragraph>
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
        </Paragraph>
      </section>
    </div>
  )
}
