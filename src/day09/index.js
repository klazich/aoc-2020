import partOneRunner from './part-one'
import partTwoRunner from './part-two'
import input from './input'

export const parse = (input) => {
  return input.split('\n').map((s) => parseInt(s, 10))
}

export const nPrevious = (data, n) => (i) => new Set(data.slice(i - n, i))

if (require.main === module) {
  console.log('Day 09')
  console.log('Part One:', partOneRunner(parse(input))) // 1124361034
  console.log('Part Two:', partTwoRunner(parse(input))) // 129444555
}
