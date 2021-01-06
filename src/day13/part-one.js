/**
 * Day 13: Part One
 *
 * @export
 * @param {{earliest:number,ids:[number]}} data
 * @returns {number}
 */
export default function runner(data) {
  const { earliest, ids } = data

  let shortest = [Infinity]
  for (const id of ids.filter((v) => v !== 'x')) {
    const wait = id - (earliest % id)
    if (wait < shortest[0]) shortest = [wait, id]
  }

  return shortest[0] * shortest[1]
}

export const input = `939
7,13,x,x,59,x,31,19`

export const expected = 295
