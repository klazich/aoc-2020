import { reduce, operatorFunctions } from '.'

/**
 * Day 18: Part One
 *
 * @export
 * @param {[string]} data
 * @returns {number}
 */
export default function runner(data) {
  let sum = 0

  for (const equation of data) {
    sum += evaluate(reduce(equation, evaluate))
  }

  return sum
}

function evaluate(equation) {
  const tokens = equation.split(/([\*\+])/g).map((s) => s.trim())

  let result = parseInt(tokens.shift(), 10)

  while (tokens.length > 0) {
    const operator = tokens.shift()
    const operand = parseInt(tokens.shift(), 10)

    result = operatorFunctions(operator)(result, operand)
  }

  return result
}

export const input = `2 * 3 + (4 * 5)
5 + (8 * 3 + 9 + 3 * 4 * 3)
5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))
((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2`

export const expected = 26335
