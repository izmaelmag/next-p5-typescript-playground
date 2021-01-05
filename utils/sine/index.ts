interface sineProps {
  from?: number;
  to?: number;
  dt?: number;
  speed?: number;
  phase?: number;
  int?: boolean;
}

/**
 * Oscillation between two values
 *
 * @param {sineProps} props
 *
 * @param {number} props.from  – start oscillation value
 * @param {number} props.to    – final oscillation value
 * @param {number} props.dt    – time delta to calculate current oscillation value in seconds
 * @param {number} props.speed – oscillation speed, time to make one loop in seconds
 * @param {number} props.phase – oscillation phase offset in seconds
 *
 * @returns {number}
 */
const sine = ({ from = 0, to = 1, dt = 0, speed = 1, phase = 0, int = false }: sineProps) => {
  let min = Math.min(from, to);
  let max = Math.max(from, to);
  let amp = (max - min) / 2;
  let start = min + amp;

  return Number((start + amp * Math.sin(Math.PI * 2 * ((dt + phase) / speed))).toFixed(int ? 0 : 2));
};

export default sine;
