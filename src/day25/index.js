import partOneRunner from './part-one'
import partTwoRunner from './part-two'
import input from './input'

export const parse = (input) => input.split('\n').map((v) => parseInt(v, 10))

if (require.main === module) {
  console.log('Day 25')
  console.log('Part One:', partOneRunner(parse(input))) // 3286137
  // console.log('Part Two:', partTwoRunner(parse(input)))

  const test = `5764801
17807724`

  console.log(partOneRunner(parse(test)))
}
