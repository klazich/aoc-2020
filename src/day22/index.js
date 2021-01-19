import partOneRunner from './part-one'
import partTwoRunner from './part-two'
import input from './input'

export const parse = (input) => {
  const players = input.split('\n\n')

  return players.map((player) => {
    const lines = player.split('\n').slice(1)
    return lines.map((v) => parseInt(v, 10))
  })
}

if (require.main === module) {
  console.log('Day 22')
  console.log('Part One:', partOneRunner(parse(input))) // 31629
  console.log('Part Two:', partTwoRunner(parse(input))) // 35196
}
