import React from 'react'
import Hero from '@/components/Start/Hero'
import SEO from '@/components/SEO'
import Exhibition from '@/components/Start/Exhibition'

export default function Home() {
  return (
    <>
      <SEO title="Start" />
      <Hero />
      <Exhibition />
    </>
  )
}
