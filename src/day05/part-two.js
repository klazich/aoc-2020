import { col, row, seatId } from '.'

/**
 * Day 05: Part Two
 *
 * @export
 * @param {[string]} data
 * @returns {number}
 */
export default function runner(data) {
  const seating = Array.from({ length: 128 }, () =>
    Array.from({ length: 8 }, () => false)
  )

  for (const pass of data) {
    const r = row(pass)
    const c = col(pass)

    seating[r][c] = true
  }

  console.log(
    seating
      .map((r, i) => [i, ' ', ...r.map((v) => (v ? 'X' : 'O'))].join(''))
      .join('\n')
  )
}
