import styled, { css, createGlobalStyle } from 'styled-components'

interface BackgroundProps {
  expanded: boolean
  color?: string
}

export const Exit = styled.button`
  width: 18px;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  margin: 12px;
  padding: 3px;
  background: none !important;
  border: none !important;
  outline: none;
  img {
    width: 100%;
  }
`

export const Background = styled.div<BackgroundProps>`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ color }) => color};
  z-index: 1;
  overflow-y: auto;
  ${({ expanded }) =>
    expanded &&
    css`
      display: block;
    `};
`

export const GlobalStyle = createGlobalStyle<BackgroundProps>`
  ${({ expanded }) =>
    expanded &&
    css`
      html {
        overflow: hidden;
      }
      body {
        overflow: hidden;
      }
    `};
`
