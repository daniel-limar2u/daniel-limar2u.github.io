import styled, { css } from 'styled-components'

interface BackgroundProps {
  expanded: boolean
}

export const Background = styled.div<BackgroundProps>`
  display: none;
  position: fixed;
  z-index: 9999999;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  ${({ expanded }) =>
    expanded &&
    css`
      display: block;
    `};
`
export const Exit = styled.button`
  width: 26px;
  height: auto;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999999;
  margin: 12px;
  padding: 3px;

  cursor: pointer;
  background: none !important;
  border: none !important;
  outline: none;
  img {
    width: 100%;
  }
`
export const Expand = styled.button`
  padding: 12px;
  position: absolute;
  bottom: 0px;
  right: 0px;
  z-index: 999999;
  cursor: pointer;
  background: none !important;
  border: none !important;
  outline: none;
  transition: opacity 2s;
  img {
    transition: 0.5s ease;
    width: 24px;
    height: 24px;
    backface-visibility: hidden;
  }
`
