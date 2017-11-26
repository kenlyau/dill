import isEmpty from './is-empty'

describe('test is empty', () => {
  test('null is empty', () => {
    let abc
    expect(isEmpty(abc)).toBeTruthy()  
  })
  test('undefined is empty', () => {
    let abc = {}
    expect(isEmpty(abc.abc)).toBeTruthy()  
  })
  test('[] is empty', () => {
    let abc = []
    expect(isEmpty(abc)).toBeTruthy()  
  })
  test('[1] is not empty', () => {
    let abc = [1]
    expect(isEmpty(abc)).toBeFalsy  
  })
  test('{} is empty', () => {
    let abc = {}
    expect(isEmpty(abc)).toBeTruthy()  
  })
  test('obj is empty', () => {
    let abc = new Object()
    expect(isEmpty(abc)).toBeTruthy()  
  })
  test('obj is not empty', () => {
    let abc = {a:1}
    expect(isEmpty(abc)).toBeFalsy()
  })
})
