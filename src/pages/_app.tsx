import type { AppProps } from 'next/app'
import de from '@/i18n/messages/de.json'
import en from '@/i18n/messages/en.json'
import { IntlProvider } from 'react-intl'
import { useRouter } from 'next/router'
import SEO from '@/components/SEO'
import localFont from '@next/font/local'
import Layout from '@/components/Layout'

const OldStandardTT = localFont({
  src: [
    {
      path: '../assents/fonts/OldStandardTT-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assents/fonts/OldStandardTT-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../assents/fonts/OldStandardTT-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
})

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter()

  return (
    <>
      <style jsx global>{`
        :root {
          --font-base: ${OldStandardTT.style.fontFamily};
        }
      `}</style>

      <IntlProvider locale={locale || 'de'} messages={locale === 'de' ? de : en}>
        <SEO title="Start" />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </IntlProvider>
    </>
  )
}
