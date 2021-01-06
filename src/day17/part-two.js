import { key, next } from '.'

/**
 * Day 17: Part Two
 *
 * @export
 * @param {[[string]]} data
 * @returns {number}
 */
export default function runner(data) {
  let map = data.reduce((mm, row, a) => {
    return row.reduce((m, v, b) => m.set(key([a, b, 0, 0]), v === '#'), mm)
  }, new Map())

  for (let i = 0; i < 6; i += 1) map = next(map)

  let activeCount = 0
  for (const isActive of map.values()) if (isActive) activeCount += 1

  return activeCount
}

export const input = `.#.
..#
###`

export const expected = 848
