/**
 * Day 06: Part One
 *
 * @export
 * @param {[[string]]} data
 * @returns {number}
 */
export default function runner(data) {
  return data.reduce(
    (count, group) =>
      count +
      group.reduce((set, s) => {
        for (const letter of s) set.add(letter)
        return set
      }, new Set()).size,
    0
  )
}

export const input = `abc

a
b
c

ab
ac

a
a
a
a

b`

export const expected = 11
