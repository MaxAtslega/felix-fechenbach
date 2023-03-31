import { NextPage } from 'next'
import Container from '@/components/Container'
import { FormattedMessage } from 'react-intl'
import React from 'react'
import SEO from '@/components/SEO'

const Film: NextPage = () => {
  return (
    <Container>
      <SEO title="Film" />
      <h1>
        <FormattedMessage id="movie.title" />
      </h1>
      <video muted src={'https://content.atslega-media.de/felix-fechenbach.mp4'} controls width="100%">
        <FormattedMessage id="movie.error" />
      </video>
    </Container>
  )
}

export default Film
