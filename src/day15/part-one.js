/**
 * Day 15: Part One
 *
 * @export
 * @param {[number]} data
 * @returns {number}
 */
export default function runner(data, n = 2020) {
  const spoken = new Map()

  let pre = null

  for (let i = 0; i < n; i += 1) {
    for (; i < data.length; i += 1) {
      if (pre !== null) spoken.set(pre, i - 1)
      pre = data[i]
    }

    if (!spoken.has(pre)) {
      spoken.set(pre, i - 1)
      pre = 0
    } else {
      const diff = i - 1 - spoken.get(pre)
      spoken.set(pre, i - 1)
      pre = diff
    }

    // console.log(i, pre)
  }

  return pre
}

export const input = `3,1,2`

export const expected = 1836
