/* External dependencies */
import { useId as useIdentifier, useMemo } from 'react'
import { compact } from 'lodash-es'

export function useId(idProp?: string, prefix?: string) {
  const id = useIdentifier()

  return useMemo(() => (
    idProp || compact([prefix, id]).join('-')
  ), [
    idProp,
    prefix,
    id,
  ])
}
