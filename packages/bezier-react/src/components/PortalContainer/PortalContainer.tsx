/* External dependencies */
import React, { forwardRef, useMemo, useRef, useContext, createContext } from 'react'

/* Internal dependencies */
import useMergeRefs from 'Hooks/useMergeRefs'
import { PortalContainerProps } from './PortalContainer.types'

const PortalContainerContext = createContext<HTMLElement | null>(null)

export function usePortalContainerContext() {
  return useContext(PortalContainerContext)
}

export const PortalContainer = forwardRef(function PortalContainer({
  children,
  style,
  ...rest
}: PortalContainerProps, forwardedRef: React.Ref<HTMLDivElement>) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const mergedRef = useMergeRefs(containerRef, forwardedRef)

  const containerStyle = useMemo((): React.CSSProperties => ({
    position: 'relative',
    zIndex: 0,
    ...style,
  }), [style])

  return (
    <div
      ref={mergedRef}
      style={containerStyle}
      {...rest}
    >
      <PortalContainerContext.Provider value={containerRef.current}>
        { children }
      </PortalContainerContext.Provider>
    </div>
  )
})
