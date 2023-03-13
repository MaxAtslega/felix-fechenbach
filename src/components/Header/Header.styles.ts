import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 65px;
  border-bottom: 3px solid #000000;

  @media (max-width: 450px) {
    height: auto;
    border-bottom: none;
  }
`

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 100%;

  @media (max-width: 450px) {
    padding: 0;
    display: block;
  }
`

export const MobileMenuContainer = styled.div`
  width: 100%;
  padding: 20px;
  border-bottom: 3px solid #000000;
  display: none;

  @media (max-width: 450px) {
    display: block;
  }
`

export const Nav = styled.nav`
  width: 100%;

  ul {
    padding: 0;
    margin: 0;

    li {
      list-style: none;
      float: left;
      padding-right: 20px;
    }
  }

  @media (max-width: 450px) {
    display: none;
    background: #ffffff;

    ul li {
      float: none;
      padding: 20px 0;
      text-align: center;
      border-bottom: 3px solid #000000;
    }
  }

  @media (min-width: 450px) {
    display: block !important;
  }
`

export const MenuButton = styled.button`
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`
