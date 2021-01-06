import partOneRunner from './part-one'
import partTwoRunner from './part-two'
import input from './input'

export const parse = (input) => {
  const [a, b] = input.split('\n')
  const earliest = parseInt(a, 10)
  const ids = b
    .split(',')
    .reduce((arr, v) => [...arr, v !== 'x' ? parseInt(v, 10) : v], [])
  return { earliest, ids }
}

if (require.main === module) {
  console.log('Day 13')
  console.log('Part One:', partOneRunner(parse(input))) // 1915
  console.log('Part Two:', partTwoRunner(parse(input))) // 294354277694107
}
