import styled from 'styled-components'

export const Container = styled.aside`
  display: flex;
  position: fixed;
  top: 0;
  left: calc(100% - 80px);
  width: 80px;
  height: 100vh;
`
export const Content = styled.div`
  padding-top: 20px;
  width: 100%;
  text-align: center;
`

export const Footer = styled.div`
  bottom: 20px;
  width: 100%;
  position: absolute;

  ul {
    padding: 0;
  }
  li {
    padding-top: 20px;
    list-style: none;
    font-size: 14px;
  }
`

export const Title = styled.span`
  writing-mode: vertical-lr;
  font-size: 34px;
  font-weight: 600;
`

export const LanguageSelector = styled.span`
  font-weight: 600;
  font-size: 16px;
  text-decoration: underline;
`
