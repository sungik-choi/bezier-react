/* External dependencies */
import React, { useCallback, useEffect, useRef, useState } from 'react'

declare global {
  interface EventTarget {
    closest?: (selector: string) => Element | null
  }
}

export interface Position {
  x: number
  y: number
}

export interface MovableElementProps {
  nonAllowedTargetSelectors?: string[]
  children?: React.ReactNode
}

const updateTranslation = (target: HTMLElement, position: Position) => {
  target.style.transform = `translate(${position.x}px, ${position.y}px)`
}

function MovableElement({
  nonAllowedTargetSelectors = [],
  children,
}: MovableElementProps) {
  const movableRef = useRef<HTMLDivElement>(null)
  const currentMousePosition = useRef<Position>({ x: 0, y: 0 })
  const targetTranslation = useRef<Position>({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)

  const startDrag = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (nonAllowedTargetSelectors.some(selector => event.target?.closest?.(selector))) {
      return
    }

    currentMousePosition.current = {
      x: event.clientX,
      y: event.clientY,
    }
    setIsDragging(true)
  }, [nonAllowedTargetSelectors])

  const stopDrag = useCallback((event: MouseEvent) => {
    event.stopPropagation()
    setIsDragging(false)
  }, [])

  const handleDrag = useCallback((event: MouseEvent) => {
    if (!movableRef.current) { return }

    const originRect = movableRef.current.getBoundingClientRect()
    const gapX = event.clientX - currentMousePosition.current.x
    const gapY = event.clientY - currentMousePosition.current.y
    const translatedX = targetTranslation.current.x + (
      originRect.left + gapX < 0 || originRect.right + gapX > window.innerWidth ? 0 : gapX
    )
    const translatedY = targetTranslation.current.y + (
      originRect.top + gapY < 0 || originRect.bottom + gapY > window.innerHeight ? 0 : gapY
    )

    targetTranslation.current = {
      x: translatedX,
      y: translatedY,
    }
    currentMousePosition.current = {
      x: event.clientX,
      y: event.clientY,
    }

    updateTranslation(movableRef.current, targetTranslation.current)
  }, [])

  useEffect(function setDragHandler() {
    if (isDragging) {
      document.addEventListener('mousemove', handleDrag)
      return function cleanUp() {
        document.removeEventListener('mousemove', handleDrag)
      }
    }
    return undefined
  }, [
    handleDrag,
    isDragging,
  ])

  // NOTE(@tigger) - wrapper 밖에서 mouseUp 이벤트가 발생하는 경우에 대한 대응
  useEffect(function deactivateMouseDragState() {
    document.addEventListener('mouseup', stopDrag)
    return function cleanUp() {
      document.removeEventListener('mouseup', stopDrag)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div ref={movableRef} onMouseDown={startDrag}> { children } </div>
}

export default MovableElement
