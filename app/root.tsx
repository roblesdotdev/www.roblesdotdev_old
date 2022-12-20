import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import tailwindStyles from '~/styles/tailwind.css'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Aldo R. Robles',
  description: 'Aldo R. Robles Fullstack Developer',
  viewport: 'width=device-width,initial-scale=1',
})

export const links: LinksFunction = () => [
  { rel: 'stylesheet', as: 'style', href: tailwindStyles },
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="antialiased min-h-screen w-full overflow-x-hidden">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
