import React from 'react'
import { Container, Main } from '@/components/Layout/Layout.styles'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Container>
        <Header />
        <Main>{children}</Main>
      </Container>
      <Sidebar />
    </>
  )
}

export default Layout
