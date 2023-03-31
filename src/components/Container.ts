import styled from 'styled-components'

const Container = styled.div`
  min-width: 80%;
  max-width: 1120px;
  margin-left: auto;
  margin-right: auto;

  padding-left: ${({ theme }) => theme.spacing.md};
  padding-right: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.md};
`

export default Container
