import { parse } from './index'
import runnerPartTwo, { input, expected } from './part-two'

describe('Day 25', () => {
  test('Part Two', () => {
    expect(runnerPartTwo(parse(input))).toBe(expected)
  })
})
