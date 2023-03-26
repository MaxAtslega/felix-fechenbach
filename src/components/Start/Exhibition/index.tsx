import React from 'react'
import Container from '@/components/Container'
import Card from '@/components/Cards/Cards'
import { FormattedMessage } from 'react-intl'
import { Container as CardContainer } from '@/components/Cards/Cards.styles'

const Exhibition = ({ exhibition }: { exhibition: any }) => {
  return (
    <section id={'ausstellung'}>
      <Container>
        <h1>
          <FormattedMessage id="exhibition.title" />
        </h1>
        <p>
          <FormattedMessage id="exhibition.introduction" />
        </p>
        <CardContainer>
          {exhibition.map((data: any) => (
            <Card
              image={data.previewimage}
              title={data.title}
              description={data.short}
              slug={data.slug}
              key={data.slug}
            />
          ))}
        </CardContainer>
      </Container>
    </section>
  )
}

export default Exhibition
