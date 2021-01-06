import { crd, key, occupancy, toMap2 } from '.'

/**
 * Day 11: Part Two
 *
 * @export
 * @param {[]} data
 * @returns {number}
 */
export default function runner(data) {
  let map = toMap2(data)

  let changed = true

  let a = 0
  while (changed && a < 10000) {
    changed = false

    const next = new Map()

    for (const k of map.keys()) {
      const [seat, visible] = map.get(k)
      const adj = visible.reduce(
        (c, v) => (map.get(v)[0] === '#' ? c + 1 : c),
        0
      )

      if (seat === 'L' && adj === 0) next.set(k, ['#', visible])
      else if (seat === '#' && adj >= 5) next.set(k, ['L', visible])
      else next.set(k, [seat, visible])

      if (!changed && map.get(k)[0] !== next.get(k)[0]) changed = true
    }

    map = next

    a += 1
  }

  return [...map.values()].reduce(
    (count, [v]) => (v === '#' ? count + 1 : count),
    0
  )
}

function grid(map) {
  const arr = Array.from({ length: 10 }, (_, i) =>
    Array.from({ length: 10 }, (_, j) => (map.get(key(i, j)) || ['.'])[0])
  )

  return arr.map((r) => r.join('')).join('\n')
}

export const input = `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`

export const expected = 26
