import partOneRunner from './part-one'
import partTwoRunner from './part-two'
import input from './input'

/** @param {string} input */
export const parse = (input) =>
  input.split(/\n\s*\n/g).map((s) => {
    const matches = s.matchAll(/(\w{3}:[#\w]*)/g)
    const arr = []
    for (const m of matches) {
      const [key, value] = m[0].split(':')
      if (key !== 'cid') arr.push([key, value])
    }
    return arr
  })

if (require.main === module) {
  console.log('Day 04')
  console.log('Part One:', partOneRunner(parse(input))) // 202
  console.log('Part Two:', partTwoRunner(parse(input))) // 137
}
