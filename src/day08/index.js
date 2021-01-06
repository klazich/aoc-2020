import partOneRunner from './part-one'
import partTwoRunner from './part-two'
import input from './input'

export const parse = (input) => {
  return input.split('\n').map((s) => {
    const [op, arg] = s.trim().split(' ')
    return { op, arg: parseInt(arg, 10) }
  })
}

const opsFns = ({ op, arg }) => ({ i, acc, e }) =>
  ({
    acc: { i: i + 1, acc: acc + arg, e: e.add(i) },
    jmp: { i: i + arg, acc, e: e.add(i) },
    nop: { i: i + 1, acc, e: e.add(i) },
  }[op])

export const execute = (program, ops = opsFns) => (state) =>
  ops(program[state.i])(state)

if (require.main === module) {
  console.log('Day 08')
  console.log('Part One:', partOneRunner(parse(input))) // 1797
  console.log('Part Two:', partTwoRunner(parse(input))) // 1036
}
