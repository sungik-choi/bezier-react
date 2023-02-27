/* External dependencies */
import React, { useCallback, useEffect, useMemo } from 'react'
import {
  Overlay,
  Typography,
  AvatarSize,
  ButtonColorVariant,
  ButtonSize,
  IconSize,
  Icon,
  HStack,
  StackItem,
  VStack,
  Avatar,
  ArrowRightIcon,
  Text,
  TagBadgeSize,
  CallOffIcon,
  CallIcon,
  type OverlayProps,
} from '../../index'

/* Internal dependencies */
import MovableElement from '../MovableElement/MovableElement'
import AlphaTopLayer from '../AlphaTopLayer/AlphaTopLayer'
import * as Styled from './RingModal.styled'

interface RingModalProps extends OverlayProps {
  onHide: () => void
  onConfirm: () => void
  onReject: () => void
  zIndex: number
  enableClickOutside: boolean
}
function RingModal({
  onHide,
  onConfirm,
  onReject,
  zIndex,
  ...overlayProps
}: RingModalProps) {
  return (
    <Overlay
      style={{ width: 0, pointerEvents: 'all' }}
      containerStyle={{ zIndex: 100000000, width: 'fit-content' }}
      {...overlayProps}
    >
      <MovableElement nonAllowedTargetSelectors={['button']}>
        <Styled.Wrapper>
          <Styled.CancelButton onClick={onHide} />
          <VStack spacing={20} align="center">
            <StackItem>
              <Styled.VStackForTextEllipsis spacing={6} align="center">
                <StackItem>
                  <Avatar avatarUrl="" name="" size={AvatarSize.Size48} />
                </StackItem>
                <Styled.StackItemForTextEllipsis>
                  <Styled.TextWithEllipsis
                    color="txt-black-darkest"
                    typo={Typography.Size18}
                    bold
                  >
                    123
                  </Styled.TextWithEllipsis>
                </Styled.StackItemForTextEllipsis>
              </Styled.VStackForTextEllipsis>
            </StackItem>
          </VStack>
        </Styled.Wrapper>
      </MovableElement>
    </Overlay>
  )
}

export default RingModal
