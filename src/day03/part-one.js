import { traverse } from './'

const slope = [1, 3]

/**
 * Day 03: Part One
 *
 * @export
 * @param {[string]} data
 * @returns {number}
 */
export default function runner(data) {
  return traverse(data, ...slope)
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

export const expected = 7
