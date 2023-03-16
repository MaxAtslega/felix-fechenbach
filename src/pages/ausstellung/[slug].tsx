import matter from 'gray-matter'
import * as fs from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import styled from 'styled-components'
import Image from 'next/image'
import TextImageContainer from '@/components/Exhibition/TextImageContainer'
import React from 'react'
import Layout from '@/components/Exhibition/Layout'

const InformationBox = styled.div`
  padding: 0.7rem;
  border: 2px solid #000000;
`

const Exhibition = ({ frontmatter, source }: { frontmatter: any; source: any }) => {
  const components = {
    InformationBox: InformationBox,
    Image: ({ src, alt, width, height }: { src: string; alt: string; width: string; height: string }) => (
      <div>
        <Image
          src={src}
          alt={alt}
          width={Number(width)}
          height={Number(height)}
          style={{ width: '100%', height: 'auto', padding: '1rem 0 0 0' }}
        />
        <p style={{ margin: '1rem 0' }}>{alt}</p>
      </div>
    ),
  }

  return (
    <>
      <Layout>
        <h1>{frontmatter.title}</h1>
        <TextImageContainer timeline={frontmatter?.timeline} src={frontmatter.previewimage} alt={frontmatter.image_alt}>
          <MDXRemote {...source} components={components} />
        </TextImageContainer>
      </Layout>
    </>
  )
}

export async function getStaticProps({ params: { slug }, locale }: { params: { slug: string }; locale: string }) {
  const fileContent = matter(fs.readFileSync(`./content/exhibition/${locale}/${slug}.md`, 'utf8'))
  let frontmatter = fileContent.data
  const source = await serialize(fileContent.content)

  return {
    props: { frontmatter, source },
  }
}

export async function getStaticPaths({ locales }: { locales: string[] }) {
  const paths: { params: { slug: string }; locale: string }[] = []

  locales.map((locale: string) => {
    const filesInProjects = fs.readdirSync(`./content/exhibition/${locale}/`)
    filesInProjects.map((file) => {
      const filename = file.slice(0, file.indexOf('.'))
      paths.push({ params: { slug: filename }, locale: locale })
    })
  })

  return {
    paths,
    fallback: false,
  }
}

export default Exhibition
