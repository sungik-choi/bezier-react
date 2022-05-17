/* External dependencies */
import { omit, pick } from 'lodash-es'
import type { BezierComponentProps } from '@channel.io/bezier-react-system'

const bezierComponentPropsKeys: Array<keyof BezierComponentProps> = [
  'as',
  'testId',
  'style',
  'className',
  'interpolation',
]

export const omitBezierComponentProps = <Props extends BezierComponentProps>(props: Props):
Omit<Props, keyof BezierComponentProps> => omit(props, bezierComponentPropsKeys)

export const pickBezierComponentProps = <Props extends BezierComponentProps>(props: Props):
Pick<Props, keyof BezierComponentProps> => pick(props, bezierComponentPropsKeys)

