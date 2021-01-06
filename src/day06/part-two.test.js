import { parse } from './index'
import runnerPartTwo, { input, expected } from './part-two'

describe('Day 06', () => {
  test('Part Two', () => {
    expect(runnerPartTwo(parse(input))).toBe(expected)
  })
})
