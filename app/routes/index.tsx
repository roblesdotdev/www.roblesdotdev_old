import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => ({
  title: 'Home - Aldo R. Robles',
})

export default function Index() {
  return (
    <div className="flex h-full flex-col items-center justify-center px-6">
      <h1 className="max-w-xl text-center font-mono text-3xl font-bold md:text-5xl">
        This site is in development stage!
      </h1>
      <a
        className="mt-4 text-lg text-link-dark underline hover:text-link"
        href="https://github.com/roblesdotdev/www.roblesdotdev"
        target="_blank"
        rel="noreferrer"
      >
        Source code
      </a>
    </div>
  )
}
