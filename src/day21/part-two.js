import { intersection } from '.'

/**
 * Day 21: Part Two
 *
 * @export
 * @param {[{ingredients:[string],allergens:[string]}]} data
 * @returns {number}
 */
export default function runner(data) {
  const intersects = new Map()

  for (const { ingredients, allergens } of data) {
    for (const allergen of allergens) {
      intersects.set(
        allergen,
        intersection(
          intersects.get(allergen) ?? new Set(ingredients),
          new Set(ingredients)
        )
      )
    }
  }

  const known = []

  while (intersects.size > 0) {
    for (const [allergen, possibles] of intersects) {
      if (possibles.size === 1) {
        const newKnown = [...possibles][0]
        known.push([allergen, newKnown])
        intersects.delete(allergen)

        for (const [, otherPossibles] of intersects) {
          otherPossibles.delete(newKnown)
        }
      }
    }
  }

  return known
    .sort(([a], [b]) => (a < b ? -1 : 1))
    .map(([, ingredient]) => ingredient)
    .join(',')
}

export const input = `mxmxvkd kfcds sqjhc nhms (contains dairy, fish)
trh fvjkl sbzzf mxmxvkd (contains dairy)
sqjhc fvjkl (contains soy)
sqjhc mxmxvkd sbzzf (contains fish)`

export const expected = `mxmxvkd,sqjhc,fvjkl`
