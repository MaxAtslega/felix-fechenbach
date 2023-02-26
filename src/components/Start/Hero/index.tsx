import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Container, Content, ContentDiv, FButton, Sidebar, SubTitle, Title } from './Hero.styles'
import FechenbachImage from '@/assents/images/fechenbach.jpg'
import Image from 'next/image'

const Hero = () => {
  return (
    <Container id={'hero'}>
      <Sidebar>
        <span>Felix Fechenbach Berufskolleg</span>
      </Sidebar>
      <Content>
        <ContentDiv>
          <div>
            <Title>
              <FormattedMessage id="index.hero.title" />
            </Title>
            <Image src={FechenbachImage} alt="Felix Fechenbach" />
            <SubTitle>
              <FormattedMessage id="index.hero.description" />
            </SubTitle>
            <span>
              <FormattedMessage id="index.hero.intro" />
            </span>

            <FButton>Erkunde</FButton>
          </div>
        </ContentDiv>
        <Image src={FechenbachImage} alt="Felix Fechenbach" />
      </Content>
    </Container>
  )
}

export default Hero
