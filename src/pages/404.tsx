import { NextPage } from 'next'
import Container from '@/components/Container'
import { FormattedMessage } from 'react-intl'
import React from 'react'
import { FButton } from '@/components/Start/Hero/Hero.styles'
import { useRouter } from 'next/router'
import SEO from '@/components/SEO'

const NotFound: NextPage = () => {
  const router = useRouter()
  return (
    <Container>
      <SEO title="404" />
      <h1>
        <FormattedMessage id="notfound.title" />
      </h1>
      <p>
        <FormattedMessage id="notfound.message" />
      </p>
      <FButton onClick={() => router.push('/')}>
        <FormattedMessage id="notfound.button" />
      </FButton>
    </Container>
  )
}

export default NotFound
