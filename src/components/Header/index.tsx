import React, { useState } from 'react'
import { Container, Content, MenuButton, MobileMenuContainer, Nav } from '@/components/Header/Header.styles'
import Link from 'next/link'
import { FormattedMessage } from 'react-intl'
import { HiMenu } from 'react-icons/hi'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Container>
      <Content>
        <MobileMenuContainer>
          <MenuButton style={menuOpen ? { opacity: '.6' } : {}} onClick={() => setMenuOpen(!menuOpen)}>
            <HiMenu />
          </MenuButton>
        </MobileMenuContainer>
        <Nav style={menuOpen ? { display: 'block' } : { display: 'none' }}>
          <ul>
            <li>
              <Link href={'/'}>
                <FormattedMessage id="header.nav.exhibition" />
              </Link>
            </li>
            <li>
              <Link href={'#'}>
                <FormattedMessage id="header.nav.explore" />
              </Link>
            </li>
            <li>
              <Link href={'#'}>
                <FormattedMessage id="header.nav.gallery" />
              </Link>
            </li>
          </ul>
        </Nav>
      </Content>
    </Container>
  )
}

export default Header
