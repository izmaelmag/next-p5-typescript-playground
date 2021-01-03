/**
 * @param {number} precision –
 */
type lissajousCurveParams = {
  phase: number;
  radius: number;
  period: Vector2D;
};

/**
 * Calculates points coordinates of lissajous curve with given parameters
 *
 * @param {lissajousCurveParams}
 */
const lissajousCurve = ({ radius, period, phase }: lissajousCurveParams): Point[] => {
  const points = [];

  const fullAmplitude = period.x * radius * 2

  for (let step = 0; step < fullAmplitude ; step += 0.1) {
    points.push({
      x: radius * Math.sin(step / period.x + phase),
      y: radius * Math.cos(step / period.y + phase)
    });
  }

  return points;
};

export default lissajousCurve;
