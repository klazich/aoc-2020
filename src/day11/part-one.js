import { occupancy, toMap1, key, crd } from '.'

/**
 * Day 11: Part One
 *
 * @export
 * @param {[[string]]} data
 * @returns {number}
 */
export default function runner(data) {
  let map = toMap1(data)
  let occ = occupancy(map)

  let changed = true

  let a = 0

  while (changed && a < 10000) {
    // console.log(a)
    // console.log(grid(map))

    changed = false

    const next = new Map()

    for (const k of map.keys()) {
      const seat = map.get(k)
      const [i, j] = crd(k)
      const adj = occ(i, j)

      if (seat === 'L' && adj === 0) next.set(k, '#')
      else if (seat === '#' && adj >= 4) next.set(k, 'L')
      else next.set(k, seat)

      if (!changed && map.get(k) !== next.get(k)) changed = true
    }

    map = next
    occ = occupancy(map)
    a += 1
  }

  return [...map.values()].reduce(
    (count, v) => (v === '#' ? count + 1 : count),
    0
  )
}

function grid(map) {
  const occ = occupancy(map)

  const arr1 = Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => ' ')
  )

  const arr2 = Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => ' ')
  )

  map.forEach((v, k) => {
    const [i, j] = crd(k)
    arr1[i][j] = v
    arr2[i][j] = occ(i, j)
  })

  return arr1.map((r, i) => `${r.join('')}  ${arr2[i].join('')}`).join('\n')
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

export const expected = 37
