const image = `3779 2521 2239 1093 3547 1777 2441 3191 2857 1889 1289 3329
3541 3833 1489 2179 1583 2207 2143 3793 1867 2927 3001 3853
2551 3701 2141 3331 1423 3359 1031 3313 2633 1231 1171 2503
1297 2161 2593 2137 1249 1163 3083 3413 3923 3607 3319 2351
2843 3461 1621 2837 2459 3727 3433 2131 1433 3929 1493 1453
1657 1097 3613 2689 1361 1223 2081 1069 2063 1283 1753 1931
3041 1709 1307 2389 1697 1571 1567 2731 3407 3449 3253 2039
3371 2539 3049 1277 2053 2713 3463 3121 3557 3947 2693 1667
3631 1987 1117 2953 3559 1811 3593 1259 1523 2579 2089 1747
2221 3109 2963 1103 3347 1907 2909 1439 1009 2153 3169 2591
1783 3467 1327 3943 3203 3491 3529 2861 1559 2287 3673 1187
3061 2897 1217 1979 2003 3067 1237 3389 2647 1597 3761 2789`
  .split('\n')
  .map((row) => row.split(' ').map((v) => parseInt(v, 10)))

/**
 * Day 20: Part Two
 *
 * @export
 * @param {Map<number,string>} tiles
 * @returns {number}
 */
export default function runner(tiles) {
  let P = image.map((row) => row.map((n) => tiles.get(n)))

  for (let i = 0; i < P.length; i += 1) {
    for (let j = 0; j < P[0].length; j += 1) {
      if (i === 0 && j === 0) continue

      const flip = (tile) =>
        j === 0
          ? tile.map((row) => row.split('').reverse().join(''))
          : tile.reverse()

      const known =
        j === 0
          ? P[i - 1][j][P[i - 1][j].length - 1]
          : P[i][j - 1].reduce((str, row) => str + row[row.length - 1], '')

      const check = (tile) =>
        j === 0 ? tile[0] : tile.reduce((str, row) => str + row[0], '')

      // console.log(i, j)
      // console.log(known, check(P[i][j]))

      while (check(P[i][j]) !== known) {
        P[i][j] = flip(P[i][j])
        if (check(P[i][j]) === known) break
        P[i][j] = rotate(flip(P[i][j]))
      }

      // console.log(known, check(P[i][j]))
    }
  }

  P = P.map((row) =>
    row.map((tile) => tile.slice(1, -1).map((line) => line.slice(1, -1)))
  )
    .map((row) =>
      row.reduce(
        (arr, tile) => {
          tile.forEach((v, i) => {
            arr[i] += v
          })
          return arr
        },
        Array.from({ length: 8 }, () => '')
      )
    )
    .flat()

  console.log(rotate(rotate(P)).map((row) => row.split('').reverse().join('')))
}

function rotate(tile) {
  const rotated = Array.from({ length: tile.length }, () => '')
  for (const row of tile) {
    for (let i = 0; i < row.length; i += 1) {
      rotated[i] = row[i] + rotated[i]
    }
  }
  return rotated
}

const find = `                  #
#    ##    ##    ###
 #  #  #  #  #  #   `

let a = `
.........#....#...###...#.#.#.#.#....#........#..##...#.......#.#.....#.......#...........#.#...
........#...............#.#.O...#..........#.......#.#.....#..#......#.............#....#.......
......#...O....OO....OO..#.OOO.#......#...#...#................#.#.....O.......#.#.........#..##
.#.........O..O..O..O.#O#.O.##.#.....#......#.#......O....OO....OO...#OOO........#.........#..#.
.......#......#..#....##.#....#...........#........#..O..O.#O..O##O..O..#.#....#...#..........#.
.....#..#....###.....##....#......#.........#...............#.#.......##.....#..................
#..#.##.......#.##........#...#..#..#.O.......#................#..#.#...#.#....##...............
.............##.....O....OO.#.#OO..##OOO..#..#.#.#......#...#.......#..#...#......#....#........
#....#.#.##....#....#O.#O..O#.O..O..O................#...#...#...#..#..................#........
........###..#.......#.............#.........##.#.......###...O#.##........#........O.......#...
.#.....#...#.#.....##..........##...........O..#.OO.#..OO#.#.OOO..O....OO....OO...#OOO#........#
.#.....#.........#..#....#.#..#..........##..O.#O..O#.O..O..O......O..O.#O..O..O..O..........#..
.#.....#......#....#.......#..........#....##...#....#.##...#..#.#.....#.....#.#.......##.......
.......#.#...#...#...#.##.#.....#.....#..#.......................#.##..#..........#.......#...#.
..#..........#.....O.#....#........#..#...........#.#......#...........#..#...........#..#......
.O....OO....OO##..OOO#....##..#......##.#.....O.#...#....#.....#.......#...#..#..#...#..........
..O..O..O.#O..O#.O.....#....O.##.OO....OO....OOO...##....#.#.##...#.#...........###.............
#...#.......##.....#........#O..O.#O..O..O..O...##..#.....#........#.#........#..##...##...##.#.
#.....#.......#.........##...........#.#...............#..#.#....##.#..###..####.#.#.......#....
#....##..##.....#.##...#..##..##...........#...........#.#...##.#..#..#..#..#.....##..#......#..
.........#............#......##..#..............#..##...#.........#...#.#...............#.......
#...........##.#####...##...#####.#..#.##....##....###.#............#...#..#..#........#.......#
..#...#......##.#..#..#..##.#..#.#.#..##.#..##.#.##.....#.............#.#....###.......#.#..#...
...#..#.............##..##...##....###....#..#......#......##....##....##....###............#..#
##..........###.........##...#..........#...#.#...#..........#..#.###.##.#..#..#...#.......###..
.#..#.#........#.......#.............##.#........#..#.#..#...............................#.#...#
##...#...###...###....###..#...#....#....##.#..##...####....#..........#...#............#.......
.....##..#..#..#..####...#.#..#..##..#.##..#..#..#..#.......#..#.#...........##.............#.#.
##...#......#........##....................#......#..#.....#......#......#..##......#...#.#.....
.#.#.............................#....#...#...#...........#.......#.#....#....#.............##..
...#.#...#....#...#......#.##................##...#...##....##....##...####.....#.....#.....#..#
...#.#...##...##....##..#.###..#....#...##.....#.#....#.#..#.#####..#..#..................#.....
.....#....#..#..#..#..#..#......................##...............#..........#.#.................
#..##.##..#....##......#.#..#...#...........##..#...#......###.....#......#.........#...#.....#.
.....#...#....##..#....#......###.#..###....#........##..........#..............##..#.#...#..#..
...........#...##..#...#.....#.#...........#.......#..............###..##....##...####...#..##..
.#.#..##....##....###...#..#....#..#.##.#.....#.#.......#.....#..#.#..#..#.##..#..#...#.........
..##.#..#.##..#..#.........##..........#.....#........#.#.#.......#..........##...#....##....#..
#....#.......#......#....#....#.....#...#....##....##..#####..#.........#......#.....#.....#...#
....##......#......#...#.#..........#....#.###.#..#..#..#.......#........#........#..........#..
.#.......#......#......#......#...........#.#..##.....#..........#....#...##...#.#..............
.#....#........#...#.####.........####.#.#...####.....##................#.#.#.................#.
#.....##.#...........##.........#......##.#.#.....#...#.............#.....#.........#...#.#.#...
.##...#...........#....#.....#..#....##.#..##....####...#....##....###.#.###......#....#........
#.#.....#.#......#..#............#..#..##.#..#..#..#.#.#.##.#..#..#..##.##.#.......#.#....#.....
.............##..........#..#.....#..#.........##.#.........##..#......#...#.#......#.....#.....
.#.#...#...#....#..##...#.......###......#.#......#..#.#....##............#.#...#...#.#.#.....##
...#..#....##.#..##....###..#......#.#.....#..#.....#.........#...........###.......#.#.##....#.
.......#.##..#.##..#.#######..#..#...#....##......#..#..#..........#.#.#.......#..#.......#..#..
#........###.........#..#.#.............#........#....#.....#..#.............#.....#..#..#..#..#
#..##..#..#........#.......................#.#......#.#..........#....##.##.####.####...........
................#.#.#.......#...##......#.......#..#.#...#.#......#..#..##.#..#..#.#...#...#..#.
#....#......#..##..###....###.#.####........#.......###...#..#.......#....#.....##.....#.....##.
..#.......#..#..####..#..#..#..#..#.##.........#.......##....#.#....#...#.##..##.....#.......##.
.#........#...#...##.##.....#....#...##....##..#.##....###........##...............#..#.........
.#.........#.#....#..#.................#..#..#..#..#..###....#.................................#
.....##....#.#....#.#..#.#...........##...#.#.......................#....#...#.......#....#....#
....##.....#....#...##.#....#........#..............#.....#.....#........#.#.#...........#......
..###.....#..#.##..#.####..###..#..#...#..#..#..#.#...##..#.....#.#...#..#......................
....#......#..#..#.##..##.#..#..#....#..#..#.......##..#...#..#.........#............#.....##.#.
##...#....##....#............#...#....##.#..##....###........#.#............#..#................
..#.#.##.#...#....##.....#.......##.##..#..#..#..#.....#..#...........#..###..#..#.#..#....#....
...#.#.#..............#.....#..........#...##.#.....#...#...###.#..###...###..#..........#....##
##.#......................#..#..#......#...#....#...#.#..##.#..#..#.##..#........#..............
....#...#..#..................#.#.#.............#.....#...............#.##..#.....#..#.#........
#........##...#............#..#.##.####..###..####...........#......#....#..#........#..#......#
........##.#..#.#.....#.#......#.##..#..#.##..#..........#......#........#...........#..#...#...
.#.#....#....#.#.#...#.#....#.......#.#...#...#.........#.........#.#...........#...#....#......
.......#......##..........#.............................#...#...#........................#.....#
##...........#..#...#...#..##....#.........#........#..#....#.#..........#....................#.
.....##........#..###.#..#....###.#.##....###....##..#..#....##...........##..................#.
..................##......#..#..#..#..#..#.....#.#..........#...#....#...#.......#..............
##..##....#......##..##......#..........#...#........#..#......##..####...##....###.......#..#..
###....##......#.#.#....##.........#..#......#........#......#..#..#..#..#..#..#..#..#..#.#.....
#..#..............................###.....#.##........#...#..................#....#.#..#.#.....#
.....#..#.#......#..................#....##..#.....#...#..#.......##...#.........#........#...#.
..##.......##..#.......#..........#..#......#...#.#...#..#............#......#...#..#...#.......
..#....#........#....###...##....###.#.#...#...#........#...........#.....#...#......#..#.....#.
...##.......#....#..#..#..#..#..#.#...#...........#..#...##......#...#..#..#..#.....##.#.#......
..........#.#.....##..............#..#...#.#.#.#....##.###.........#...#.#..##....##.##.###.....
##....#..##.........#...#.....##..#........#..##..#.......#.#....#..#.#.##.####..#.##..#........
..................#..#.##..###..####...##....###.###...........#.........#......#...............
...##.........#.........#..#.#..#.##.##..#..#.#....#...............#.............#..............
.#...#.........#........###.......#.....#....##.....#..#......#..#..........#...#....###...#.#..
#....#...#........#.####....#.#...#..#....#......##..............##..#...###..#.##...####.....##
..#......#...#....#........#......##.......#.....#..#.............#...#..#..#..#..#.##..........
.#.#......#.....#......#.....#.#...####...##....####.......#.....#............#...#..........#..
....##..................#......#####..##.#..#..#.#.##..#.#...#.......##.....#.#.#...............
#...#..................#.#..#.#...##.#........##...#.........#...#..#..#..#....#....#...........
...............#...##.....#.#...#..#........###....#....#....####..##....###..................#.
#.#.......#....##....##...#####.##...#.#.........#...#...#..#..#..#.##..#.....#.........#.##....  
.#....##...#..####..#.##..#.#..............##.......#...............#..........#............#...
.##........#......................#....##.#..##....###.#............................#.##.#....##
.#.....#......##..........#..#...#.#..#..#..#..#..#.#......#..#............#......#........#....
......#.....##...#.#.#..#...#.#............##..................##.#....#..#...........##........
..##...#..................#....#..#........#...#.#........................#..#.....#..##..#.####
`
