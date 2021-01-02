/**
 * @param {number} precision –
 */
type curveParams = {
  precision: number;
  phase: number;
  radius: Vector2D;
  period: Vector2D;
};

/**
 * Calculates points coordinates of lissajous curve with given parameters
 *
 * @param {curveParams}
 */
const lissajousCurve = ({ radius, period, precision, phase }: curveParams): Point[] => {
  const points = [];

  const longestWaveLength = Math.PI * 2 * Math.max(period.x, period.y);

  const step = longestWaveLength / precision;

  for (let dt = 0; dt < longestWaveLength; dt += step) {
    points.push({
      x: radius.x * Math.sin(dt * period.x + phase),
      y: radius.y * Math.cos(dt * period.y + phase)
    });
  }

  return points;
};

export default lissajousCurve;
