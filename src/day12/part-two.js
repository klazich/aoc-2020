const next = ({ op, arg }) => ({ ship, wp }) => {
  if (op === 'R' || op === 'L') {
    let turn = (4 + (arg / 90) * (op === 'L' ? -1 : 1)) % 4
    const newWp = { ...wp }
    while (turn > 0) {
      ;[newWp.x, newWp.y] = [newWp.y, newWp.x * -1]
      turn -= 1
    }
    return { ship, wp: newWp }
  }

  if (op === 'F') {
    return {
      ship: {
        x: ship.x + wp.x * arg,
        y: ship.y + wp.y * arg,
      },
      wp,
    }
  }

  if (op === 'N') return { ship, wp: { x: wp.x, y: wp.y + arg } }
  if (op === 'S') return { ship, wp: { x: wp.x, y: wp.y - arg } }
  if (op === 'E') return { ship, wp: { x: wp.x + arg, y: wp.y } }
  if (op === 'W') return { ship, wp: { x: wp.x - arg, y: wp.y } }
}

/**
 * Day 12: Part Two
 *
 * @export
 * @param {[{op:string,arg:number}]} data
 * @returns {number}
 */
export default function runner(data) {
  let state = { ship: { x: 0, y: 0 }, wp: { x: 10, y: 1 } }

  for (const ins of data) {
    state = next(ins)(state)
  }

  return Math.abs(state.ship.x) + Math.abs(state.ship.y)
}

export const input = `F10
N3
F7
R90
F11`

export const expected = 286
