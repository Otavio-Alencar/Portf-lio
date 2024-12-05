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

export const CardDesktop = () => {
  const itemsPerPage = 3
  const totalItems = ProjectsData.length
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const currentItems = ProjectsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  )

  return (
    <div className="hidden space-y-6 lg:flex lg:flex-col">
      {currentItems.map((project, index) => (
        <div
          key={index}
          className="container mx-auto hidden overflow-hidden rounded-lg bg-background text-white shadow-md md:flex-row lg:flex lg:max-w-[1000px]"
        >
          <img
            src={project.image || '/placeholder.png'} // Use o campo "image" do seu dado
            alt={project.title || 'Imagem do Projeto'}
            className="w-2/3 object-cover"
          />
          <div className="flex w-2/3 flex-col gap-4 p-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-semibold">{project.title}</h2>
              <p className="mt-2 w-72 flex-wrap break-all">
                {project.shortDescription}
              </p>
              <div className="flex w-24 justify-center rounded-full border border-secondary bg-transparent px-1 text-sm text-secondary transition-all hover:bg-secondary hover:text-white">
                {project.stack}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <Link
                  href={'/projects/' + project.id}
                  className="flex flex-1 items-center justify-center rounded border border-secondary bg-transparent px-4 py-2 font-semibold text-white transition-all hover:bg-secondary"
                >
                  Ver projeto
                </Link>
                <Link
                  href={project.repoLink}
                  className="flex flex-1 items-center justify-center rounded border border-secondary bg-transparent px-4 py-2 font-semibold text-white transition-all hover:bg-secondary"
                >
                  Repositório
                </Link>
              </div>
              <Link
                href={project.siteLink}
                className="flex justify-center rounded bg-secondary px-4 py-2 font-semibold text-white hover:bg-secondary/90"
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
