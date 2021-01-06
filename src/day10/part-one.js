/**
 * Day 10: Part One
 *
 * @export
 * @param {[number]} data
 * @returns {number}
 */
export default function runner(data) {
  const set = new Set(data)

  let counts = [null, 0, 0, 1]

  let i = 0
  let j = i
  while (set.size > 0) {
    i += 1
    if (set.delete(i)) {
      counts[i - j] += 1
      j = i
    }
  }

  return counts[1] * counts[3]
}

export const input = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`

export const expected = 22 * 10
