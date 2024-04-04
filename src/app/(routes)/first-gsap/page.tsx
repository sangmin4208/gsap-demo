'use client'

import { PageHeading } from '@/components/page-heading'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { useRef } from 'react'

const Page = () => {
  const container = useRef<HTMLDivElement | null>(null) // 1
  const target = useRef<HTMLImageElement | null>(null) // 2
  useGSAP(
    () => {
      const containerWidth = container.current!.offsetWidth
      const targetWidth = target.current!.offsetWidth

      gsap.to(target.current, {
        x: containerWidth - targetWidth,
      })
    }, // 3
    {
      scope: container, // 3
      dependencies: [], // 4
    }
  ) // 5

  return (
    <main>
      <PageHeading>First GSAP</PageHeading>

      <div
        ref={container}
        className="h-[50vh] flex items-center justify-start bg-yellow-100"
      >
        <Image
          ref={target}
          src={'/images/nacho.png'}
          alt="nacho"
          width={100}
          height={100}
        />
      </div>
    </main>
  )
}

export default Page
