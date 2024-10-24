'use client'
import { useEffect, useRef, useState } from 'react'
import { FadeText } from './ui/fade-text'

interface Props {
  label: string
}

export const Title = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // Desconecta o observer após a primeira vez que o elemento é visível
        }
      })
    })

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current) // Limpa o observer ao desmontar
      }
    }
  }, [])

  return (
    <h1 ref={titleRef}>
      {isVisible && (
        <FadeText
          className="relative py-1 text-xl font-bold after:absolute after:bottom-0 after:left-0 after:h-[6px] after:w-16 after:rounded-md after:bg-secondary after:content-[''] lg:py-2 lg:text-3xl lg:after:w-24"
          direction="up"
          framerProps={{
            show: { transition: { delay: 0 } },
          }}
          text={props.label}
        />
      )}
    </h1>
  )
}
