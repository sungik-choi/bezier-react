import React, { createContext, useRef, useCallback, useMemo, useContext } from 'react'

const AlphaTopLayerContext = createContext(null)

function AlphaTopLayerProvider({ children }) {
  const clicked = useRef(false)
  const setClicked = useCallback((value) => {
    clicked.current = value
  }, [])

  const contextValue = useMemo(() => ({
    clicked,
    setClicked,
  }), [setClicked])

  return (
    <AlphaTopLayerContext.Provider value={contextValue}>
      { children }
    </AlphaTopLayerContext.Provider>
  )
}

export function useAlphaTopLayerContext() {
  return useContext(AlphaTopLayerContext)
}

export default AlphaTopLayerProvider
