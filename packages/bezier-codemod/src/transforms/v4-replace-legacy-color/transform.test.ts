import { testTransformFunction } from '../../utils/test.js'

import transform from './transform.js'

describe('v4-replace-legacy-color transform', () => {
  it('should transform legacy color tokens to alpha tokens', () => {
    testTransformFunction(__dirname, 'basic', transform)
  })

  it('should not transform non-color tokens', () => {
    testTransformFunction(__dirname, 'non-color', transform)
  })
})
