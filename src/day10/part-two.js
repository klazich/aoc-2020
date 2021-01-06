/**
 * Day 10: Part Two
 *
 * @export
 * @param {[number]} data
 * @returns {number}
 */
export default function runner(data) {
  const sorted = data.sort((a, b) => a - b)
  const max = sorted[sorted.length - 1] + 3
  const adaptors = [0, ...sorted, max]

  const counts = Array.from({ length: max }, () => 0)
  counts[0] = 1

  for (let i = 1; i < adaptors.length; i += 1) {
    const a = adaptors[i]
    counts[a] = (counts[a - 3] || 0) + (counts[a - 2] || 0) + counts[a - 1]
  }

  return counts[max]
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

export const expected = 19208
