import { execute } from '.'

/**
 * Day 08: Part Two
 *
 * @export
 * @param {[{op:string,arg:number,c:number}]} data
 * @returns {number}
 */
export default function runner(data) {
  const program = data

  const next = execute(program)

  let state = { i: 0, acc: 0, e: new Set() }

  while (true) {
    const inst = program[state.i]

    if (inst.op === 'jmp' || inst.op === 'nop') {
      const save = {
        i: state.i,
        acc: state.acc,
        e: new Set(state.e),
      }

      inst.op = inst.op === 'jmp' ? 'nop' : 'jmp'

      while (!state.e.has(state.i)) {
        if (state.i >= program.length) return state.acc
        state = next(state)
      }

      state = save
      inst.op = inst.op === 'jmp' ? 'nop' : 'jmp'
    }

    state = next(state)
  }
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

export const expected = 8
