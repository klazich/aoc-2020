import partOneRunner from './part-one'
import partTwoRunner from './part-two'
import input from './input'

export const parse = (input) => {
  return input.split(',').map((v) => parseInt(v, 10))
}

if (require.main === module) {
  console.log('Day 15')
  console.log('Part One:', partOneRunner(parse(input))) // 1280
  console.log('Part Two:', partTwoRunner(parse(input))) // 651639
}
