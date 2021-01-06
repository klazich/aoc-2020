import { nPrevious } from '.'

/**
 * Day 09: Part One
 *
 * @export
 * @param {[number]} data
 * @returns {number}
 */
export default function runner(data, n = 25) {
  const previous = nPrevious(data, n)

  for (let i = n; i < data.length; i += 1) {
    const num = data[i]
    const set = previous(i)

    const check = [...set].some((v) => {
      set.delete(v)
      const pass = set.has(num - v)
      set.add(v)
      return pass
    })

    if (!check) return num
  }
}

export const input = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`

export const expected = 127
