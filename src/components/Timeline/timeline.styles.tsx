import styled from 'styled-components'

export const TimelineList = styled.ul`
  margin: ${(props) => props.theme.spacing.md} 0;

  &,
  li {
    list-style: none;
    padding: 0;
  }

  li {
    padding-bottom: ${(props) => props.theme.spacing.md};
    border-left: 2px solid ${(props) => props.theme.colors.neutral};
    position: relative;
    padding-left: ${(props) => props.theme.spacing.md};
    margin-left: 10px;
    &:before {
      content: '';
      width: 15px;
      height: 15px;
      background: ${(props) => props.theme.colors.white};
      border: 2px solid ${(props) => props.theme.colors.neutral};
      border-radius: 50%;
      position: absolute;
      left: -10px;
      top: 0px;
    }

    span {
      font-weight: 600;
      font-size: 1.1rem;
    }

    p {
      margin: 10px 0 0 0;
    }
  }
`
