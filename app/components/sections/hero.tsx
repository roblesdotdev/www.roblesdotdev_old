import { Link } from '@remix-run/react'
import { ArrowOnSquareIcon, GithubIcon, LinkedinIcon } from '~/components/icons'
import { contact } from '~/content/data'

export default function HeroSection() {
  return (
    <>
      <h1 className="text-3xl font-bold leading-snug md:text-4xl lg:text-5xl">
        Experimenting alternative ways to create better applications.
      </h1>
      <div className="flex flex-col gap-6 font-mono font-light leading-[1.80] text-fg-muted md:text-lg lg:leading-loose">
        <p className="mt-8">
          Hi! My name is <b>Aldo R. Robles</b>. I'm a passionate developer
          interested in web, mobile, command line tools and tons of other stuff.
        </p>
        <p>
          I'm currently located in Argentina, I work remotely and do projects
          experimenting with different technologies to create better sites and
          applications.{' '}
          <Link
            to="/about"
            className="hidden items-center gap-2 text-link-dark underline hover:text-link md:inline-flex"
          >
            About me
            <ArrowOnSquareIcon />
          </Link>
        </p>
      </div>
      <div className="mt-10 flex items-center gap-6 md:mt-12 lg:mt-16">
        <Link
          to="contact"
          className="rounded-md bg-canvas-primary px-12 py-4 font-medium hover:opacity-75"
        >
          Email me
        </Link>
        <ul className="flex items-center gap-6 text-fg-muted">
          <li>
            <a
              href={contact.GITHUB}
              rel="noopener noreferrer"
              target="_blank"
              className="group flex items-center gap-3 hover:text-link"
              aria-label="Github profile"
            >
              <span>
                <GithubIcon />
              </span>
              <span className="hidden text-sm group-hover:underline md:inline">
                Github
              </span>
              <span className="hidden md:inline">
                <ArrowOnSquareIcon />
              </span>
            </a>
          </li>
          <li>
            <a
              href={contact.LINKEDIN}
              rel="noopener noreferrer"
              target="_blank"
              className="group flex items-center gap-4 hover:text-link"
              aria-label="Linkedin profile"
            >
              <span>
                <LinkedinIcon />
              </span>
              <span className="hidden text-sm group-hover:underline md:inline">
                Linkedin
              </span>
              <span className="hidden md:inline">
                <ArrowOnSquareIcon />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
