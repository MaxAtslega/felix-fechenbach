import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 65px;
  border-bottom: 3px solid #000000;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 20px;
  height: 100%;
`
export const Nav = styled.nav`
  ul {
    padding: 0;
    margin: 0;

    li {
      list-style: none;
      float: left;
      padding-right: 20px;
    }
  }
`

export const StyledLink = styled.a`
  font-size: 1.1rem;
  color: #000000;
  text-decoration: none;

  svg {
    height: 1.4rem;
    width: 1.4rem;
  }

  &:hover {
    opacity: 0.7;
  }
`

export const StyledIcon = styled.div`
  height: 1.2rem;
  width: 1.2rem;
  cursor: pointer;

  font-size: 1.2rem;

  &:hover {
    opacity: 0.7;
  }
`
