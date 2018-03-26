import date from './date'

describe('test date function', () => {
  test('test now year', () => {
    expect(date().format('yyyy')).toBe(new Date().getFullYear() + '')
  })
  test('test 1511325820264 === 2017-11-22 12:43', () => {
    const now = new Date(1511325820264)
    expect(date(1511325820264).format('yyyy-MM-dd hh:mm')).toBe(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`)
  })
})
