import { traverse } from './'

const slopes = [
  [1, 1],
  [1, 3],
  [1, 5],
  [1, 7],
  [2, 1],
]

/**
 * Day 03: Part Two
 *
 * @export
 * @param {[string]} data
 * @returns {number}
 */
export default function runner(data) {
  return slopes.reduce(
    (product, slope) => product * traverse(data, ...slope),
    1
  )
}

export const input = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`

export const expected = 336
