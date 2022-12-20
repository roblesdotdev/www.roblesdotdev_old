export default function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-canvas px-6 text-fg-muted">
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
