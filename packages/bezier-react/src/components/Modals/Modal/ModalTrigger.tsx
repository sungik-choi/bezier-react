/* External dependencies */
import React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

/* Internal dependencies */
import { ModalTriggerProps } from './Modal.types'

export function ModalTrigger({
  children,
}: ModalTriggerProps) {
  return (
    <DialogPrimitive.Trigger asChild>
      { children }
    </DialogPrimitive.Trigger>
  )
}
