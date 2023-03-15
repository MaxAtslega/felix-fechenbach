import React from 'react'
import {
  Container,
  ImageContainer,
  TextContainer,
} from '@/components/Exhibition/TextImageContainer/textImageContainer.styles'
import Timeline from '@/components/Exhibition/Timeline'

const TextImageContainer = ({
  children,
  src,
  alt,
  timeline,
}: {
  children: any
  src: string
  alt: string
  timeline: { time: string; body: string }[]
}) => (
  <Container>
    <TextContainer>{children}</TextContainer>

    <ImageContainer>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} />
      <p>{alt}</p>
      <Timeline timeline={timeline} />
    </ImageContainer>
  </Container>
)

export default TextImageContainer