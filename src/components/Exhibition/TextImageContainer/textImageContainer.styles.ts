import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;

  @media screen and (max-width: 1000px) {
    flex-flow: column;
  }
`

export const ImageContainer = styled.div`
  max-width: 40%;

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  @media screen and (max-width: 1000px) {
    padding: 0;
    order: 0;
    max-width: 100%;

    img {
      width: 100%;
    }
  }
`

export const TextContainer = styled.div`
  text-align: left;
  flex-basis: 0;
  flex-grow: 1;
  padding-right: 4rem;

  @media screen and (max-width: 1000px) {
    padding: 0;
    order: 2;
  }
`
