import type { MetaFunction } from '@remix-run/node'
import Spacer from '~/components/spacer'

export const meta: MetaFunction = () => ({
  title: 'Contact - Aldo R. Robles',
})

export default function Contact() {
  return (
    <div className="mx-auto h-full max-w-xl py-12 px-6 md:max-w-2xl lg:max-w-4xl">
      <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl lg:leading-tight">
        Contact
      </h1>
      <div className="mt-8 flex flex-col gap-8 font-light text-fg-muted md:text-lg">
        <p>
          In the interest of saving us both some time, here are a few reasons to{' '}
          <b>not get in touch</b>:
        </p>
        <ul className="flex list-disc flex-col gap-4 leading-relaxed">
          <li>
            <b>You're hunting around for the lowest price.</b> I don't compete
            on prices. And I don't have a fixed or hourly rate. I charge on a
            per project/value base, and only provide high quality work that is
            worth investing in. If you're just looking for someone to get the
            work done and are not interested in how, then you should probably be
            looking somewhere else.
          </li>
          <li>
            <b>You need someone to do quick work.</b> Quick work often means
            less quality work; and I don't offer that.
          </li>
          <li>
            <b>You need a designer to design your Web site/app UI.</b> While I
            have a soft spot for design, I am not a designer and therefore don't
            do any design work.
          </li>
          <li>
            <b>You are building a new team.</b> I am comfortable working in
            small teams with well-defined goals and as few meetings as possible.
          </li>
        </ul>
      </div>
      <Spacer />
      <div className="font-light leading-relaxed text-fg-muted md:text-lg lg:leading-loose">
        <p>
          If you're still here and interested in my profile, I'd love to hear
          from you and learn more about what you're working on. Write me at{' '}
          <a
            href="mailto:hello@roblesdotdev.com"
            className="inline cursor-pointer text-link hover:text-link-dark"
          >
            hello@roblesdotdev.com
          </a>
          . The more details about your project you include in your message, the
          faster I'll get back to you. You will receive a response from me
          within 3/5 business days.
        </p>
      </div>
    </div>
  )
}
