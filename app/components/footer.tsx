import clsx from 'clsx'

export default function Footer({ className }: { className?: string }) {
  const cls = 'text-center py-12 text-fg-muted font-light'
  return (
    <footer className={clsx(className, cls)}>
      <p>&copy; Aldo R. Robles - {new Date().getFullYear()}</p>
    </footer>
  )
}
