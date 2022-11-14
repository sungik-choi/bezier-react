/* Internal dependencies */
import ToastProvider from './ToastProvider'
import ToastProps, {
  ToastPlacement,
  ToastAppearance,
  ToastIconColor,
  ToastPreset,
  ToastOptions,
  ToastId,
  ToastType,
  ToastContent,
} from './Toast.types'

export { default as useToast } from './useToast'

export type {
  ToastProps,
  ToastOptions,
  ToastId,
  ToastType,
  ToastContent,
}

export {
  ToastProvider,
  ToastPreset,
  ToastPlacement,
  ToastAppearance,
  ToastIconColor,
}
