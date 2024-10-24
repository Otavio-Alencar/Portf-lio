'use client'
import { useEffect, useState } from 'react'
import animation from './animations/animationHome.json'
import Lottie from 'lottie-react'

export const HomeAnimation = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Define que o componente está sendo renderizado no lado do cliente
    setIsClient(true)
  }, [])

  return (
    <div>
      {isClient && (
        <Lottie
          animationData={animation}
          loop={true}
          autoplay={true}
          style={{ width: 500, height: 500 }}
        />
      )}
    </div>
  )
}
