import React from 'react'
import { Item, CardContainer, Header, Body, StyledLink } from '@/components/Cards/Cards.styles'
import Link from 'next/link'
interface Props {
  title: string
  description: string
  index: number
  slug: string
  image: string
}

const Card = ({ index, title, description, slug, image }: Props) => {
  return (
    <Item>
      <CardContainer>
        <Header>
          <span>
            {index} - {title}
          </span>
        </Header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={'title'} />
        <Body>
          <p>{description}</p>
          <Link legacyBehavior href={'/ausstellung/' + slug}>
            <StyledLink>Weiter lesen</StyledLink>
          </Link>
        </Body>
      </CardContainer>
    </Item>
  )
}

export default Card
