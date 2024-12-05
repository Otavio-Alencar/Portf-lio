import { About } from '@/components/sections/about/about'
import { Contact } from '@/components/sections/contact/contact'
import { Hero } from '@/components/sections/home/hero'
import { Index } from '@/components/sections/projects/index'
import { Technologies } from '@/components/sections/technologies/technologies'

export default function Home() {
  return (
    <div className="min-h-screen pt-[112px]">
      <Hero />
      <Index />
      <Technologies />
      <About />
      <Contact />
    </div>
  )
}
