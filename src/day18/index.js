import partOneRunner from './part-one'
import partTwoRunner from './part-two'
import input from './input'

export const parse = (input) => {
  return input.split('\n')
}

export const operatorFunctions = (op) => (a, b) =>
  ({
    '+': a + b,
    '*': a * b,
  }[op])

export const reduce = (equation, evalFn) => {
  let eq = equation

  while (eq.includes('(')) {
    eq = eq.replace(/\([^\(]+?\)/g, (sub) => {
      const equation = sub.slice(1, -1)
      return evalFn(equation)
    })
  }

  return eq
}

if (require.main === module) {
  console.log('Day 18')
  console.log('Part One:', partOneRunner(parse(input))) // 14006719520523
  console.log('Part Two:', partTwoRunner(parse(input))) // 545115449981968
}
