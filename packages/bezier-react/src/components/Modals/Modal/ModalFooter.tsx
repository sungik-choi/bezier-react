/* External dependencies */
import React, { forwardRef } from 'react'

/* Internal dependencies */
import { ModalFooterProps } from './Modal.types'
import * as Styled from './Modal.styled'

export const ModalFooter = forwardRef(function ModalFooter({
  leftContent,
  rightContent,
  ...rest
}: ModalFooterProps, forwardedRef: React.Ref<HTMLDivElement>) {
  if (!leftContent && !rightContent) { return null }

  return (
    <Styled.FooterContainer
      ref={forwardedRef}
      {...rest}
    >
      <div>
        { leftContent }
      </div>
      <div>
        { rightContent }
      </div>
    </Styled.FooterContainer>
  )
})
