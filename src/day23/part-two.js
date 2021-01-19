/**
 * Day 23: Part Two
 *
 * @export
 * @param {[number]} data
 * @returns {number}
 */
export default function runner(data) {
  const buffer = new ArrayBuffer(1000001 * 4)
  const next = new Uint32Array(buffer)

  let head = data[0]

  let node = head
  for (let i = 1; i < data.length; i += 1) {
    const label = data[i]
    next[node] = label
    node = label
  }

  next[node] = data.length + 1

  for (let i = 10; i < 1000000; i += 1) {
    next[i] = i + 1
  }

  next[1000000] = head

  for (let t = 0; t < 10000000; t += 1) {
    const n1 = next[head]
    const n2 = next[n1]
    const n3 = next[n2]

    next[head] = next[n3]

    let dest = head - 1
    while (dest === n1 || dest === n2 || dest === n3 || dest === 0) {
      dest -= 1
      if (dest <= 0) dest = 1000000
    }

    next[n3] = next[dest]
    next[dest] = n1

    head = next[head]
  }

  const x = next[1]
  const y = next[x]

  return x * y
}

export const input = `389125467`

export const expected = 149245887792
