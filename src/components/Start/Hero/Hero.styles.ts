import styled from 'styled-components'

export const Title = styled.h1`
  margin: 0;
  font-size: ${(props) => props.theme.fontSizes.custom(4.5)};

  ${(props) => props.theme.media.xl} {
    font-size: ${(props) => props.theme.fontSizes.custom(2.5)};
  }
`

export const SubTitle = styled.p`
  font-size: ${(props) => props.theme.fontSizes.lg};
  margin: 0 0 ${(props) => props.theme.spacing.md} 0;

  ${(props) => props.theme.media.xl} {
    font-size: ${(props) => props.theme.fontSizes.md};
  }
`

export const Sidebar = styled.div`
  position: absolute;
  display: flex;
  width: 65px;
  height: 100%;
  border-right: 3px solid ${(props) => props.theme.colors.neutral};
  text-align: center;
  justify-content: center;
  align-items: center;
  z-index: 1;

  span {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-weight: bold;
    font-size: 1.8rem;
  }

  ${(props) => props.theme.media.xl} {
    display: none;
  }
`

export const Container = styled.section`
  position: relative;
  height: 80vh;
  width: 100%;
  border-bottom: 3px solid ${(props) => props.theme.colors.neutral};

  @media (max-width: 980px) {
    height: auto;
  }
`

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  overflow: hidden;

  img {
    position: relative;
    height: 100%;
    width: auto;
    border-left: 3px solid ${(props) => props.theme.colors.neutral};

    ${(props) => props.theme.media.lg} {
      display: none;
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding-top: 8%;
  padding-right: ${(props) => props.theme.spacing.md};
  padding-left: 105px;

  img {
    display: none;
    border: 3px solid ${(props) => props.theme.colors.neutral};
    width: 40%;
    margin-left: ${(props) => props.theme.spacing.md};
    margin-bottom: ${(props) => props.theme.spacing.md};
    height: auto;
    float: right;

    ${(props) => props.theme.media.lg} {
      display: inline-block;
    }
  }

  ${(props) => props.theme.media.xxl} {
    padding: ${(props) => props.theme.spacing.md} ${(props) => props.theme.spacing.md}
      ${(props) => props.theme.spacing.md} 105px;
  }

  ${(props) => props.theme.media.xl} {
    padding: ${(props) => props.theme.spacing.md};
  }
`

export const FButton = styled.button`
  display: block;
  border: 3px solid ${(props) => props.theme.colors.neutral};

  margin: ${(props) => props.theme.spacing.md} 0 ${(props) => props.theme.spacing.md} 0;
  padding: 10px 30px;
  width: auto;

  background: transparent;

  color: inherit;
  font: inherit;

  line-height: normal;

  cursor: pointer;
`
