import partOneRunner from './part-one'
import partTwoRunner from './part-two'
import input from './input'

export const parse = (input) =>
  input.split('\n').map((s) => {
    const m = /^(\d+)-(\d+) ([a-z]):\s+([a-z]+)$/gm.exec(s)
    const [x, y, letter, password] = m.slice(1, 5)
    return { x: parseInt(x, 10), y: parseInt(y, 10), letter, password }
  })

if (require.main === module) {
  console.log('Day 02')
  console.log('Part One:', partOneRunner(parse(input))) // 628
  console.log('Part Two:', partTwoRunner(parse(input))) // 705
}
