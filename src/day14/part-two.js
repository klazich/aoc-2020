import { toBin } from '.'

/**
 * Day 14: Part Two
 *
 * @export
 * @param {[[number,number]|string]} data
 * @returns {number}
 */
export default function runner(data) {
  const mem = new Map()

  let bitmask
  for (const ins of data) {
    if (typeof ins === 'string') {
      bitmask = bitmasker(ins)
    } else {
      const [address, value] = ins

      const mask = bitmask(address)

      for (const adr of iterMasks(mask)) {
        mem.set(parseInt(adr, 2), value)
      }
    }
  }

  return [...mem.values()].reduce((sum, v) => sum + v, 0)
}

const replacer = (bn) => {
  let i = 0
  return () => bn[i++]
}

function* iterMasks(mask) {
  const count = mask.replace(/[^X]/g, () => '').length

  for (let i = 0; i < 2 ** count; i += 1) {
    const bn = toBin(i, count)
    yield mask.replace(/X/g, replacer(bn))
  }
}

function bitmasker(maskStr) {
  return (n) => {
    const b = toBin(n)
    return maskStr.replace(/0/g, (_, i) => b[i])
  }
}

export const input = `mask = 000000000000000000000000000000X1001X
mem[42] = 100
mask = 00000000000000000000000000000000X0XX
mem[26] = 1`

export const expected = 208
