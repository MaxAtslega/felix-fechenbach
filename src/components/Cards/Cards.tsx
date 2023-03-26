import React from 'react'
import { Item, CardContainer, Header, Body, StyledLink } from '@/components/Cards/Cards.styles'
import { FormattedMessage } from 'react-intl'
interface Props {
  title: string
  description: string
  slug: string
  image: string
}

const Card = ({ title, description, slug, image }: Props) => {
  return (
    <Item>
      <CardContainer>
        <Header>
          <span>{title}</span>
        </Header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={'title'} />
        <Body>
          <p>{description}</p>
          <StyledLink href={'/ausstellung/' + slug}>
            <FormattedMessage id="exhibition.readMore" />
          </StyledLink>
        </Body>
      </CardContainer>
    </Item>
  )
}

export default Card
