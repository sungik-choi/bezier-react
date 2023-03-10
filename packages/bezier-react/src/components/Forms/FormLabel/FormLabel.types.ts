/* Internal dependencies */
import { BezierComponentProps, ChildrenProps, IdentifierProps } from 'Types/ComponentProps'
import { TextProps } from 'Components/Text'

interface FormLabelOptions {
  /**
   * The id of the element the label is bound to.
   */
  htmlFor?: string

  /**
   * Help tooltip content of the label.
   */
  help?: React.ReactNode

  /**
   * Hides content from the screen in an accessible way.
   * @default false
   */
  hidden?: boolean
}

export default interface FormLabelProps extends
  BezierComponentProps,
  ChildrenProps,
  TextProps,
  Partial<IdentifierProps>,
  FormLabelOptions {}
