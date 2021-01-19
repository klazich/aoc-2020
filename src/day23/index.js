import partOneRunner from './part-one'
import partTwoRunner from './part-two'
import input from './input'

export const parse = (input) => input.split('').map((v) => parseInt(v, 10))

if (require.main === module) {
  console.log('Day 23')
  console.log('Part One:', partOneRunner(parse(input))) // 39564287
  console.log('Part Two:', partTwoRunner(parse(input))) // 404431096944
}
