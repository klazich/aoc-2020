import partOneRunner from './part-one'
import partTwoRunner from './part-two'
import input from './input'

export const parse = (input) => {
  const [r, m] = input.split('\n\n')

  const list = r.split('\n')
  const messages = m.split('\n')

  const rules = new Map()
  let a, b

  for (const rule of list) {
    const [n, str] = rule.split(':')
    const arg = str.trim().replace(/\s?(\d{1,3})\s?/g, '{$1}')
    const num = parseInt(n, 10)

    if (arg === '"a"') a = num
    else if (arg === '"b"') b = num
    else {
      rules.set(num, arg.includes('|') ? `(?:${arg})` : arg)
    }
  }

  rules.set(a, 'a')
  rules.set(b, 'b')

  return { rules, messages, a, b }
}

if (require.main === module) {
  console.log('Day 19')
  console.log('Part One:', partOneRunner(parse(input))) // 107
  console.log('Part Two:', partTwoRunner(parse(input))) // 321
}
