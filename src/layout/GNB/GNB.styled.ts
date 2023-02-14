/* Internal dependencies */
import { styled } from '../../foundation'
import GNBProps from './GNB.types'

export const GNB_WIDTH = 68

const GNB = styled.div<GNBProps>`
  z-index: 10000;
  display: flex;
  flex: none;
  flex-direction: column;
  align-items: center;
  width: ${GNB_WIDTH}px;
  height: 100%;
  background-color: ${({ foundation }) => foundation?.theme?.['bg-gnb']};
  ${({ foundation }) =>
    foundation?.border?.getBorder(
      1,
      foundation?.theme?.['bdr-black-light'],
      { top: false, right: true, bottom: false, left: false },
    )};
  ${({ foundation }) => foundation?.transition?.getTransitionsCSS('background-color')}
`

export default GNB