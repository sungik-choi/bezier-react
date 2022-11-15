/* External dependencies */
import * as DialogPrimitive from '@radix-ui/react-dialog'

/* Internal dependencies */
import { styled } from 'Foundation'
import {
  Button,
  ButtonSize,
  ButtonColorVariant,
  ButtonStyleVariant,
} from 'Components/Button'
import { gap } from 'Utils/styleUtils'
import ModalAnimation from './ModalAnimation.styled'

export const DialogPrimitiveOverlay = styled(DialogPrimitive.Overlay)`
  position: fixed;
  inset: 0;
  background-color: var(--bgtxt-absolute-black-lighter);

  &[data-state='open'] {
    ${ModalAnimation.overlayShow}
  }

  &[data-state='closed'] {
    ${ModalAnimation.overlayHide}
  }
`

export const Content = styled.section`
  ${({ foundation }) => foundation?.rounding.round20}
  ${({ foundation }) => foundation?.elevation.ev4()}

  position: fixed;
  inset: 0;
  top: 50%;
  left: 50%;
  z-index: var(--z-index);

  box-sizing: border-box;
  width: var(--width);
  min-width: 360px;
  max-width: 100vw;
  height: fit-content;
  max-height: calc(100vh - 80px);
  padding: 24px;
  overflow-y: auto;
  color: var(--bg-grey-darkest);
  transform: translate(-50%, -50%);

  &[data-state='open'] {
    ${ModalAnimation.contentShow}
  }

  &[data-state='closed'] {
    ${ModalAnimation.contentHide}
  }

  &:focus {
    outline: none;
  }
`

export const ContentAndActionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  ${gap(16)}
`

export const ContentContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  word-break: break-word;
  ${gap(12)}
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  ${gap(12)}
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  ${gap(6)}
`

export const HeadingGroup = styled.hgroup`
  display: flex;
  flex: 1;
  flex-direction: column-reverse;
  ${gap(4)}
`

const CLOSE_ICON_BUTTON_SIZE = ButtonSize.M
const CLOSE_ICON_BUTTON_MARGIN_X = -6
const CLOSE_ICON_BUTTON_MARGIN_Y = -6

export const CloseIconButton = styled(Button).attrs({
  size: CLOSE_ICON_BUTTON_SIZE,
  leftContent: 'cancel',
  colorVariant: ButtonColorVariant.MonochromeDark,
  styleVariant: ButtonStyleVariant.Tertiary,
})`
  position: absolute;
  top: ${CLOSE_ICON_BUTTON_MARGIN_X}px;
  right: ${CLOSE_ICON_BUTTON_MARGIN_Y}px;
`

export const CloseIconButtonSpacer = styled(Button).attrs({
  forwardedAs: 'div',
  size: CLOSE_ICON_BUTTON_SIZE,
})`
  margin-top: ${CLOSE_ICON_BUTTON_MARGIN_X}px;
  margin-right: ${CLOSE_ICON_BUTTON_MARGIN_Y}px;
  pointer-events: none;
  visibility: hidden;
`

export const ActionContainer = styled.footer`
  display: flex;
  justify-content: space-between;
`
