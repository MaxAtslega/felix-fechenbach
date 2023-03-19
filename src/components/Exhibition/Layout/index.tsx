import React from 'react'
import { Container, Content, Sidebar, Wrapper } from '@/components/Exhibition/Layout/layout.styles'
import Link from 'next/link'
import { FormattedMessage } from 'react-intl'
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Container>
        <Sidebar>
          <span>
            <Link href={'/'}>
              <FormattedMessage id="exhibition.title" />
            </Link>
          </span>
        </Sidebar>
        <Wrapper>
          <Content>{children}</Content>
        </Wrapper>
      </Container>
    </>
  )
}

export default Layout
