const LCMp = (...args) => args.reduce((p, v) => p * v, 1)

/**
 * Day 13: Part Two
 *
 * @export
 * @param {{earliest:number,ids:[number]}} data
 * @returns {number}
 */
export default function runner(data) {
  const { ids } = data
  const departures = ids.reduce(
    (arr, id, i) => (id !== 'x' ? [...arr, [id, i]] : arr),
    []
  )

  let [m, t] = departures.shift()

  for (const [id, offset] of departures) {
    while ((t + offset) % id !== 0) {
      t += m
    }
    m = LCMp(m, id)
  }

  return t
}

export const input = `_
7,13,x,x,59,x,31,19`

export const expected = 1068781
