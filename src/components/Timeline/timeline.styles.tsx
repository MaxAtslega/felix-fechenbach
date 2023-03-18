import styled from 'styled-components'

export const TimelineList = styled.ul`
  margin: 1rem 0;

  &,
  li {
    list-style: none;
    padding: 0;
  }

  li {
    padding-bottom: 1.5rem;
    border-left: 2px solid #000000;
    position: relative;
    padding-left: 20px;
    margin-left: 10px;
    &:before {
      content: '';
      width: 15px;
      height: 15px;
      background: white;
      border: 2px solid #000000;
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
