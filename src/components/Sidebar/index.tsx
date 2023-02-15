import React from 'react'
import { Github } from '@icons-pack/react-simple-icons'
import Link from 'next/link'
import { Footer, Title, Container, Content, LanguageSelector } from './Sidebar.styles'

const Sidebar = () => {
  return (
    <Container>
      <Content>
        <Title>Felix Fechenbach</Title>
        <Footer>
          <ul>
            <li>
              <LanguageSelector>DE</LanguageSelector>
            </li>
            <li>
              <Link href={'https://github.com/MaxAtslega/felix-fechenbach'}>
                <Github color={'#181717'} />
              </Link>
            </li>
          </ul>
        </Footer>
      </Content>
    </Container>
  )
}

export default Sidebar
