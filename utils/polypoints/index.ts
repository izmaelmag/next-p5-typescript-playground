/**
 * @param vertices — number of vertices of polygon
 * @param radius   — distance between center and vertices
 * @param center   — polygon's center point
 * @param angle    — start angle in radians
 */
type PolypointsParams = {
  vertices?: number
  radius?: number
  center?: Point
  angle?: number
}

/**
 * Returns array of points of polygon
 * 
 * @param {PolypointsParams} params
 * @returns {Point[]}
 * @example const points = polypoints({ vertices: 6, radius: 150 })
 */
export default function polypoints({
  vertices = 3,
  radius   = 100,
  center   = {x: 0, y: 0},
  angle    = Math.PI/2,
}: PolypointsParams): Point[] {
  const points: Point[] = []

  for (let i = 0; i < vertices; i++) {
    points.push({
      x: Number((center.x + Math.sin(angle + (Math.PI*2/vertices) * i) * radius).toFixed(2)), 
      y: Number((center.y + Math.cos(angle + (Math.PI*2/vertices) * i) * radius).toFixed(2))
    })
  }

  return points
}
