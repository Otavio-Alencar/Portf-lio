import { HeaderData } from '@/data/header'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Menu } from 'lucide-react'
import Image from 'next/image'
export const Header = () => {
  return (
    <div className="fixed z-50 h-28 w-full bg-background shadow-lg">
      <div className="container mx-auto flex h-full items-center justify-between px-4 xl:px-0">
        <div className="flex h-full items-center gap-1">
          <Image src="/logo-branca.png" alt="logo" />
          <p className="font-semibold text-white">Oalencar Dev</p>
        </div>
        <menu className="hidden gap-5 text-white lg:flex">
          {HeaderData.map((item, index) => (
            <a
              href={item.link}
              className="font-light hover:opacity-70"
              key={index}
            >
              {item.section}
            </a>
          ))}
        </menu>
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <menu className="flex flex-col gap-5 text-lg">
                {HeaderData.map((item, index) => (
                  <a href={item.link} className="font-light" key={index}>
                    {item.section}
                  </a>
                ))}
              </menu>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}
