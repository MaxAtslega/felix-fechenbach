import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 65px;
  border-bottom: 3px solid ${(props) => props.theme.colors.neutral};

  ${(props) => props.theme.media.sm} {
    height: auto;
    border-bottom: none;
  }
`

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 ${(props) => props.theme.spacing.md};
  height: 100%;

  ${(props) => props.theme.media.sm} {
    padding: 0;
    display: block;
  }
`

export const MobileMenuContainer = styled.div`
  width: 100%;
  padding: ${(props) => props.theme.spacing.md};
  border-bottom: 3px solid ${(props) => props.theme.colors.neutral};
  display: none;

  ${(props) => props.theme.media.sm} {
    display: block;
  }
`

export const Nav = styled.nav`
  width: 100%;
  display: block;

  ul {
    padding: 0;
    margin: 0;
    width: 100%;

    li {
      list-style: none;
      float: left;
      padding-right: ${(props) => props.theme.spacing.md};
      font-size: 1.1rem;
    }
  }

  ${(props) => props.theme.media.smMin} {
    display: block !important;
  }

  ${(props) => props.theme.media.sm} {
    display: none;
    background: ${(props) => props.theme.colors.white};

    ul li {
      float: none;
      padding: ${(props) => props.theme.spacing.md} 0;
      text-align: center;
      border-bottom: 3px solid ${(props) => props.theme.colors.neutral};
    }
  }
`

export const MenuButton = styled.button`
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.neutral};

  &:hover {
    opacity: 0.7;
  }
`
