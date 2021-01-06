import { parse } from './index'
import runnerPartOne, { input, expected } from './part-one'

describe('Day 15', () => {
  test('Part One', () => {
    expect(runnerPartOne(parse(input))).toBe(expected)
  })
})
