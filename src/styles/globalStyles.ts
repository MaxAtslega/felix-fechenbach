import { createGlobalStyle } from 'styled-components'
import normalize from '@/styles/normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  body {
    margin: 0;
    padding: 0;
    font-size: ${(props) => props.theme.fontSizes.md}; 
  }
  main {
    display: block;
  }
  h1 {
    font-size: ${(props) => props.theme.fontSizes.custom(2)};
    margin: 0  0 0.67em 0;
  }
  
  a {
    color: ${(props) => props.theme.colors.neutral};
    text-decoration: none;
    overflow-wrap: break-word;
    word-break: break-word;

    svg {
      height: 1.4rem;
      width: 1.4rem;
    }

    &:hover {
      opacity: 0.7;
    }
  }
`

export default GlobalStyle
