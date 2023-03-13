import React from 'react'
import { Container, Item, CardContainer, Header, Body, StyledLink } from '@/components/Cards/Cards.styles'
import MassendemonstrationImage from '@/assents/images/massendemonstration.jpg'
import Image from 'next/image'
import Link from 'next/link'
interface Props {
  title: string
  description: string
  index: number
}

const Card = ({ index, title, description }: Props) => {
  return (
    <Item>
      <CardContainer>
        <Header>
          <span>
            {index} - {title}
          </span>
        </Header>
        <Image src={MassendemonstrationImage} alt={'Massendemonstration'} />
        <Body>
          <p>{description}</p>
          <Link legacyBehavior href={'/exhibition/test'}>
            <StyledLink>Weiter lesen</StyledLink>
          </Link>
        </Body>
      </CardContainer>
    </Item>
  )
}

const Cards = () => {
  return (
    <Container>
      {[...Array(13)].map((x, i) => (
        <Card
          key={i}
          title={'Mergentheim: Kindheit & Jugend'}
          description={
            'Bereits im Alter von 18 Jahren engagierte sich Felix Fechenbach in der Gewerkschaft und für die Solzialdemokratische...'
          }
          index={i + 1}
        />
      ))}
    </Container>
  )
}

export default Cards
