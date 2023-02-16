import React from 'react'
import { Container, Content, Nav, StyledIcon, StyledLink } from '@/components/Header/Header.styles'
import Link from 'next/link'
import { FaRegBookmark } from 'react-icons/fa'
import { FormattedMessage } from 'react-intl'

const Header = () => {
  return (
    <Container>
      <Content>
        <Nav>
          <ul>
            <li>
              <Link passHref href={'#'} legacyBehavior>
                <StyledLink>
                  <FormattedMessage id="header.nav.exhibition" />
                </StyledLink>
              </Link>
            </li>
            <li>
              <Link passHref href={'#'} legacyBehavior>
                <StyledLink>
                  <FormattedMessage id="header.nav.explore" />
                </StyledLink>
              </Link>
            </li>
            <li>
              <Link passHref href={'#'} legacyBehavior>
                <StyledLink>
                  <FormattedMessage id="header.nav.gallery" />
                </StyledLink>
              </Link>
            </li>
          </ul>
        </Nav>
        <StyledIcon>
          <FaRegBookmark />
        </StyledIcon>
      </Content>
    </Container>
  )
}

export default Header
