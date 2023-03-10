/* External dependencies */
import React, { forwardRef, memo, Ref, useMemo } from 'react'

/* Internal dependencies */
import { Typography } from 'Foundation'
import {
  isString,
} from 'Utils/typeUtils'
import { IconSize, Icon, isIconName, LegacyIcon, isBezierIcon } from 'Components/Icon'
import { TEST_ID_MAP } from 'Components/KeyValueListItem/KeyValueListItem.const'
import { KeyItemProps } from './KeyItem.types'
import * as Styled from './KeyItem.styled'

function KeyItem(
  {
    className,
    interpolation,
    keyIcon,
    testId = TEST_ID_MAP.KEY_ITEM,
    children,
    ...props
  }: KeyItemProps,
  forwardedRef: Ref<HTMLDivElement>,
) {
  const KeyIcon = useMemo(() => {
    if (isIconName(keyIcon)) {
      return (
        <LegacyIcon
          size={IconSize.S}
          name={keyIcon}
          color="txt-black-dark"
        />
      )
    }

    if (isBezierIcon(keyIcon)) {
      return (
        <Icon
          size={IconSize.S}
          source={keyIcon}
          color="txt-black-dark"
        />
      )
    }

    return keyIcon
  }, [keyIcon])

  const KeyText = useMemo(() => {
    if (isString(children)) {
      return (
        <Styled.KeyText bold typo={Typography.Size12} truncated>
          { children }
        </Styled.KeyText>
      )
    }
    return children
  }, [children])

  return (
    <Styled.KeyContent
      data-testid={testId}
      {...props}
      ref={forwardedRef}
      interpolation={interpolation}
    >
      { KeyIcon }
      { KeyText }
    </Styled.KeyContent>
  )
}

export default memo(forwardRef(KeyItem))