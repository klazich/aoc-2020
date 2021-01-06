import { graph } from '.'

/**
 * Day 07: Part Two
 *
 * @export
 * @param {[{name:string,contain:[{name:string,n:number}]}]} data
 * @returns {number}
 */
export default function runner(data) {
  const G = data.reduce((g, { name, contain }) => {
    g[name] = contain
    return g
  }, {})

  return DFS(G, 'shiny gold') - 1
}

function DFS(graph, start) {
  const node = graph[start]

  let count = 1
  for (const { name, n } of node) {
    count += DFS(graph, name) * n
  }

  return count
}

export const input = `shiny gold bags contain 2 dark red bags.
dark red bags contain 2 dark orange bags.
dark orange bags contain 2 dark yellow bags.
dark yellow bags contain 2 dark green bags.
dark green bags contain 2 dark blue bags.
dark blue bags contain 2 dark violet bags.
dark violet bags contain no other bags.`

export const expected = 126
