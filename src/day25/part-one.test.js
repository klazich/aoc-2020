import { parse } from './index'
import runnerPartOne, { input, expected } from './part-one'

describe('Day 25', () => {
  test('Part One', () => {
    expect(runnerPartOne(parse(input))).toBe(expected)
  })
})
