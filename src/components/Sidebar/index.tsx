import React, { useCallback } from 'react'
import { SiGithub } from 'react-icons/si'
import Link from 'next/link'
import { Footer, Title, Container, Content, LanguageSelector, GitHubButton } from './Sidebar.styles'
import { useIntl } from 'react-intl'
import { useRouter } from 'next/router'
import { setCookie } from 'cookies-next'

const Sidebar = () => {
  const intl = useIntl()
  const router = useRouter()

  const switchToLocale = useCallback(
    (locale: string) => {
      const path = router.asPath
      setCookie('NEXT_LOCALE', locale)

      return router.push(path, path, { locale })
    },
    [router]
  )

  return (
    <Container>
      <Content>
        <Title>
          <Link href={'/'}>Felix Fechenbach</Link>
        </Title>
        <Footer>
          <ul>
            <li>
              <LanguageSelector onClick={() => switchToLocale(intl.locale === 'de' ? 'en' : 'de')}>
                {intl.locale.toUpperCase()}
              </LanguageSelector>
            </li>
            <li>
              <GitHubButton
                aria-label="GitHub"
                onClick={() => router.push('https://github.com/MaxAtslega/felix-fechenbach')}
              >
                <SiGithub color={'#181717'} />
              </GitHubButton>
            </li>
          </ul>
        </Footer>
      </Content>
    </Container>
  )
}

export default Sidebar
