import styled from 'styled-components'

export const Title = styled.h1`
  margin: 0;
  font-size: 4.5rem;
`

export const SubTitle = styled.p`
  font-size: 1.5rem;
  margin: 0 0 20px 0;
`

export const Sidebar = styled.div`
  position: absolute;
  display: flex;
  width: 65px;
  height: 100%;
  border-right: 3px solid #000000;
  text-align: center;
  justify-content: center;
  align-items: center;

  span {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-weight: bold;
    font-size: 1.8rem;
  }
`

export const Container = styled.div`
  position: relative;
  height: 80vh;
  width: 100%;
  border-bottom: 3px solid #000000;

  &:before {
    position: absolute;
    font-size: 18rem;
    opacity: 0.012;
    z-index: -1;
    font-weight: 600;
    content: 'Felix Fechenbach';
  }
`

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  img {
    position: relative;
    height: 100%;
    width: auto;
    border-left: 3px solid #000000;
  }
`

export const ContentDiv = styled.div`
  padding-top: 8%;
  padding-right: 20px;
  padding-left: 105px;
`

export const FButton = styled.button`
  display: block;
  border: 3px solid #000000;

  margin: 20px 0 0 0;
  padding: 10px 30px;
  width: auto;

  background: transparent;

  color: inherit;
  font: inherit;

  line-height: normal;

  cursor: pointer;
`
