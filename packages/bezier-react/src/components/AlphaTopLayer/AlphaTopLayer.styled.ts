/* Internal dependencies */
import { styled } from 'Foundation'
import { ZIndex } from 'Constants/ZIndex'

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${ZIndex.Important};
  width: 0;
`
