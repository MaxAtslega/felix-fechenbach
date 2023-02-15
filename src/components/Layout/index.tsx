import React from 'react'
import { Container, Main } from '@/components/Layout/Layout.styles'
import Sidebar from '@/components/Sidebar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Container>
        <Main>{children}</Main>
      </Container>
      <Sidebar />
    </>
  )
}

export default Layout
