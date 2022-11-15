/* Internal dependencies */
import { BezierComponentProps, SideContentProps, ChildrenProps } from 'Types/ComponentProps'

export enum ModalTitleSize {
  L = 'L',
  M = 'M',
}

interface ModalOptions {
  /**
   * Whether the modal should be shown or not.
   */
  show: boolean

  /**
   * Show close icon button that closes the modal when clicked.
   * @default false
   */
  showCloseIcon?: boolean

  /**
   * Width of the modal.
   * @default 'max-content'
   */
  width?: React.CSSProperties['width']

  /**
   * z-index of the modal content.
   * Rather than using this option, Please check modal is positioned in the proper stacking context.
   * @deprecated
   * @default 'auto'
   */
  zIndex?: React.CSSProperties['zIndex']

  /**
   * Specify a container element to portal the content into.
   * @default getRootElement()
   */
  targetElement?: HTMLElement | null

  /**
   * Callback function to be called when the modal is opened.
   * @default noop
   */
  onShow?: () => void

  /**
   * Callback function to be called when the modal is closed.
   */
  onHide: () => void
}

interface ModalContentOptions {
  /**
   * An accessible title to be announced when the modal is opened.
   */
  title?: React.ReactNode

  /**
   * An accessible subtitle to be announced when the modal is opened.
   */
  subTitle?: React.ReactNode

  /**
   * An accessible description to be announced when the modal is opened.
   */
  description?: React.ReactNode

  /**
   * Size of the title
   * @default ModalTitleSize.L
   */
  titleSize?: ModalTitleSize
}

type ModalActionSideContent = React.ReactNode

interface ModalActionOptions extends
  SideContentProps<ModalActionSideContent, ModalActionSideContent> {}

export interface ModalProps extends
  BezierComponentProps,
  ChildrenProps,
  React.HTMLAttributes<HTMLDivElement>,
  ModalOptions {}

export interface ModalContentProps extends
  BezierComponentProps,
  ChildrenProps,
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof ModalContentOptions>,
  ModalContentOptions {}

export interface ModalActionProps extends
  BezierComponentProps,
  ModalActionOptions {}

export interface ModalContextValue extends
  NonNullable<Pick<ModalOptions, 'showCloseIcon'>> {}
