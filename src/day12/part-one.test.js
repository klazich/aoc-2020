import { parse } from './index'
import runnerPartOne, { input, expected } from './part-one'

describe('Day 12', () => {
  test('Part One', () => {
    expect(runnerPartOne(parse(input))).toBe(expected)
  })
})
