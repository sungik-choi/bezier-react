/* Internal dependencies */
import { BezierComponentProps, ChildrenProps } from 'Types/ComponentProps'

export interface PortalContainerProps extends
  Omit<BezierComponentProps, 'as' | 'interpolation'>,
  ChildrenProps,
  React.HTMLAttributes<HTMLDivElement> {}
