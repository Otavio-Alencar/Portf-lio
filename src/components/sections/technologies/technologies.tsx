import { Title } from '@/components/title'

import { TechnologiesData } from '@/data/technologies'
import { Marquee } from '@devnomic/marquee'
import Image from 'next/image'
import '@devnomic/marquee/dist/index.css'
export const Technologies = () => {
  return (
    <div id="tech" className="container mx-auto min-h-52 w-full px-4 xl:px-0">
      <div className="flex h-full flex-col gap-8 py-10">
        <Title label="Tecnologias" />

        <div className="h-full w-full items-center justify-center">
          <Marquee
            fade={true}
            direction="left"
            reverse={false}
            pauseOnHover={true}
          >
            {TechnologiesData.map((item, index) => (
              <div
                key={index}
                className={`group flex h-24 w-24 flex-col items-center justify-center rounded-md border border-secondary bg-transparent`}
                data-name={false}
              >
                <Image src={item.img} alt={item.name} width={50} height={50} />
                <p className="py-2 text-xs">{item.name}</p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  )
}
