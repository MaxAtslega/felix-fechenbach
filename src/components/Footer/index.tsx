import React from 'react'
import { FooterContainer, Content, Nav } from '@/components/Footer/Footer.styles'
import Container from '@/components/Container'

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Content>
          <Nav>
            <ul>
              <li>Impressum</li>
              <li>Datenschutzerklärung</li>
            </ul>
          </Nav>
          <span>Copyright © 2023 AtslegaMedia</span>
        </Content>
      </Container>
    </FooterContainer>
  )
}

export default Footer
