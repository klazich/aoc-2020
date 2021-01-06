import partOneRunner from './part-one'

/**
 * Day 15: Part Two
 *
 * @export
 * @param {[number]} data
 * @returns {number}
 */
export default function runner(data, n = 30000000) {
  return partOneRunner(data, n)
}

export const input = `2,3,1`

export const expected = 6895259
