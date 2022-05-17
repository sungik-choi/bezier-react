/* External dependencies */
import type { BezierComponentProps } from '@channel.io/bezier-react-system'

interface DividerOptions {
  orientation: 'horizontal' | 'vertical'
  withoutSideIndent?: boolean
}

export default interface DividerProps extends
  BezierComponentProps,
  DividerOptions {}

export interface StyledDividerProps extends
  Pick<DividerProps, 'withoutSideIndent' | 'interpolation'> {}
