import React from 'react'
import Container from '@/components/Container'
import Cards from '@/components/Cards/Cards'
import { FormattedMessage } from 'react-intl'

const Exhibition = () => {
  return (
    <section id={'exhibition'}>
      <Container>
        <h1>
          <FormattedMessage id="exhibition.title" />
        </h1>
        <p>
          <FormattedMessage id="exhibition.introduction" />
        </p>
        <Cards />
      </Container>
    </section>
  )
}

export default Exhibition
