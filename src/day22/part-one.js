/**
 * Day 22: Part One
 *
 * @export
 * @param {[[number],[number]]} data
 * @returns {number}
 */
export default function runner(data) {
  let cards

  for (cards of iterRounds(data)) {
  }

  const winner = cards.flat()

  return winner.reduce((sum, v, i) => sum + v * (winner.length - i), 0)
}

function* iterRounds([player1, player2]) {
  while (player1.length > 0 && player2.length > 0) {
    const p1card = player1.shift()
    const p2card = player2.shift()

    if (p1card > p2card) player1.push(p1card, p2card)
    if (p2card > p1card) player2.push(p2card, p1card)

    yield [player1, player2]
  }
}

export const input = `Player 1:
9
2
6
3
1

Player 2:
5
8
4
7
10`

export const expected = 306
