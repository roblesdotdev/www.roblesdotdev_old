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
import appStyles from '~/styles/app.css'
import Navbar from '~/components/navbar'
import Footer from '~/components/footer'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Aldo R. Robles',
  description: 'Aldo R. Robles Fullstack Developer',
  viewport: 'width=device-width,initial-scale=1',
})

export const links: LinksFunction = () => [
  {
    rel: 'preload',
    as: 'font',
    href: '/fonts/jetbrains-mono/light.woff2',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'preload',
    as: 'font',
    href: '/fonts/jetbrains-mono/regular.woff2',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'preload',
    as: 'font',
    href: '/fonts/jetbrains-mono/medium.woff2',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'preload',
    as: 'font',
    href: '/fonts/jetbrains-mono/bold.woff2',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  { rel: 'stylesheet', as: 'style', href: tailwindStyles },
  { rel: 'stylesheet', as: 'style', href: appStyles },
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen w-full overflow-x-hidden antialiased">
        <div className="layout bg-canvas font-mono text-fg">
          <Navbar className="navbar" />
          <main className="main">
            <Outlet />
          </main>
          <Footer className="footer" />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
