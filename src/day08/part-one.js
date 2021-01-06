import { execute } from '.'

/**
 * Day 08: Part One
 *
 * @export
 * @param {[{op:string,arg:number,c:number}]} data
 * @returns {number}
 */
export default function runner(data) {
  const program = data
  const next = execute(program)

  let state = { i: 0, acc: 0, e: new Set() }

  while (!state.e.has(state.i)) {
    state = next(state)
  }

  return state.acc
}

export const input = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`

export const expected = 5
