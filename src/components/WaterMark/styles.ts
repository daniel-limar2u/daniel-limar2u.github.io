import styled, { css } from 'styled-components'
import R2U from './R2U.svg'
import R2UHover from './R2UHover.svg'

interface WaterMarkProps {
  position?: string
}

export const Icon = styled.div<WaterMarkProps>`
  a {
    content: url(${R2U});
    height: 22px;
    position: fixed;
    z-index: 999999;
    margin: '10px';
    ${(props) => {
      const position = props.position ? props.position.toLowerCase() : ''
      return css`
        ${position.includes('left') && 'left: 0;'}
        ${position.includes('right') && 'right: 0;'}
        ${position.includes('bottom') && 'bottom: 0;'}
        ${position.includes('top') && 'top: 0;'}
        ${position.includes('center') && 'left: 0; right: 0; margin: auto;'}
        ${position.includes('absolute') && 'position: absolute;'}
      `
    }};
  }
  a:hover {
    content: url(${R2UHover});
  }
`
