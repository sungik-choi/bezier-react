/* External dependencies */
import React from 'react'
import {
  css,
  styled,
  ellipsis,
  Text,
  Button,
  Icon,
  CancelIcon,
  IconSize,
  ButtonStyleVariant,
  ButtonColorVariant,
  ButtonSize,
  StackItem,
  HStack,
  VStack,
} from '../../index'

const RING_MODAL_WIDTH = 300
const RING_MODAL_PADDING = 30

export const Wrapper = styled.div`
  width: ${RING_MODAL_WIDTH}px;
  padding: ${RING_MODAL_PADDING}px;
  position: relative;
  user-select: none;
  cursor: move;
  
  ${({ foundation }) => foundation?.elevation?.ev3()}
  ${({ foundation }) => foundation?.rounding.round32}
`

export const CancelButton = styled(Button).attrs({
  styleVariant: ButtonStyleVariant.Tertiary,
  colorVariant: ButtonColorVariant.MonochromeLight,
  size: ButtonSize.S,
  leftContent: <Icon source={CancelIcon} size={IconSize.XS} color="txt-black-dark" />,
})`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const ringModalContentWidth = css`
  max-width: ${RING_MODAL_WIDTH - (2 * RING_MODAL_PADDING)}px;
`

export const HStackForTextEllipsis = styled(HStack)`
  ${ringModalContentWidth}
`

export const VStackForTextEllipsis = styled(VStack)`
  ${ringModalContentWidth}
`

export const StackItemForTextEllipsis = styled(StackItem).attrs({
  shrink: true,
  weight: 1,
})`
  max-width: 100%;
  overflow-x: hidden;
`

export const TextWithEllipsis = styled(Text)`
  display: block;
  ${ellipsis()}
`
