import { parse } from './index'
import runnerPartTwo, { input, expected } from './part-two'

describe('Day 17', () => {
  test('Part Two', () => {
    expect(runnerPartTwo(parse(input))).toBe(expected)
  })
})
