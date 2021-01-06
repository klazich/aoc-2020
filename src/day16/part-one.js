import { mergeRange } from '.'

/**
 * Day 16: Part One
 *
 * @export
 * @param {{
 *   ranges:[[string,number,number,number,number]],
 *   yourTicket:[number],
 *   nearbyTickets:[[number]]
 * }} data
 * @returns {number}
 */
export default function runner(data) {
  const { ranges, nearbyTickets } = data

  const sorted = ranges
    .reduce((arr, [_, ...rest]) => [...arr, ...rest], [])
    .sort(([a], [b]) => a - b)

  const merged = mergeRange(sorted)

  const invalid = nearbyTickets
    .flat()
    .filter((v) => merged.every(([a, b]) => !(v >= a && v <= b)))

  return invalid.reduce((sum, v) => sum + v, 0)
}

export const input = {
  ranges: `class: 1-3 or 5-7
row: 6-11 or 33-44
seat: 13-40 or 45-50`,
  yourTicket: `7,1,14`,
  nearbyTickets: `7,3,47
40,4,50
55,2,20
38,6,12`,
}

export const expected = 71
