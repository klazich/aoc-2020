/**
 * Day 02: Part Two
 *
 * @export
 * @param {[number]} data
 * @returns {number}
 */
export default function runner(data) {
  let count = 0

  for (const { x, y, letter, password } of data) {
    let policy = 0
    if (password[x - 1] === letter) policy += 1
    if (password[y - 1] === letter) policy += 1
    if (policy === 1) count += 1
  }

  return count
}

export const input = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`

export const expected = 1
