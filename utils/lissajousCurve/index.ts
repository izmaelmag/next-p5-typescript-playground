/**
 * @param {number} precision –
 */
type lissajousCurveParams = {
  phase: number;
  radius: Vector2D;
  period: Vector2D;
};

/**
 * Calculates points coordinates of lissajous curve with given parameters
 *
 * @param {lissajousCurveParams}
 */
const lissajousCurve = ({ radius, period, phase }: lissajousCurveParams): Point[] => {
  const points = [];

  const fullAmplitude = radius.x * 2

  for (let step = 0; step < fullAmplitude ; step += 0.1) {
    points.push({
      x: radius.x * Math.sin(step / period.x + phase),
      y: radius.y * Math.cos(step / period.y + phase)
    });
  }

  return points;
};

export default lissajousCurve;
