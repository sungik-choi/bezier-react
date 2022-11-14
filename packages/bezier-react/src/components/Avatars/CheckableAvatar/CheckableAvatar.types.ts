/* Internal dependencies */
import type { AdditionalStylableProps, AdditionalColorProps } from '../../../types/ComponentProps'
import type { AvatarProps } from '../Avatar'

interface CheckableAvatarPropsOptions {
  isChecked?: boolean
  isCheckable?: boolean
}

export default interface CheckableAvatarProps extends
  AvatarProps,
  AdditionalStylableProps<'checkableWrapper'>,
  AdditionalColorProps<'checkedBackground'>,
  CheckableAvatarPropsOptions {}
