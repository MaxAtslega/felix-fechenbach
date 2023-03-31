import styled from 'styled-components'
import Link from 'next/link'

export const Item = styled.div`
  display: flex;
  width: 100%;

  @media (min-width: 40rem) {
    width: 50%;
  }
  @media (min-width: 56rem) {
    width: 33.3%;
  }
`

export const CardContainer = styled.div`
  width: 100%;
  margin: ${(props) => props.theme.spacing.md} ${(props) => props.theme.spacing.xs};

  img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    object-position: center;
  }
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 -${(props) => props.theme.spacing.xs};
`

export const Body = styled.div`
  p {
    margin: ${(props) => props.theme.spacing.xs} 0;
  }
  span {
    font-weight: 600;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.spacing.xs};

  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: 600;
`

export const StyledLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    opacity: 0.7;
  }
`
