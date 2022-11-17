/* External dependencies */
import React, { forwardRef, useMemo } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { isNumber } from 'lodash-es'

/* Internal dependencies */
import ModalContentContext from './ModalContentContext'
import { ModalContentProps, ModalContentContextValue } from './Modal.types'
import * as Styled from './Modal.styled'

export const ModalContent = forwardRef(function ModalContent({
  children,
  style,
  showCloseIcon = false,
  width = 'max-content',
  zIndex = 'auto',
  ...rest
}: ModalContentProps, forwardedRef: React.Ref<HTMLDivElement>) {
  const contentStyle = useMemo((): React.CSSProperties & {
    '--width': ModalContentProps['width']
    '--z-index': ModalContentProps['zIndex']
  } => ({
    ...style,
    '--width': isNumber(width) ? `${width}px` : width,
    '--z-index': zIndex,
  }), [
    style,
    width,
    zIndex,
  ])

  const contextValue = useMemo((): ModalContentContextValue => ({
    showCloseIcon,
  }), [showCloseIcon])

  return (
    <ModalContentContext.Provider value={contextValue}>
      <Styled.DialogPrimitiveOverlay />
      <DialogPrimitive.Content asChild>
        <Styled.Content
          ref={forwardedRef}
          style={contentStyle}
          {...rest}
        >
          <Styled.ContentContainer>
            { children }
          </Styled.ContentContainer>

          { /** NOTE: To prevent focusing first on the close button when opening the modal,
          place the close button behind. */ }
          { showCloseIcon && (
            <DialogPrimitive.Close asChild>
              <Styled.CloseIconButton />
            </DialogPrimitive.Close>
          ) }
        </Styled.Content>
      </DialogPrimitive.Content>
    </ModalContentContext.Provider>
  )
})
