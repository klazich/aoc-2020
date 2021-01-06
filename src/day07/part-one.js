import { graph } from '.'

/**
 * Day 07: Part One
 *
 * @export
 * @param {[{name:string,contain:[{name:string,n:number}]}]} data
 * @returns {number}
 */
export default function runner(data) {
  const G = graph(data)
  const visited = new Set(['shiny gold'])
  const queue = ['shiny gold']

  while (queue.length > 0) {
    const node = queue.shift()

    if (node in G) {
      for (const next of G[node]) {
        if (!visited.has(next)) {
          visited.add(next)
          queue.push(next)
        }
      }
    }
  }

  return visited.size - 1
}

export const input = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`

export const expected = 4
