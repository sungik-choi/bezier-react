/* External dependencies */
import { styled } from '@channel.io/bezier-react-foundation'
import type { ColorProps } from '@channel.io/bezier-react-system'

/* Internal dependencies */
import type TextProps from './Text.types'

interface TextStyledProps extends ColorProps {
  margintop: number
  marginright: number
  marginbottom: number
  marginleft: number
}

function getMargin({
  margintop,
  marginright,
  marginbottom,
  marginleft,
}: TextStyledProps): string {
  return `${margintop}px ${marginright}px ${marginbottom}px ${marginleft}px`
}

const Text = styled.span<TextProps & TextStyledProps>`
  ${props => props.typo};
  margin: ${getMargin};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  font-weight: ${props => (props.bold ? 600 : 'normal')};
  color: ${({ foundation, color }) => (color && foundation?.theme?.[color]) || 'inherit'};

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS('color')}
`

export default Text