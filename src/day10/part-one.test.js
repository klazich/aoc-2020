import { parse } from './index'
import runnerPartOne, { input, expected } from './part-one'

describe('Day 10', () => {
  test('Part One', () => {
    expect(runnerPartOne(parse(input))).toBe(expected)
  })
})
