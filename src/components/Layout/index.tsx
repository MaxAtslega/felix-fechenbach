import React from 'react'
import { Container, Main, Sidebar, SidebarTitle } from '@/components/Layout/Layout.styles'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Container>
        <Main>{children}</Main>
      </Container>
      <Sidebar>
        <SidebarTitle>Felix Fechenbach</SidebarTitle>
      </Sidebar>
    </>
  )
}

export default Layout
