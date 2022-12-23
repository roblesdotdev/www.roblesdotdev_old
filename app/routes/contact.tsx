import type { MetaFunction } from '@remix-run/node'
import Spacer from '~/components/spacer'
import { H1, Paragraph } from '~/components/typography'
import { contact, contactReasons } from '~/content/data'

export const meta: MetaFunction = () => ({
  title: 'Contact - Aldo R. Robles',
})

export default function Contact() {
  return (
    <div className="mx-auto h-full max-w-xl py-12 px-6 md:max-w-2xl lg:max-w-4xl">
      <H1>Contact</H1>
      <div className="mt-8 flex flex-col gap-8">
        <Paragraph>
          In the interest of saving us both some time, here are a few reasons to{' '}
          <b>not get in touch</b>:
        </Paragraph>
        <ul className="list flex flex-col gap-4 font-light leading-[1.80] lg:leading-loose">
          {contactReasons.map((reason, idx) => (
            <Paragraph
              as="li"
              key={idx}
              dangerouslySetInnerHTML={{ __html: reason }}
            />
          ))}
        </ul>
      </div>
      <Spacer />
      <div>
        <Paragraph>
          If you're still here and interested in my profile, I'd love to hear
          from you and learn more about what you're working on. Write me at{' '}
          <a
            href={`mailto:${contact.EMAIL}`}
            className="inline cursor-pointer text-link hover:text-link-dark"
          >
            {contact.EMAIL}
          </a>
          . The more details about your project you include in your message, the
          faster I'll get back to you. You will receive a response from me
          within 3/5 business days.
        </Paragraph>
      </div>
    </div>
  )
}
