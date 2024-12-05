'use client'
import Link from 'next/link'
import { ProjectsData } from '@/data/projects'
import { useState } from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

export const CardMobile = () => {
  const itemsPerPage = 2 // Número de itens por página
  const totalItems = ProjectsData.length // Total de itens
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  // Função para mudar a página
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  // Itens da página atual
  const currentItems = ProjectsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  )

  return (
    <div className="space-y-6 lg:hidden">
      {/* Renderiza os cards da página atual */}
      {currentItems.map((project, index) => (
        <div
          key={index}
          className="mx-auto max-w-sm overflow-hidden rounded-lg border border-background bg-background text-white shadow-lg md:max-w-lg lg:hidden"
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-48 w-full object-cover"
          />
          <div className="flex flex-col gap-4 p-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-sm">{project.shortDescription}</p>
              <div className="flex w-24 justify-center rounded-full border border-secondary bg-transparent px-1 text-sm text-secondary transition-all hover:bg-secondary hover:text-white">
                {project.stack}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex">
                <Link
                  href={'/projects/' + project.id}
                  className="flex flex-1 items-center justify-center rounded border border-secondary bg-transparent px-4 py-1 font-semibold text-white transition-all hover:bg-secondary"
                >
                  Ver projeto
                </Link>
                <Link
                  href={project.repoLink}
                  className="flex flex-1 items-center justify-center rounded border border-secondary bg-transparent px-4 py-1 font-semibold text-white transition-all hover:bg-secondary"
                >
                  Repositório
                </Link>
              </div>
              <Link
                href={project.siteLink}
                className="flex justify-center rounded bg-secondary px-4 py-1 font-semibold text-white hover:bg-secondary/90"
              >
                Acessar o Site
              </Link>
            </div>
          </div>
        </div>
      ))}

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => handlePageChange(currentPage - 1)}
            />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                isActive={page === currentPage}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}

          {totalPages > 5 && currentPage < totalPages - 2 && (
            <PaginationEllipsis />
          )}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
