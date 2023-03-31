import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: relative;
`

export const Sidebar = styled.div`
  position: absolute;
  display: flex;
  width: 65px;
  height: 100%;
  border-right: 3px solid #000000;
  justify-content: center;
  align-items: start;
  z-index: 1;

  span {
    margin-top: ${(props) => props.theme.spacing.md};
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSizes.lg};
  }

  ${(props) => props.theme.media.xl} {
    display: none;
  }
`

export const Wrapper = styled.div`
  position: relative;
  min-width: 80%;
  max-width: 1120px;

  margin-left: auto;
  margin-right: auto;

  padding-left: ${(props) => props.theme.spacing.md};
  padding-right: ${(props) => props.theme.spacing.md};
  padding-top: ${(props) => props.theme.spacing.md};

  @media (max-width: 1320px) {
    padding: ${(props) => props.theme.spacing.md} ${(props) => props.theme.spacing.md}
      ${(props) => props.theme.spacing.md} 105px;
  }

  ${(props) => props.theme.media.xl} {
    padding: 20px;
  }
`
