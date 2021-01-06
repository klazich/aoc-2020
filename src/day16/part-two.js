import { mergeRange } from '.'

function* enumerate(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    yield [i, arr[i]]
  }
}

/**
 * Day 16: Part Two
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
  const { ranges, yourTicket, nearbyTickets } = data

  const sorted = ranges
    .reduce((arr, [_, ...rest]) => [...arr, ...rest], [])
    .sort(([a], [b]) => a - b)

  const merged = mergeRange(sorted)

  const validTickets = nearbyTickets.filter((range) =>
    range.every((v) => merged.some(([a, b]) => v >= a && v <= b))
  )

  const fields = ranges.reduce(
    (o, [name, ...rest]) => ({
      ...o,
      [name]: rest,
    }),
    {}
  )

  const columns = validTickets.reduce(
    (arr, range) =>
      arr.map((a, i) => {
        a.push(range[i])
        return a
      }),
    Array.from({ length: ranges.length }, () => [])
  )

  const fieldNames = Object.keys(fields)
  const possibles = Array.from(
    { length: ranges.length },
    () => new Set(fieldNames)
  )

  const assigned = new Set()

  let c = 0
  while (assigned.size < ranges.length && c < 10) {
    for (const [i, col] of enumerate(columns)) {
      const possible = possibles[i]
      if (typeof possible === 'string') continue

      for (const field of assigned) possible.delete(field)

      for (const field of possible) {
        const [[a, b], [c, d]] = fields[field]
        const valid = col.every((v) => (v >= a && v <= b) || (v >= c && v <= d))
        if (!valid) possible.delete(field)
      }

      if (possible.size === 1) {
        possibles[i] = [...possible][0]
        assigned.add(possibles[i])
      }
    }

    for (const [i, possible] of enumerate(possibles)) {
      if (typeof possible === 'string') continue
      for (const field of assigned) possible.delete(field)

      const test = new Set(possible)

      for (const [j, other] of enumerate(possibles)) {
        if (j === i) continue
        for (const field of other) test.delete(field)
        if (test.size === 1) break
      }

      if (test.size === 1) {
        possibles[i] = [...test][0]
        assigned.add(possibles[i])
      }
    }

    c += 1
  }

  return possibles.reduce(
    (prod, field, i) =>
      field.startsWith('departure') ? prod * [yourTicket[i]] : prod,
    1
  )
}
