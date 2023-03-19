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
    margin-top: 20px;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-weight: bold;
    font-size: 1.8rem;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`

export const Wrapper = styled.div`
  position: relative;
  min-width: 80%;
  max-width: 1120px;

  margin-left: auto;
  margin-right: auto;

  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;

  @media (max-width: 1320px) {
    padding: 20px 20px 20px 105px;
  }

  @media (max-width: 1100px) {
    padding: 20px;
  }
`

export const Content = styled.div``
