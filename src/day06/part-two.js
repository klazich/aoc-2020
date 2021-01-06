/**
 * Day 06: Part Two
 *
 * @export
 * @param {[[string]]} data
 * @returns {number}
 */
export default function runner(data) {
  return data.reduce((count, group) => {
    const intersection = new Set(group[0])

    for (const person of group) {
      const personSet = new Set(person)
      for (const q of intersection)
        if (!personSet.has(q)) intersection.delete(q)
      if (intersection.size === 0) break
    }

    return count + intersection.size
  }, 0)
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

export const expected = 6
