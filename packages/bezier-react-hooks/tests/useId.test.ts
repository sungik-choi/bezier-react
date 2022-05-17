/* External dependencies */
import { renderHook } from '@channel.io/bezier-react-test-utils'

/* Internal dependencies */
import { useId } from '../src/useId'

describe('useId >', () => {
  it('should return unique id', () => {
    const { result } = renderHook(() => useId())

    expect(result.current).toBe(':r0:')
  })

  it('should return unique id with 1 added on the next call', () => {
    const { result } = renderHook(() => useId())

    expect(result.current).toBe(':r1:')
  })

  it('should return id prop when given id prop', () => {
    const { result } = renderHook(() => useId('test'))

    expect(result.current).toBe('test')
  })

  it('should return unique id with a prefix when given prefix prop', () => {
    const { result } = renderHook(() => useId(undefined, 'prefix'))

    expect(result.current).toBe('prefix-:r3:')
  })
})
