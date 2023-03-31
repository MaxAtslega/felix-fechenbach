import styled from 'styled-components'

export const Container = styled.aside`
  display: flex;
  position: fixed;
  top: 0;
  left: calc(100% - 70px);
  width: 70px;
  height: 100vh;
  border-left: 3px solid ${(props) => props.theme.colors.neutral};
  background: ${(props) => props.theme.colors.white};

  ${(props) => props.theme.media.lg} {
    left: calc(100% - 50px);
    width: 50px;
  }

  ${(props) => props.theme.media.xs} {
    display: none;
  }
`
export const Content = styled.div`
  padding-top: ${(props) => props.theme.spacing.md};
  width: 100%;
  text-align: center;
`

export const Footer = styled.div`
  bottom: ${(props) => props.theme.spacing.md};
  width: 100%;
  position: absolute;

  ul {
    padding: 0;
  }
  li {
    padding-top: ${(props) => props.theme.spacing.md};
    list-style: none;
    font-size: ${(props) => props.theme.fontSizes.sm};

    svg {
      height: 1.4rem;
      width: 1.4rem;
    }
  }
`

export const Title = styled.span`
  writing-mode: vertical-lr;
  font-size: ${(props) => props.theme.fontSizes.custom(2)};
  font-weight: 600;

  ${(props) => props.theme.media.lg} {
    font-size: ${(props) => props.theme.fontSizes.lg};
  }
`

export const LanguageSelector = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  background-color: transparent;
  color: ${(props) => props.theme.colors.neutral};
  outline: none;
  cursor: pointer;

  font-weight: 600;
  font-size: ${(props) => props.theme.fontSizes.md};

  &:hover {
    opacity: 0.7;
  }
`

export const GitHubButton = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  background-color: transparent;
  color: ${(props) => props.theme.colors.neutral};
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`
