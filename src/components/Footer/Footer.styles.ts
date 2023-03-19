import styled from 'styled-components'

export const FooterContainer = styled.footer`
  margin: 0 0 20px 0;
  width: 100%;

  border-top: solid 3px #000000;
`

export const Content = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  @media (max-width: 780px) {
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
`

export const Nav = styled.nav`
  ul {
    padding: 0;
    margin: 0 0 0 -1rem;
  }
  li {
    list-style: none;
    float: left;
    padding-left: 1rem;
  }

  @media (max-width: 780px) {
    padding-bottom: 1rem;
  }

  @media (max-width: 316px) {
    li {
      width: 100%;
    }
  }
`
