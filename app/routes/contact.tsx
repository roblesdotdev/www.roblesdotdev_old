import type { V2_MetaFunction } from '@remix-run/node'
import Spacer from '~/components/spacer'
import { H2, Paragraph } from '~/components/typography'
import { contact, contactReasons } from '~/content/data'
import { getUrl } from '~/utils'
import { getSocialMetas } from '~/utils/seo'

export const meta: V2_MetaFunction = ({ data }) => {
  const requestInfo = data?.requestInfo
  return getSocialMetas({
    title: 'Contact Aldo Robles',
    description: 'Send Aldo R. Robles Personal email',
    keywords: 'Contact, Aldo R. Robles',
    url: getUrl(requestInfo),
  })
}

export default function Contact() {
  return (
    <div className="mx-auto h-full max-w-4xl py-12">
      <H2>Contact</H2>
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
