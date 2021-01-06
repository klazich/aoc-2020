import partOneRunner from './part-one'
import partTwoRunner from './part-two'
import input from './input'

export const parse = (input) => {
  return input.split('\n').map((row) => row.split(''))
}

function* iterNeighbors(remaining, arr = []) {
  if (remaining.length === 0) yield arr
  else {
    const value = remaining[0]
    yield* iterNeighbors(remaining.slice(1), [...arr, value - 1])
    yield* iterNeighbors(remaining.slice(1), [...arr, value])
    yield* iterNeighbors(remaining.slice(1), [...arr, value + 1])
  }
}

export const key = (adr) => adr.join(',')
export const crd = (loc) => loc.split(',').map((v) => parseInt(v, 10))

export const getNeighbors = (loc) => {
  const adjacent = []
  for (const arr of iterNeighbors(loc)) {
    adjacent.push(arr)
  }
  return adjacent
}

export const next = (map) => {
  const stack = []

  for (const [loc, isActive] of map.entries()) {
    if (isActive) stack.push(...getNeighbors(crd(loc)))
  }

  const nextMap = new Map()

  for (const adr of stack) {
    const loc = key(adr)

    if (nextMap.has(loc)) continue

    const isActive = map.get(loc) ?? false

    let count = 0
    for (const arr of getNeighbors(adr)) {
      const k = key(arr)
      if (k !== loc && map.get(k)) count += 1
    }

    // if (isActive) console.log(adr, loc, count)

    if (isActive && (count < 2 || count > 3)) nextMap.set(loc, false)
    else if (!isActive && count === 3) nextMap.set(loc, true)
    else nextMap.set(loc, isActive)
  }

  return nextMap
}

if (require.main === module) {
  console.log('Day 17')
  console.log('Part One:', partOneRunner(parse(input))) // 293
  console.log('Part Two:', partTwoRunner(parse(input))) // 1816
}
