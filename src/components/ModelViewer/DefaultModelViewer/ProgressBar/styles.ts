import styled, { css } from 'styled-components'

interface ProgressProps {
  color?: string
  position?: string
  show: boolean
}

interface BarProps {
  scale: number
}

export const Progress = styled.div<ProgressProps>`
  position: absolute;
  width: 100%;
  height: 6px;
  color: #d3d3d3c7;
  box-shadow: 0px 0px 2px 1px currentColor;
  border-radius: 10px;
  opacity: 0;
  transition: opacity 0.3s 0.3s;
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `};

  ${({ position }) =>
    position &&
    ((position === 'top' &&
      css`
        width: 100%;
        box-shadow: none;
        top: 0 !important;
        border-radius: 0;
        border: none;
      `) ||
      (position === 'middle' &&
        css`
          width: calc(100% / 3);
          top: calc(50% - 5px);
          left: calc(50% - 100% / 6);
        `) ||
      (position === 'bottom' &&
        css`
          width: 100%;
          box-shadow: none;
          bottom: 0 !important;
          border-radius: 0;
          border: none;
        `))};

  ${({ show }) =>
    show &&
    css`
      transition-delay: 0s;
      opacity: 1;
    `}
`
export const Bar = styled.div<BarProps>`
  width: 100%;
  height: 100%;
  background-color: currentColor;
  transform-origin: top left;
  transform: scaleX(${({ scale }) => scale});
`
