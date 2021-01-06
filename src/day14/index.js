import partOneRunner from './part-one'
import partTwoRunner from './part-two'
import input from './input'

export const parse = (input) => {
  const lines = input.split('\n')

  const instructions = []

  for (const ln of lines) {
    instructions.push(
      ln.startsWith('mask')
        ? ln.slice(7)
        : ln
            .match(/mem\[(\d+)\]\s=\s(\d+)/)
            .slice(1, 3)
            .map((v) => parseInt(v, 10))
    )
  }

  return instructions
}

export const toBin = (n, l = 36) => n.toString(2).padStart(l, '0')

if (require.main === module) {
  console.log('Day 14')
  console.log('Part One:', partOneRunner(parse(input))) // 6513443633260
  console.log('Part Two:', partTwoRunner(parse(input))) // 3442819875191
}
