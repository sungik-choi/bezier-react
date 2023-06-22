import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import ReactDOM from 'react-dom'

import { Typography } from '~/src/foundation'

import useEventHandler from '~/src/hooks/useEventHandler'
import useMergeRefs from '~/src/hooks/useMergeRefs'
import { getRootElement } from '~/src/utils/domUtils'
import {
  isArray,
  isEmpty,
  isString,
} from '~/src/utils/typeUtils'

import { Text } from '~/src/components/Text'

import {
  type LegacyTooltipContentProps,
  LegacyTooltipPosition,
} from './LegacyTooltip.types'
import {
  getReplacement,
  getTooltipStyle,
} from './utils'

import {
  Content,
  ContentWrapper,
  EllipsisableContent,
} from './LegacyTooltip.styled'

function getNewLineComponent(strContent: string) {
  return (
    strContent.split('\n').map((str, index) => {
      if (index === 0) {
        return (
          <Text key={str} typo={Typography.Size14}>
            { str }
          </Text>
        )
      }

      return (
        <React.Fragment key={str}>
          <br />
          <Text typo={Typography.Size14}>
            { str }
          </Text>
        </React.Fragment>
      )
    })
  )
}

function getContentComponent(content?: React.ReactNode) {
  if (isArray(content)) {
    return content.map(item => {
      if (isString(item)) {
        return getNewLineComponent(item)
      }

      return item
    })
  }

  if (isString(content)) {
    return getNewLineComponent(content)
  }

  return content
}

export const LegacyTooltipContent: React.FC<LegacyTooltipContentProps> = ({
  as,
  content,
  contentClassName,
  contentInterpolation,
  contentWrapperStyle: givenContentWrapperStyle,
  disabled = false,
  keepInContainer = false,
  placement = LegacyTooltipPosition.BottomCenter,
  tooltipContainer,
  offset = 4,
  allowHover = false,
  testId,
  forwardedRef,
}) => {
  const tooltipRef = useRef<HTMLDivElement>(null)
  const tooltipWrapperRef = useRef<HTMLDivElement>(null)
  const mergedRef = useMergeRefs<HTMLDivElement>(tooltipRef, forwardedRef)
  const [replacement, setReplacement] = useState(placement)

  const handleClickTooltip = useCallback((event: HTMLElementEventMap['click']) => {
    event.stopPropagation()
  }, [])

  useEventHandler(tooltipRef.current, 'click', handleClickTooltip)

  useEffect(() => {
    if (!tooltipRef.current) { return }
    const newPlacement = getReplacement({
      tooltip: tooltipRef.current,
      keepInContainer,
      placement,
    })
    setReplacement(newPlacement)
  }, [
    keepInContainer,
    placement,
  ])

  const ContentComponent = useMemo(() => getContentComponent(content), [content])

  const contentWrapperStyle = useMemo(() => {
    if (tooltipContainer) {
      return {
        ...givenContentWrapperStyle,
        ...getTooltipStyle({
          tooltipContainer,
          placement: replacement,
          offset,
          allowHover,
        }),
      }
    }

    return {}
  }, [
    tooltipContainer,
    givenContentWrapperStyle,
    replacement,
    offset,
    allowHover,
  ])

  return (
    ReactDOM.createPortal(
      <ContentWrapper
        ref={tooltipWrapperRef}
        disabled={disabled || isEmpty(content)}
        style={contentWrapperStyle}
      >
        <Content
          as={as}
          data-testid={testId}
          className={contentClassName}
          interpolation={contentInterpolation}
          ref={mergedRef}
        >
          <EllipsisableContent>
            { ContentComponent }
          </EllipsisableContent>
        </Content>
      </ContentWrapper>,
      getRootElement(),
    )
  )
}
