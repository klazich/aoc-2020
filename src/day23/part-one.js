/**
 * Day 23: Part One
 *
 * @export
 * @param {[number]} data
 * @returns {number}
 */
export default function runner(data) {
  for (let t = 0; t < 100; t += 1) {
    const cur = data.shift()
    const pick = [data.shift(), data.shift(), data.shift()]

    let trg = cur - 1

    while (!data.includes(trg)) {
      trg -= 1
      if (trg <= 0) trg = 9
    }

    data.unshift(cur)

    while (data[data.length - 1] !== trg) data.push(data.shift())

    data.unshift(...pick)

    while (data[data.length - 1] !== cur) data.push(data.shift())
  }

  while (data[0] !== 1) data.push(data.shift())

  return data.slice(1).join('')
}

export const input = `389125467`

export const expected = `67384529`
