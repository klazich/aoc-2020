const next = ({ op, arg }) => ({ x, y, dir }) => {
  if (op === 'R' || op === 'L') {
    const turn = (arg / 90) * (op === 'L' ? -1 : 1)
    const newDir = (4 + dir + turn) % 4
    return { x, y, dir: newDir }
  }

  const move = op === 'F' ? ['N', 'E', 'S', 'W'][dir] : op

  if (move === 'N') return { x, y: y + arg, dir }
  if (move === 'S') return { x, y: y - arg, dir }
  if (move === 'E') return { x: x + arg, y, dir }
  if (move === 'W') return { x: x - arg, y, dir }
}

/**
 * Day 12: Part One
 *
 * @export
 * @param {[{op:string,arg:number}]} data
 * @returns {number}
 */
export default function runner(data) {
  let state = { x: 0, y: 0, dir: 1 }

  for (const ins of data) {
    state = next(ins)(state)
  }

  return Math.abs(state.x) + Math.abs(state.y)
}

export const input = `F10
N3
F7
R90
F11`

export const expected = 25
