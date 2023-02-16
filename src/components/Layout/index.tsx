import React from 'react'
import { Container } from '@/components/Layout/Layout.styles'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Container>
        <Header />
        <main>{children}</main>
      </Container>
      <Sidebar />
    </>
  )
}

export default Layout
