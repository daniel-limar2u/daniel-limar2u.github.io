import styled, { css } from 'styled-components'

import GoogleViewer from './GoogleViewer'

const DefaultModelViewer = styled(GoogleViewer)`
  opacity: 1 !important;
  min-height: 220px;
  width: 100%;
  height: 100%;
  box-shadow: 0px 2px 12px #f2f2f2;
  ${({ big }) =>
    big &&
    css`
      background-color: #ffffff;
      width: 60vw;
      height: 60vh;
      position: fixed;
      top: 50%;
      left: 50%;
      margin-left: calc(-1 * calc(60vw / 2));
      margin-top: calc(-1 * calc(60vh / 2));
      z-index: 99999;
      box-shadow: none;
    `};
`

export default DefaultModelViewer
