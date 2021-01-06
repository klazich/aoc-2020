import partOneRunner from './part-one'
import partTwoRunner from './part-two'
import input from './input'

export const parse = ({ ranges, yourTicket, nearbyTickets }) => ({
  ranges: ranges
    .split('\n')
    .map((line) =>
      line
        .match(/^(.*):\s(\d*)-(\d*)\sor\s(\d*)-(\d*)$/)
        .slice(1, 6)
        .map((v, i) => (i > 0 ? parseInt(v, 10) : v))
    )
    .map(([name, a, b, c, d]) => [name, [a, b], [c, d]]),
  yourTicket: yourTicket.split(',').map((v) => parseInt(v, 10)),
  nearbyTickets: nearbyTickets
    .split('\n')
    .map((line) => line.split(',').map((v) => parseInt(v, 10))),
})

export const mergeRange = (sortedRanges) => {
  const merged = [Array.from(sortedRanges.shift())]

  while (sortedRanges.length > 0) {
    const top = merged[merged.length - 1]
    const cur = sortedRanges.shift()

    if (cur[0] > top[1] + 1) merged.push(Array.from(cur))
    else if (cur[0] <= top[1] + 1 && cur[1] > top[1]) top[1] = cur[1]
  }

  return merged
}

if (require.main === module) {
  console.log('Day 16')
  console.log('Part One:', partOneRunner(parse(input))) // 26941
  console.log('Part Two:', partTwoRunner(parse(input))) // 634796407951
}
