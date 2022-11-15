/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import { ModalActionProps } from './Modal.types'
import * as Styled from './Modal.styled'

export const ModalAction = forwardRef(function ModalAction({
  leftContent,
  rightContent,
  ...rest
}: ModalActionProps, forwardedRef: React.Ref<HTMLDivElement>) {
  if (!leftContent && !rightContent) { return null }

  return (
    <Styled.ActionContainer
      ref={forwardedRef}
      {...rest}
    >
      <div>
        { leftContent }
      </div>
      <div>
        { rightContent }
      </div>
    </Styled.ActionContainer>
  )
})
