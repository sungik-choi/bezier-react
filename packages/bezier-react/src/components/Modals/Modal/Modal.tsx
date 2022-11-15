/* External dependencies */
import React, { useCallback, useMemo, forwardRef } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { noop, isNumber } from 'lodash-es'

/* Internal dependencies */
import { getRootElement } from 'Utils/domUtils'
import ModalContext from './ModalContext'
import { ModalProps, ModalContextValue } from './Modal.types'
import * as Styled from './Modal.styled'

export const Modal = forwardRef(function Modal({
  children,
  style,
  show,
  showCloseIcon = false,
  width = 'max-content',
  zIndex = 'auto',
  targetElement = getRootElement(),
  onShow = noop,
  onHide,
  ...rest
}: ModalProps, forwardedRef: React.Ref<HTMLDivElement>) {
  const contentStyle = useMemo((): React.CSSProperties & {
    '--width': ModalProps['width']
    '--z-index': ModalProps['zIndex']
  } => ({
    ...style,
    '--width': isNumber(width) ? `${width}px` : width,
    '--z-index': zIndex,
  }), [
    style,
    width,
    zIndex,
  ])

  const onOpenChange = useCallback<NonNullable<DialogPrimitive.DialogProps['onOpenChange']>>((open) => {
    const callback = open ? onShow : onHide
    callback()
  }, [
    onShow,
    onHide,
  ])

  const contextValue = useMemo((): ModalContextValue => ({
    showCloseIcon,
  }), [showCloseIcon])

  return (
    <DialogPrimitive.Root
      open={show}
      onOpenChange={onOpenChange}
    >
      <DialogPrimitive.Portal container={targetElement}>
        <Styled.DialogPrimitiveOverlay />
        <DialogPrimitive.Content asChild>
          <Styled.Content
            ref={forwardedRef}
            style={contentStyle}
            {...rest}
          >
            <ModalContext.Provider value={contextValue}>
              <Styled.ContentAndActionContainer>
                { children }

                { /** NOTE: To prevent focusing first on the close button when opening the modal,
                place the close button behind. */ }
                { showCloseIcon && (
                  <DialogPrimitive.Close asChild>
                    <Styled.CloseIconButton />
                  </DialogPrimitive.Close>
                ) }
              </Styled.ContentAndActionContainer>
            </ModalContext.Provider>
          </Styled.Content>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
})

