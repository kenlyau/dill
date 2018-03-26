import group from './group'

describe('test group', () => {
  const originGroup = [1,2,3,4,5,6,7]
  test('test group length', () => {
    expect(group(originGroup, 3)).toHaveLength(3)
  })
})
