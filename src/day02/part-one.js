/**
 * Day 02: Part One
 *
 * @export
 * @param {[object]} data
 * @returns {number}
 */
export default function runner(data) {
  let count = 0

  for (const { x, y, letter, password } of data) {
    const stripped = password.replace(RegExp(`[^${letter}]`, 'g'), '')
    if (stripped.length >= x && stripped.length <= y) count += 1
  }

  return count
}

export const input = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`

export const expected = 2
