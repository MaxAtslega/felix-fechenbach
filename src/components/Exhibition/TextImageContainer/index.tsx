import React from 'react'
import {
  Container,
  ImageContainer,
  TextContainer,
} from '@/components/Exhibition/TextImageContainer/textImageContainer.styles'
import Timeline from '@/components/Timeline'

const TextImageContainer = ({
  children,
  src,
  alt,
  timeline,
}: {
  children: any
  src: string
  alt: string
  timeline?: { time: string; body: string }[]
}) => (
  <Container>
    <TextContainer>{children}</TextContainer>

    <ImageContainer>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} />
      <p>{alt}</p>
      {timeline ? <Timeline timeline={timeline} /> : null}
    </ImageContainer>
  </Container>
)

export default TextImageContainer
