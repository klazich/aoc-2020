/**
 * Day 01: Part Two
 *
 * @export
 * @param {[number]} data
 * @returns {number}
 */
export default function runner(data) {
  for (let i = 0; i < data.length; i += 1) {
    const set = new Set()
    const diff = 2020 - data[i]

    for (let j = i + 1; j < data.length; j += 1) {
      if (set.has(diff - data[j])) {
        return data[i] * data[j] * (diff - data[j])
      }
      set.add(data[j])
    }
  }

  return -1
}

export const input = `1721
979
366
299
675
1456`

export const expected = 241861950
