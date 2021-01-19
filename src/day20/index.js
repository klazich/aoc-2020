import partOneRunner from './part-one'
import partTwoRunner from './part-two'
import input from './input'

export const parse = (input) =>
  input.split(/\n\n/g).reduce((map, str) => {
    const num = parseInt(/\d{4}/.exec(str)[0], 10)
    const [, ...tile] = str.split('\n')
    return map.set(num, tile)
  }, new Map())

export const getEdges = (tiles) => {
  const map = new Map()

  for (const [num, tile] of tiles.entries()) {
    map.set(num, [
      tile[0],
      tile.reduce((str, row) => str + row[row.length - 1], ''),
      tile[tile.length - 1],
      tile.reduce((str, row) => str + row[0], ''),
    ])
  }

  return map
}

if (require.main === module) {
  console.log('Day 20')
  console.log('Part One:', partOneRunner(parse(input))) // 107399567124539
  console.log('Part Two:', partTwoRunner(parse(input))) // 1555
}
