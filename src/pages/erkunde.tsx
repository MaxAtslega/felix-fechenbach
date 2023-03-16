import { NextPage } from 'next'
import Container from '@/components/Container'
import React from 'react'
import dynamic from 'next/dynamic'
import { FormattedMessage } from 'react-intl'

const OpenStreetMap = dynamic(() => import('@/components/OpenStreetMap'), {
  ssr: false,
})

const Erkunde: NextPage = () => {
  return (
    <Container>
      <h1>
        <FormattedMessage id="explore.title" />
      </h1>
      <p>
        <FormattedMessage id="explore.introduction" />
      </p>
      <OpenStreetMap />
    </Container>
  )
}

export default Erkunde
