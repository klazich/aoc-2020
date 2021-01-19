/**
 * Day 22: Part Two
 *
 * @export
 * @param {[[number],[number]]} data
 * @returns {number}
 */
export default function runner(data) {
  const winner = round(data)

  return data[winner].reduce(
    (sum, v, i) => sum + v * (data[winner].length - i),
    0
  )
}

function round(cards) {
  const [p1Cards, p2Cards] = cards

  const p1Cache = new Set()
  const p2Cache = new Set()

  while (p1Cards.length > 0 && p2Cards.length > 0) {
    const p1Hash = p1Cards.join(',')
    const p2Hash = p2Cards.join(',')

    if (p1Cache.has(p1Hash) || p2Cache.has(p2Hash)) {
      return 0
    } else {
      p1Cache.add(p1Hash)
      p2Cache.add(p2Hash)

      const p1Draw = p1Cards.shift()
      const p2Draw = p2Cards.shift()

      if (p1Cards.length >= p1Draw && p2Cards.length >= p2Draw) {
        const winner = round([
          p1Cards.slice(0, p1Draw),
          p2Cards.slice(0, p2Draw),
        ])
        if (winner === 0) p1Cards.push(p1Draw, p2Draw)
        if (winner === 1) p2Cards.push(p2Draw, p1Draw)
      } else {
        if (p1Draw > p2Draw) p1Cards.push(p1Draw, p2Draw)
        if (p2Draw > p1Draw) p2Cards.push(p2Draw, p1Draw)
      }
    }
  }

  return p1Cards.length > p2Cards.length ? 0 : 1
}

export const input = `Player 1:
9
2
6
3
1

Player 2:
5
8
4
7
10`

export const expected = 291
