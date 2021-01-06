/**
 * Day 09: Part Two
 *
 * @export
 * @param {[]} data
 * @returns {number}
 */
export default function runner(data, target = 1124361034) {
  let j = 0
  let i = 1
  let sum = data[0] + data[1]

  while (sum !== target && j < i && i < data.length) {
    i += 1
    sum += data[i]
    while (sum > target) {
      sum -= data[j]
      j += 1
    }
  }

  const sub = data.slice(j, i + 1)

  return Math.max(...sub) + Math.min(...sub)
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

export const expected = 62
