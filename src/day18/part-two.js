import { reduce } from '.'

/**
 * Day 18: Part Two
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

function reduceOperator(equation, token, fn) {
  let eq = equation

  while (eq.includes(token)) {
    eq = eq.replace(RegExp(`\\d+\\s\\${token}\\s\\d+`), (sub) => {
      const [a, b] = sub.split(token).map((s) => parseInt(s.trim(), 10))
      return fn(a, b)
    })
  }

  return eq
}

function evaluate(equation) {
  const addReduced = reduceOperator(equation, '+', (a, b) => a + b)
  const mulReduced = reduceOperator(addReduced, '*', (a, b) => a * b)
  return parseInt(mulReduced.trim(), 10)
}

export const input = `1 + (2 * 3) + (4 * (5 + 6))
2 * 3 + (4 * 5)
5 + (8 * 3 + 9 + 3 * 4 * 3)
5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))
((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2`

export const expected = 693942
