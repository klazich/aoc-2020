import partOneRunner from './part-one'
import partTwoRunner from './part-two'
import input from './input'

export const parse = (input) =>
  input.split('\n').map((line) =>
    line
      .split(/(e|w|[ns][ew])/g)
      .filter((v) => v !== '')
      .reduce(
        (dir, d) => {
          if (d === 'ne' || d === 'e') dir.x += 1
          if (d === 'sw' || d === 'w') dir.x -= 1
          if (d === 'nw' || d === 'w') dir.y += 1
          if (d === 'se' || d === 'e') dir.y -= 1
          if (d === 'sw' || d === 'se') dir.z += 1
          if (d === 'nw' || d === 'ne') dir.z -= 1
          return dir
        },
        { x: 0, y: 0, z: 0 }
      )
  )

if (require.main === module) {
  console.log('Day 24')
  console.log('Part One:', partOneRunner(parse(input))) // 232
  console.log('Part Two:', partTwoRunner(parse(input))) // 3519
}
