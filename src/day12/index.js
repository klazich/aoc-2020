import partOneRunner from './part-one'
import partTwoRunner from './part-two'
import input from './input'

export const parse = (input) => {
  return input.split('\n').map((s) => {
    const [op, arg] = s.match(/(\w)(\d*)/).slice(1, 3)
    return { op, arg: parseInt(arg, 10) }
  })
}

if (require.main === module) {
  console.log('Day 12')
  console.log('Part One:', partOneRunner(parse(input))) // 796
  console.log('Part Two:', partTwoRunner(parse(input))) // 39446
}
