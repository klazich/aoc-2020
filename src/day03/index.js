import partOneRunner from './part-one'
import partTwoRunner from './part-two'
import input from './input'

export const parse = (input) => input.split('\n')

export const traverse = (map, dy, dx) => {
  const width = map[0].length

  let count = 0
  let loc = 0

  for (let i = dy; i < map.length; i += dy) {
    loc = (loc + dx) % width
    if (map[i][loc] === '#') count += 1
  }

  return count
}

if (require.main === module) {
  console.log('Day 03')
  console.log('Part One:', partOneRunner(parse(input))) // 145
  console.log('Part Two:', partTwoRunner(parse(input))) // 3424528800
}
