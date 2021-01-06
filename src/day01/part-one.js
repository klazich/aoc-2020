/**
 * Day 01: Part One
 *
 * @export
 * @param {[number]} data
 * @returns {number}
 */
export default function runner(data) {
  const set = new Set(data)

  for (const num of data) {
    const complement = 2020 - num

    if (set.has(complement)) {
      return num * complement
    } // else set.delete(num)
  }

  return -1
}

export const input = `1721
979
366
299
675
1456`

export const expected = 514579
