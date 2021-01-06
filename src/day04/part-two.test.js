import { parse } from './index'
import runnerPartTwo, {
  inputInvalid,
  inputValid,
  expectedInvalid,
  expectedValid,
} from './part-two'

describe('Day 04', () => {
  test('Part Two', () => {
    expect(runnerPartTwo(parse(inputInvalid))).toBe(expectedInvalid)
    expect(runnerPartTwo(parse(inputValid))).toBe(expectedValid)
  })
})
