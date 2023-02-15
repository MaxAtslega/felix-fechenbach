import React from 'react'
import { FormattedMessage } from 'react-intl'
import { SubTitle, Title } from './Hero.styles'

const Hero = () => {
  return (
    <>
      <Title>
        <FormattedMessage id="index.hero.title" />
      </Title>
      <SubTitle>
        <FormattedMessage id="index.hero.description" />
      </SubTitle>
      <span>
        <FormattedMessage id="index.hero.intro" />
      </span>
    </>
  )
}

export default Hero
