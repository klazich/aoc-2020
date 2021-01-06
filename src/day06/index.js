import partOneRunner from './part-one'
import partTwoRunner from './part-two'
import input from './input'

export const parse = (input) => {
  return input.split(/\n\s*\n/g).map((s) => s.split('\n'))
}

if (require.main === module) {
  console.log('Day 06')
  console.log('Part One:', partOneRunner(parse(input))) // 6714
  console.log('Part Two:', partTwoRunner(parse(input))) // 3435
}
