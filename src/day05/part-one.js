import { col, row, seatId } from '.'

/**
 * Day 05: Part One
 *
 * @export
 * @param {[string]} data
 * @returns {number}
 */
export default function runner(data) {
  return data.reduce((max, pass) => Math.max(max, seatId(pass)), 0)
}

export const input = ['BFFFBBFRRR', 'FFFBBBFRRR', 'BBFFBBFRLL']

export const expected = 820
