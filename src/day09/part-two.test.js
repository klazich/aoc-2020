import { parse } from './index'
import runnerPartTwo, { input, expected } from './part-two'

describe('Day 09', () => {
  test('Part Two', () => {
    expect(runnerPartTwo(parse(input), 127)).toBe(expected)
  })
})
