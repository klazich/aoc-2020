/**
 * Day 25: Part One
 *
 * @export
 * @param {[number,number]} data
 * @returns {number}
 */
export default function runner(data) {
  const [cardKey, doorKey] = data

  const cardLoopSize = determineLoopSize(cardKey, 7)
  const doorLoopSize = determineLoopSize(doorKey, 7)

  return transform(cardLoopSize, doorKey)
}

const LOOP = 20201227
function loop(value, subjectNumber) {
  return (value * subjectNumber) % LOOP
}

function determineLoopSize(key, subjectNumber) {
  let loopSize = 0
  let value = 1

  while (value !== key) {
    value = loop(value, subjectNumber)
    loopSize += 1
  }

  return loopSize
}

function transform(loopSize, subjectNumber) {
  let value = 1

  for (let i = 0; i < loopSize; i += 1) {
    value = (value * subjectNumber) % LOOP
  }

  return value
}

export const input = `5764801
17807724`

export const expected = 14897079
