import partOneRunner from './part-one'
import partTwoRunner from './part-two'
import input from './input'

export const parse = (input) => {
  return input.split('\n').map((line) => {
    const [ingredients, allergens] = line.slice(0, -1).split(/\s\(contains\s/)
    return {
      ingredients: ingredients.split(' '),
      allergens: allergens.split(', '),
    }
  })
}

export function intersection(set1, set2) {
  const intersected = new Set()
  for (const v of set1) {
    if (set2.has(v)) intersected.add(v)
  }
  return intersected
}

if (require.main === module) {
  console.log('Day 21')
  console.log('Part One:', partOneRunner(parse(input))) // 2485
  console.log('Part Two:', partTwoRunner(parse(input))) // bqkndvb,zmb,bmrmhm,snhrpv,vflms,bqtvr,qzkjrtl,rkkrx
}
