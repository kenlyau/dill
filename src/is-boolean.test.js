import isBoolean from './is-boolean'

describe('test is boolean', () => {
  test('is boolean', () => {
    expect(isBoolean(true)).toBeTruthy()
  })
  test('is not boolean', () => {
    expect(isBoolean(5)).not.toBeTruthy()
  })
})
