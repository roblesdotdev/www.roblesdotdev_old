import clsx from 'clsx'

export default function Navbar({ className }: { className?: string }) {
  const cls =
    'flex justify-between items-center w-full px-6 py-8 max-w-7xl mx-auto'
  return (
    <div className={clsx(className, cls)}>
      <h1 className="text-2xl font-bold">r.</h1>
    </div>
  )
}
