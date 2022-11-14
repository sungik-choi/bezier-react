/* External dependencies */
import React, { memo } from 'react'

/* Internal dependencies */
import type { SemanticNames } from '../../foundation'
import { IconSize, LockIcon, MoonFilledIcon } from '../Icon'
import { StatusProps, StatusSize, StatusType } from './Status.types'
import { Icon, StatusCircle } from './Status.styled'

// TODO: 테스트 코드 작성
const STATUS_TEST_ID = 'bezier-react-status'

const statusWithIcon: Readonly<StatusType[]> = [
  StatusType.OnlineCrescent,
  StatusType.OfflineCrescent,
  StatusType.Lock,
]

const statusColor: Readonly<Record<StatusType, SemanticNames>> = {
  [StatusType.Online]: 'bgtxt-green-normal',
  [StatusType.Offline]: 'bg-black-dark',
  [StatusType.OnlineCrescent]: 'bgtxt-green-normal',
  [StatusType.OfflineCrescent]: 'bgtxt-yellow-normal',
  [StatusType.Lock]: 'txt-black-darker',
}

function Status({
  type,
  size = StatusSize.M,
}: StatusProps) {
  if (statusWithIcon.includes(type)) {
    const iconSize = (size <= StatusSize.M) ? IconSize.XXXS : IconSize.XS

    return (
      <StatusCircle
        data-testid={STATUS_TEST_ID}
        color="bg-white-high"
        size={size}
      >
        { (type === StatusType.Lock) ? (
          <Icon
            source={LockIcon}
            size={iconSize}
            color={statusColor[type]}
          />
        ) : (
          <Icon
            source={MoonFilledIcon}
            size={iconSize}
            color={statusColor[type]}
          />
        ) }
      </StatusCircle>
    )
  }

  return (
    <StatusCircle
      data-testid={STATUS_TEST_ID}
      color={statusColor[type] ?? 'bg-black-dark'}
      size={size}
    />
  )
}

export default memo(Status)
