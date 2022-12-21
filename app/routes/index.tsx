import type { MetaFunction } from '@remix-run/node'
import HeroSection from '~/components/sections/hero'

export const meta: MetaFunction = () => ({
  title: 'Home - Aldo R. Robles',
})

export default function Index() {
  return (
    <div className="mx-auto h-full max-w-xl py-12 px-6 md:max-w-2xl lg:max-w-4xl ">
      <HeroSection />
    </div>
  )
}
