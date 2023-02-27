/* External dependencies */
import React, { forwardRef, useCallback, useRef, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'

/* Internal dependencies */
import { getRootElement } from 'Utils/domUtils'
import * as Styled from './AlphaTopLayer.styled'
import { useAlphaTopLayerContext } from './AlphaTopLayerProvider'

interface AlphaTopLayerProps {}

const AlphaTopLayer = forwardRef(function AlphaTopLayer({
  show,
}, forwardedRef: React.Ref<HTMLDivElement>) {
  const { clicked, setClicked } = useAlphaTopLayerContext()

  if (!show) { return null }

  return ReactDOM.createPortal(
    (
      <Styled.Container
        ref={forwardedRef}
        style={{ pointerEvents: show ? 'all' : 'none' }}
        onPointerDown={() => setClicked(true)}
        onPointerUp={() => setClicked(false)}
      />
    ),
    getRootElement(),
  )
})

export default AlphaTopLayer
