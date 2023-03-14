import React from 'react'
import Hero from '@/components/Start/Hero'
import SEO from '@/components/SEO'
import Exhibition from '@/components/Start/Exhibition'
import matter from 'gray-matter'
import * as fs from 'fs'

export default function Home({ exhibition }: { exhibition: any }) {
  return (
    <>
      <SEO title="Start" />
      <Hero />
      <Exhibition exhibition={exhibition} />
    </>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  const filesInBlogs = fs.readdirSync(`./content/exhibition/${locale}`)

  const exhibition = filesInBlogs.map((filename) => {
    const file = fs.readFileSync(`./content/exhibition/${locale}/${filename}`, 'utf8')
    const matterData = matter(file)

    return {
      ...matterData.data,
      content: matterData.content.slice(0, 100),
      slug: filename.slice(0, filename.indexOf('.')),
    }
  })

  return {
    props: {
      exhibition,
    },
  }
}
