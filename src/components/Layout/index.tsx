import React from 'react'
import { Container } from '@/components/Layout/Layout.styles'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Container>
        <Header />
        <main>{children}</main>
        <Footer />
      </Container>
      <Sidebar />
    </>
  )
}

export default Layout
