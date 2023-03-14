import Container from '@/components/Container'
import { NextPage } from 'next'
import { useIntl } from 'react-intl'

const SiteNoticeEN: NextPage = () => {
  return (
    <Container>
      <h1>Site Notice</h1>
      <h2>Information pursuant to Sect. 5 German Telemedia Act (TMG)</h2>
      <p>
        Max Atslega
        <br />
        Holzhofstra&szlig;e 14C
        <br />
        32791 Lage
      </p>

      <h2>Contact</h2>
      <p>
        Phone: 05232 9287212
        <br />
        E-mail: contact@atslega.network
      </p>
    </Container>
  )
}

const SiteNoticeDE: NextPage = () => {
  return (
    <Container>
      <h1>Impressum</h1>
      <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
      <p>
        Max Atslega
        <br />
        Holzhofstra&szlig;e 14C
        <br />
        32791 Lage
      </p>
      <h2>Kontakt</h2>
      <p>
        Telefon: 05232 9287212
        <br />
        E-Mail: contact@atslega.network
      </p>
    </Container>
  )
}

const SiteNotice: NextPage = () => {
  const intl = useIntl()

  return intl.locale == 'de' ? <SiteNoticeDE /> : <SiteNoticeEN />
}

export default SiteNotice
