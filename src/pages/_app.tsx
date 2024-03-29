import type { AppProps } from 'next/app'
import de from '@/i18n/messages/de.json'
import en from '@/i18n/messages/en.json'
import { IntlProvider } from 'react-intl'
import { useRouter } from 'next/router'
import SEO from '@/components/SEO'
import Layout from '@/components/Layout'
import GlobalStyle from '@/styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/constant/theme'

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <IntlProvider locale={locale || 'de'} messages={locale === 'de' ? de : en}>
        <SEO title="Start" />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </IntlProvider>
    </ThemeProvider>
  )
}
