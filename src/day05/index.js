import partOneRunner from './part-one'
import partTwoRunner from './part-two'
import input from './input'

export const parse = (input) => input.split('\n')

export function row(pass) {
  let r = 0
  for (let i = 0; i < 7; i += 1) {
    if (pass[i] === 'B') {
      r += 2 ** Math.abs(i - 6)
    }
  }
  return r
}

export function col(pass) {
  let c = 0
  for (let i = 7; i < 10; i += 1) {
    if (pass[i] === 'R') {
      c += 2 ** Math.abs(i - 9)
    }
  }
  return c
}

export function seatId(pass) {
  return row(pass) * 8 + col(pass)
}

if (require.main === module) {
  console.log('Day 05')
  console.log('Part One:', partOneRunner(parse(input))) // 951
  console.log('Part Two:', partTwoRunner(parse(input))) // 653
}
