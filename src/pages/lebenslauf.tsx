import { NextPage } from 'next'
import Container from '@/components/Container'
import React from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import Timeline from '@/components/Timeline'
import SEO from '@/components/SEO'

const timelineDE = [
  {
    time: '28.01.1894',
    body: 'geboren in Mergentheim',
  },
  {
    time: '1903-1907',
    body: 'Schulzeit - jüdische Elementarschule in der Domerschulstraße',
  },
  {
    time: 'bis 1910',
    body: 'kaufmännische Ausbildung - Schuhwarengroßhandlung in Würzburg',
  },
  {
    time: '1910',
    body: 'Umzug – Semmelstraße 21, Würzburg',
  },
  {
    time: '1911',
    body: 'Arbeit in Frankfurt; Entlassung wegen Teilnahme an einem Streik',
  },
  {
    time: '1912 - 1914',
    body: 'Tätigkeit im Arbeitersekretariat in München; aktive Mitarbeit in der Jugendsektion der SPD',
  },
  {
    time: '1914 - 1915',
    body: 'Soldat im Ersten Weltkrieg; Verwundung an der Westfront',
  },
  {
    time: '1918 - 1922',
    body: 'Mitarbeiter von Kurt Eisner in der bayrischen Revolution; journalistische Arbeit für Zeitungen im In- und Ausland; Verurteilung wegen "Landesverrates"',
  },
  {
    time: '1922 - 1924',
    body: 'Haft im Zuchthaus Ebrach; vorzeitige Entlassung aufgrund öffentlichen Drucks gegen das Urteil',
  },
  {
    time: '1924 - 1929',
    body: 'Verlagsredakteur beim Dietz-Verlag in Berlin Reportagen fur den "Vorwärts" und Unterstützung der "Kinderfreunde-Bewegung"',
  },
  {
    time: '1929 - 1933',
    body: 'Redakteur beim Detmolder "Volksblatt" und aktiver Gegner der Nationalsozialisten; Verhaftung und Schutzhaft; Briefe an seine Frau Irma,Erzählungen und Gedichte',
  },
  {
    time: '07.08.1933',
    body: 'Beim Transport von Detmold nach Dachau im Kleinenberger Wald zwischen Paderborn und Scherfede "auf der Flucht erschossen", begraben auf dem jüdischen Friedhof in Rimbeck',
  },
]

const timelineEN = [
  {
    time: '01/28/1894',
    body: 'born in Mergentheim',
  },
  {
    time: '1903-1907',
    body: 'School years - Jewish primary schools in Domerschulstraße',
  },
  {
    time: 'until 1910',
    body: 'commercial training - wholesale shoe shop in Würzburg',
  },
  {
    time: '1910',
    body: 'Relocation - Semmelstraße 21, Würzburg',
  },
  {
    time: '1911',
    body: 'Work in Frankfurt; dismissal due to participation in a strike',
  },
  {
    time: '1912 - 1914',
    body: "Work in the workers' secretariat in Munich; active participation in the youth section of the SPD",
  },
  {
    time: '1914 - 1915',
    body: 'Soldier in the First World War; wounded on the Western Front',
  },
  {
    time: '1918 - 1922',
    body: 'Associate of Kurt Eisner in the Bavarian Revolution; journalistic work for newspapers at home and abroad; convicted of "treason"',
  },
  {
    time: '1922 - 1924',
    body: 'Imprisonment in Ebrach penitentiary; early release due to public pressure against the sentence',
  },
  {
    time: '1924 - 1929',
    body: 'Editor at the Dietz publishing house in Berlin; reports for the "Vorwärts" and support for the "Kinderfreunde" movement',
  },
  {
    time: '1929 - 1933',
    body: 'Editor at the Detmold "Volksblatt" and active opponent of the National Socialists; arrest and protective custody; letters to his wife Irma, stories and poems',
  },
  {
    time: '08/07/1933',
    body: 'Shot during transport from Detmold to Dachau in the Kleinenberg forest between Paderborn and Scherfede, buried in the Jewish cemetery in Rimbeck',
  },
]

const Lebenslauf: NextPage = () => {
  const intl = useIntl()
  return (
    <Container>
      <SEO title="Lebenslauf" />
      <h1>
        <FormattedMessage id="cv.title" />
      </h1>
      <p>
        <FormattedMessage id="cv.introduction1" />
      </p>
      <p>
        <FormattedMessage id="cv.introduction2" />
      </p>
      <Timeline timeline={intl.locale == 'de' ? timelineDE : timelineEN} />
    </Container>
  )
}

export default Lebenslauf
