import polypoints from 'utils/polypoints'

describe('Polypoints', () => {
  test('It creates correct array of points with given options', () => {
    const points = polypoints({
      vertices: 4, radius: 10, angle: Math.PI, center: {x: 10, y: 10}
    })

    const expectedPoints = [
      {x: 10, y: 0},
      {x: 0,  y: 10},
      {x: 10, y: 20},
      {x: 20, y: 10},
    ]

    expect(points).toEqual(expectedPoints)
  })
})

export {}
