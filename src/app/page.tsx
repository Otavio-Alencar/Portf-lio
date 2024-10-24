import { About } from '@/components/sections/about/about'
import { Contact } from '@/components/sections/contact/contact'
import { Hero } from '@/components/sections/home/hero'
import { Projects } from '@/components/sections/projects/projects'
import { Technologies } from '@/components/sections/technologies/technologies'

export default function Home() {
  return (
    <div className="min-h-screen pt-[112px]">
      <Hero />
      <Projects />
      <Technologies />
      <About />
      <Contact />
    </div>
  )
}
