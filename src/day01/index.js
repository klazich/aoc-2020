import partOneRunner from './part-one'
import partTwoRunner from './part-two'
import input from './input'

export const parse = (input) => input.split('\n').map((s) => parseInt(s, 10))

if (require.main === module) {
  console.log('Day 01')
  console.log('Part One:', partOneRunner(parse(input))) // 381699
  console.log('Part Two:', partTwoRunner(parse(input))) // 111605670
}
