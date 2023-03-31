import styled from 'styled-components'

export const FooterContainer = styled.footer`
  margin: 0 0 ${(props) => props.theme.spacing.md} 0;
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
    margin: 0 0 0 -${(props) => props.theme.spacing.md};
  }
  li {
    list-style: none;
    float: left;
    padding-left: ${(props) => props.theme.spacing.md};
  }

  @media (max-width: 780px) {
    padding-bottom: ${(props) => props.theme.spacing.md};
  }

  @media (max-width: 316px) {
    li {
      width: 100%;
    }
  }
`
