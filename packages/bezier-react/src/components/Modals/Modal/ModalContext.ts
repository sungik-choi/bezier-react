/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { ModalContextValue } from './Modal.types'

const ModalContext = React.createContext<ModalContextValue>({
  showCloseIcon: false,
})

export default ModalContext
