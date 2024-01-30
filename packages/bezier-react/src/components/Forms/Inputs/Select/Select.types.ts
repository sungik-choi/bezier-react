import { type BezierIcon } from '@channel.io/bezier-icons'

import type {
  AdditionalColorProps,
  AdditionalTestIdProps,
  AlphaAdditionalStylableProps,
  AlphaBezierComponentProps,
  ChildrenProps,
  SideContentProps,
  SizeProps,
} from '~/src/types/ComponentProps'
import { type ZIndex } from '~/src/types/Token'

import {
  type FormComponentProps,
  type FormFieldSize,
} from '~/src/components/Forms'
import type { OverlayProps } from '~/src/components/Overlay'

export interface SelectRef {
  handleClickTrigger(event: React.MouseEvent): void
  handleHideDropdown(): void
  getDOMNode(): Element | Text | null
}

interface SelectOwnProps {
  defaultFocus?: boolean
  placeholder?: string
  text?: string
  withoutChevron?: boolean
  dropdownContainer?: HTMLElement | null
  dropdownMarginX?: OverlayProps['marginX']
  dropdownMarginY?: OverlayProps['marginY']
  dropdownZIndex?: ZIndex
  dropdownPosition?: OverlayProps['position']
  onClickTrigger?: React.MouseEventHandler
  onHideDropdown?: () => void
}

export interface SelectProps extends
  AlphaBezierComponentProps,
  ChildrenProps,
  SizeProps<FormFieldSize>,
  SideContentProps<BezierIcon | React.ReactNode, BezierIcon | React.ReactNode>,
  AdditionalTestIdProps<['trigger', 'triggerText', 'dropdown']>,
  AlphaAdditionalStylableProps<'dropdown'>,
  AdditionalColorProps<['icon', 'text']>,
  FormComponentProps,
  SelectOwnProps {}
