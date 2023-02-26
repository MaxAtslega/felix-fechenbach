import styled from 'styled-components'

export const Container = styled.aside`
  display: flex;
  position: fixed;
  top: 0;
  left: calc(100% - 70px);
  width: 70px;
  height: 100vh;
  border-left: 3px solid #000000;
  background: #ffffff;

  @media (max-width: 56rem) {
    left: calc(100% - 50px);
    width: 50px;
  }
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

    svg {
      height: 1.4rem;
      width: 1.4rem;
    }
  }
`

export const Title = styled.span`
  writing-mode: vertical-lr;
  font-size: 2.1rem;
  font-weight: 600;
`

export const LanguageSelector = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  background-color: transparent;
  outline: none;
  cursor: pointer;

  font-weight: 600;
  font-size: 1.1rem;

  &:hover {
    opacity: 0.8;
  }
`
