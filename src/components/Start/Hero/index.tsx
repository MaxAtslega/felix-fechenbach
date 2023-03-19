import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Container, Content, Wrapper, FButton, Sidebar, SubTitle, Title } from './Hero.styles'
import FechenbachImage from '@/assets/images/fechenbach.jpg'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Hero = () => {
  const router = useRouter()

  return (
    <Container id={'hero'}>
      <Sidebar>
        <span>
          <Link href={'https://ffb-lippe.de'}>Felix Fechenbach Berufskolleg</Link>
        </span>
      </Sidebar>
      <Content>
        <Wrapper>
          <div>
            <Title>
              <FormattedMessage id="index.hero.title" />
            </Title>
            <Image src={FechenbachImage} alt="Felix Fechenbach" />
            <SubTitle>
              <FormattedMessage id="index.hero.description" />
            </SubTitle>
            <span>
              <FormattedMessage id="index.hero.introduction" />
            </span>

            <FButton onClick={() => router.push('#ausstellung')}>
              <FormattedMessage id="index.hero.jump" />
            </FButton>
          </div>
        </Wrapper>
        <Image loading={'lazy'} src={FechenbachImage} alt="Felix Fechenbach" />
      </Content>
    </Container>
  )
}

export default Hero
