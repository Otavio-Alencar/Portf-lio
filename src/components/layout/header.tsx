import { HeaderData } from '@/data/header'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Menu } from 'lucide-react'
export const Header = () => {
  return (
    <div className="h-28 bg-background shadow-lg">
      <div className="container mx-auto flex h-full items-center justify-between px-4 md:px-0">
        <div className="flex h-full items-center gap-1">
          <img src="/logo-branca.png" alt="logo" />
          <p className="font-semibold text-white">Oalencar Dev</p>
        </div>
        <menu className="hidden gap-5 text-white lg:flex">
          {HeaderData.map((item, index) => (
            <a href={item.link} className="font-light hover:opacity-70" key={index}>
              {item.session}
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
                    {item.session}
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