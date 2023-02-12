import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 80px;
  min-height: 100vh;
  border-right: 5px solid #000000;
`

export const Main = styled.div`
  width: 100%;
  max-width: 1280px;
  min-width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
`

export const Sidebar = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: calc(100% - 80px);
  width: 80px;
  height: 100vh;
  justify-content: center;
  padding-top: 20px;
`

export const SidebarTitle = styled.span`
  writing-mode: vertical-lr;
  font-size: 34px;
  font-weight: 600;
`
