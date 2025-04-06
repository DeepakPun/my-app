import { sum } from './sum'
import { describe, expect, it } from 'vitest'

describe('sum tests', () => {
  it('adds 5 + 9 to equal 14 ', () => {
    expect(sum(5, 9)).toBe(14)
  })
  it('adds 7 + 14 to equal 21 ', () => {
    expect(sum(7, 14)).toBe(21)
  })
  it('adds 12 + 1 to equal 13 ', () => {
    expect(sum(12, 1)).toBe(13)
  })
})
