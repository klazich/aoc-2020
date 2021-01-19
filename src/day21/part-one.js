import { intersection } from '.'

/**
 * Day 21: Part One
 *
 * @export
 * @param {[{ingredients:[string],allergens:[string]}]} data
 * @returns {number}
 */
export default function runner(data) {
  const [ingredientsAll, allergensAll] = data.reduce(
    ([iSet, aSet], { ingredients, allergens }) => [
      new Set([...iSet, ...ingredients]),
      new Set([...aSet, ...allergens]),
    ],
    [new Set(), new Set()]
  )

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

  const possible = [...intersects.values()].reduce(
    (set, v) => new Set([...set, ...v]),
    new Set()
  )

  const notPossible = new Set(ingredientsAll)
  for (const p of possible) notPossible.delete(p)

  let count = 0

  for (const { ingredients } of data) {
    const ing = new Set(ingredients)
    for (const np of notPossible) if (ing.has(np)) count += 1
  }

  return count
}

export const input = `mxmxvkd kfcds sqjhc nhms (contains dairy, fish)
trh fvjkl sbzzf mxmxvkd (contains dairy)
sqjhc fvjkl (contains soy)
sqjhc mxmxvkd sbzzf (contains fish)`

export const expected = 5
