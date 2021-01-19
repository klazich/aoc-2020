/**
 * Day 24: Part One
 *
 * @export
 * @param {[{x:number,y:number,z:number}]} data
 * @returns {number}
 */
export default function runner(data) {
  return Object.values(
    data.reduce((counts, { x, y, z }) => {
      const key = `${x},${y},${z}`
      counts[key] = ((counts[key] ?? 0) + 1) % 2
      return counts
    }, {})
  ).reduce((sum, v) => (v === 1 ? sum + 1 : sum), 0)
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

export const expected = 10
