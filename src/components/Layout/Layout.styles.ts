import styled from 'styled-components'

export const Container = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 70px;
  min-height: 100vh;

  ${(props) => props.theme.media.lg} {
    right: 50px;
  }

  ${(props) => props.theme.media.xs} {
    right: 0;
  }
`
