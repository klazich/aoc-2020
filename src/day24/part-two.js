/**
 * Day 24: Part Two
 *
 * @export
 * @param {[{x:number,y:number,z:number}]} data
 * @returns {number}
 */
export default function runner(data, time = 100) {
  let black = new Set()

  for (const { x, y, z } of data) {
    const k = key([x, y, z])
    if (!black.delete(k)) black.add(k)
  }

  for (let t = 0; t < time; t += 1) {
    black = next(black)
  }

  return black.size
}

function key(coord) {
  return coord.join(',')
}

function parse(k) {
  return k.split(',').map((v) => parseInt(v, 10))
}

function adjacent(coords) {
  if (typeof coords === 'string') {
    coords = parse(coords)
  }
  const [x, y, z] = coords
  return [
    `${x + 1},${y},${z - 1}`,
    `${x + 1},${y - 1},${z}`,
    `${x},${y - 1},${z + 1}`,
    `${x - 1},${y},${z + 1}`,
    `${x - 1},${y + 1},${z}`,
    `${x},${y + 1},${z - 1}`,
  ]
}

function next(black) {
  const nextBlack = new Set()
  const adjacentSet = new Set()

  for (const tile of black) {
    let count = 0
    for (const c of adjacent(tile)) {
      if (black.has(c)) count += 1
      adjacentSet.add(c)
    }
    if (count > 0 && count <= 2) nextBlack.add(tile)
  }

  for (const tile of adjacentSet) {
    let count = 0
    for (const c of adjacent(tile)) {
      if (black.has(c)) count += 1
    }
    if (count === 2) nextBlack.add(tile)
  }

  return nextBlack
}

export const input = `sesenwnenenewseeswwswswwnenewsewsw
neeenesenwnwwswnenewnwwsewnenwseswesw
seswneswswsenwwnwse
nwnwneseeswswnenewneswwnewseswneseene
swweswneswnenwsewnwneneseenw
eesenwseswswnenwswnwnwsewwnwsene
sewnenenenesenwsewnenwwwse
wenwwweseeeweswwwnwwe
wsweesenenewnwwnwsenewsenwwsesesenwne
neeswseenwwswnwswswnw
nenwswwsewswnenenewsenwsenwnesesenew
enewnwewneswsewnwswenweswnenwsenwsw
sweneswneswneneenwnewenewwneswswnese
swwesenesewenwneswnwwneseswwne
enesenwswwswneneswsenwnewswseenwsese
wnwnesenesenenwwnenwsewesewsesesew
nenewswnwewswnenesenwnesewesw
eneswnwswnwsenenwnwnwwseeswneewsenese
neswnwewnwnwseenwseesewsenwsweewe
wseweeenwnesenwwwswnew`

export const expected = 2208
