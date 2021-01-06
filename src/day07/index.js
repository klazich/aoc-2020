import partOneRunner from './part-one'
import partTwoRunner from './part-two'
import input from './input'

const parseRule = (rule) => {
  const name = rule.match(/^\w*\s\w*/)[0]

  const contain = [
    ...rule.matchAll(/(?<n>\d+)\s(?<name>\w*\s\w*)/g),
  ].map(({ groups: { n, name } }) => ({ name, n: parseInt(n, 10) }))

  return {
    name,
    contain,
  }
}

export const parse = (input) => {
  return input.split('\n').map(parseRule)
}

export const graph = (data) => {
  const G = {}
  for (const { name, contain } of data) {
    for (const sub of contain) {
      G[sub.name] = G[sub.name] || []
      G[sub.name].push(name)
    }
  }
  return G
}

if (require.main === module) {
  console.log('Day 07')
  console.log('Part One:', partOneRunner(parse(input))) // 224
  console.log('Part Two:', partTwoRunner(parse(input))) // 1488
}
