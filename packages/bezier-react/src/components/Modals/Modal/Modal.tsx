/* External dependencies */
import React, { useCallback } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { noop } from 'lodash-es'

/* Internal dependencies */
import { getRootElement } from 'Utils/domUtils'
import { ModalProps } from './Modal.types'

export function Modal({
  children,
  show,
  targetElement = getRootElement(),
  onShow = noop,
  onHide,
}: ModalProps) {
  const onOpenChange = useCallback<NonNullable<DialogPrimitive.DialogProps['onOpenChange']>>((open) => {
    const callback = open ? onShow : onHide
    callback()
  }, [
    onShow,
    onHide,
  ])

  return (
    <DialogPrimitive.Root
      open={show}
      onOpenChange={onOpenChange}
    >
      <DialogPrimitive.Portal container={targetElement}>
        { children }
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

