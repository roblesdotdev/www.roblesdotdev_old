import { H2, Paragraph } from '~/components/typography'

export default function ProjectsRoute() {
  return (
    <div className="mx-auto h-full max-w-4xl py-12">
      <H2>Work in progress</H2>
      <div className="flex flex-col gap-4 mt-8">
        <Paragraph>
          I want to inform you that I am currently working on this section of my
          personal website. I apologize for any inconvenience caused and I
          regret the lack of content in this area.
        </Paragraph>
        <Paragraph>
          I am dedicating time and effort to ensure that I provide you with
          relevant and valuable information. Soon, this section will be
          available, and you will be able to find the content you are looking
          for.
        </Paragraph>
        <Paragraph>
          I appreciate your understanding and patience as I work on these
          improvements. My goal is to offer you an enriching experience and
          share knowledge that may be helpful to you.
        </Paragraph>
      </div>
    </div>
  )
}
