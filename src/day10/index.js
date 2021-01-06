import partOneRunner from './part-one'
import partTwoRunner from './part-two'
import input from './input'

export const parse = (input) => {
  return input.split('\n').map((s) => parseInt(s, 10))
}

if (require.main === module) {
  console.log('Day 10')
  console.log('Part One:', partOneRunner(parse(input))) // 2346
  console.log('Part Two:', partTwoRunner(parse(input))) // 6044831973376
}
