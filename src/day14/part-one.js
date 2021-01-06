import { toBin } from '.'

const makeMaskFn = (mask) => (n) => {
  const b = toBin(n)
  const masked = mask.replace(/X/g, (_, i) => b[i])
  return parseInt(masked, 2)
}

/**
 * Day 14: Part One
 *
 * @export
 * @param {[[number,number]|string]} data
 * @returns {number}
 */
export default function runner(data) {
  const mem = new Map()

  let mask
  for (const ins of data) {
    if (typeof ins === 'string') {
      mask = makeMaskFn(ins)
    } else {
      const [address, value] = ins
      mem.set(address, mask(value))
    }
  }

  return [...mem.values()].reduce((sum, v) => sum + v, 0)
}

export const input = `mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X
mem[8] = 11
mem[7] = 101
mem[8] = 0`

export const expected = 165
