import React from 'react'
import { FooterContainer, Content, Nav } from '@/components/Footer/Footer.styles'
import Container from '@/components/Container'
import Link from 'next/link'
import { FormattedMessage } from 'react-intl'

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Content>
          <Nav>
            <ul>
              <li>
                <Link href={'/site_notice'}>
                  <FormattedMessage id="footer.siteNotice" />
                </Link>
              </li>
              <li>
                <Link href={'/privacy_policy'}>
                  <FormattedMessage id="footer.privacyPolicy" />
                </Link>
              </li>
            </ul>
          </Nav>
          <span>
            Copyright © 2023 <Link href={'https://atslega-media.de'}>AtslegaMedia</Link>
          </span>
        </Content>
      </Container>
    </FooterContainer>
  )
}

export default Footer
