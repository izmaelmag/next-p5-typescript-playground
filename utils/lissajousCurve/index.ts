/**
 * @param {number} precision –
 */
type lissajousCurveParams = {
  phase: {
    x: number;
    y: number;
  };
  radius: number;
  period: {
    x: number;
    y: number;
  };
};

/**
 * Calculates points coordinates of lissajous curve with given parameters
 *
 * @param {lissajousCurveParams}
 */
const lissajousCurve = ({ radius, period, phase }: lissajousCurveParams): Point[] => {
  const points = [];

  const fullAmplitude = period.x * radius;

  for (let step = 0; step < fullAmplitude; step += 0.5) {
    points.push({
      x: radius * Math.sin(step / period.x + phase.x),
      y: radius * Math.cos(step / period.y + phase.y)
    });
  }

  return points;
};

export default lissajousCurve;
