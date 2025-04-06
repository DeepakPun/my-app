const sum = require('../testFiles/sum')

test('adds 12 + 15 to equal 27', () => {
  expect(sum(12, 15)).toBe(27)
})

test('adds 20 + 31 to equal 51', () => {
  expect(sum(20, 31)).toBe(27)
})

test('adds 20 + 31 to equal 51', () => {
  expect(sum(30, 31)).toBe(61)
})
