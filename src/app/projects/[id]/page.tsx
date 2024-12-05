import ShineBorder from '@/components/ui/shine-border'
import { ProjectsData } from '@/data/projects'

import Link from 'next/link'
type Props = {
  params: {
    id: string
  }
}
const Page = ({ params }: Props) => {
  const project = ProjectsData.find((item) => item.id === parseInt(params.id))
  return (
    <div className="min-h-screen w-full overflow-hidden pt-[112px]">
      <div className="flex gap-5">
        {!project ? (
          <div className="w-full text-center font-bold">
            Projeto não encontrado
          </div>
        ) : (
          <div className="container mx-auto flex flex-col items-center gap-2 pt-8">
            <ShineBorder className="relative flex flex-col items-center justify-center overflow-hidden bg-transparent p-0 shadow-md md:w-3/5">
              <img
                className="h-full p-0"
                src={project.image}
                alt="imagem do projeto"
              />
            </ShineBorder>

            <div className="container mx-auto flex flex-col justify-between gap-6 px-5 md:px-0">
              <div>
                <h1 className="text-3xl font-bold">{project.title}</h1>
                <p className="max-w-[90%] text-wrap break-all lg:max-w-full">
                  {project.largeDescription}
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <Link
                  className="flex w-48 items-center justify-center rounded-md border border-secondary bg-transparent py-2 text-sm hover:bg-secondary"
                  href={'/'}
                >
                  Voltar
                </Link>
                <Link
                  className="flex w-48 items-center justify-center rounded-md bg-secondary py-2 text-sm hover:bg-secondary/90"
                  href={project.repoLink}
                >
                  Ir para repositório
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Page
