import React from 'react'
import { Container, Sidebar, Wrapper } from '@/components/Exhibition/Layout/Layout.styles'
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
          <div>{children}</div>
        </Wrapper>
      </Container>
    </>
  )
}

export default Layout
