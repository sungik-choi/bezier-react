/* Internal dependencies */
import { getTitle } from '../src/storyUtils'

describe('storyUtils Test >', () => {
  describe('getTitle Test >', () => {
    it('정상 동작 테스트들', () => {
      expect(getTitle('/src/layout/GlobalHeader/')).toBe('layout/GlobalHeader')
      expect(getTitle('/foo/bar/ipsum/')).toBe('bar/ipsum')
    })
  })
})
