import partOneRunner from './part-one'
import partTwoRunner from './part-two'
import input from './input'

export const parse = (input) => {
  return input.split('\n').map((s) => s.split(''))
}

export const key = (i, j) => `${i},${j}`
export const crd = (s) => s.split(',').map((v) => parseInt(v, 10))

export const occupancy = (map) => (i, j) =>
  [
    map.get(key(i - 1, j - 1)),
    map.get(key(i - 1, j)),
    map.get(key(i - 1, j + 1)),
    map.get(key(i, j - 1)),
    // map.get(key(i, j)),
    map.get(key(i, j + 1)),
    map.get(key(i + 1, j - 1)),
    map.get(key(i + 1, j)),
    map.get(key(i + 1, j + 1)),
  ].reduce((count, v) => (v === '#' ? count + 1 : count), 0)

export const toMap1 = (layout) => {
  const map = new Map()

  const y = layout.length
  const x = layout[0].length

  for (let i = 0; i < y; i += 1) {
    for (let j = 0; j < x; j += 1) {
      const tile = layout[i][j]
      if (tile === 'L') map.set(key(i, j), tile)
    }
  }

  return map
}

const getVisibleSeats = (layout) => (i, j) => {
  const visible = []

  let k = i - 1
  let l = j - 1
  while (k >= 0 && l >= 0) {
    if (layout[k][l] === 'L') {
      visible.push(key(k, l))
      break
    }
    k -= 1
    l -= 1
  }

  k = i - 1
  l = j
  while (k >= 0) {
    if (layout[k][l] === 'L') {
      visible.push(key(k, l))
      break
    }
    k -= 1
  }

  k = i - 1
  l = j + 1
  while (k >= 0 && l < layout[0].length) {
    if (layout[k][l] === 'L') {
      visible.push(key(k, l))
      break
    }
    k -= 1
    l += 1
  }

  k = i
  l = j - 1
  while (l >= 0) {
    if (layout[k][l] === 'L') {
      visible.push(key(k, l))
      break
    }
    l -= 1
  }

  k = i
  l = j + 1
  while (l < layout[0].length) {
    if (layout[k][l] === 'L') {
      visible.push(key(k, l))
      break
    }
    l += 1
  }

  k = i + 1
  l = j - 1
  while (k < layout.length && l >= 0) {
    if (layout[k][l] === 'L') {
      visible.push(key(k, l))
      break
    }
    k += 1
    l -= 1
  }

  k = i + 1
  l = j
  while (k < layout.length) {
    if (layout[k][l] === 'L') {
      visible.push(key(k, l))
      break
    }
    k += 1
  }

  k = i + 1
  l = j + 1
  while (k < layout.length && l < layout[0].length) {
    if (layout[k][l] === 'L') {
      visible.push(key(k, l))
      break
    }
    k += 1
    l += 1
  }

  return visible
}

export const toMap2 = (layout) => {
  const visible = getVisibleSeats(layout)
  const map = new Map()

  const y = layout.length
  const x = layout[0].length

  for (let i = 0; i < y; i += 1) {
    for (let j = 0; j < x; j += 1) {
      const tile = layout[i][j]
      if (tile === 'L') map.set(key(i, j), [tile, visible(i, j)])
    }
  }

  return map
}

if (require.main === module) {
  console.log('Day 11')
  console.log('Part One:', partOneRunner(parse(input))) // 2093
  console.log('Part Two:', partTwoRunner(parse(input))) // 1862
}
