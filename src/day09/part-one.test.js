import { parse } from './index'
import runnerPartOne, { input, expected } from './part-one'

describe('Day 09', () => {
  test('Part One', () => {
    expect(runnerPartOne(parse(input), 5)).toBe(expected)
  })
})
