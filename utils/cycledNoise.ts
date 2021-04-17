import { makeNoise2D } from 'open-simplex-noise';

type Params = {
  length: number;
};

const cycledNoiseValues = ({ length }: Params): number[] => {
  const values = [];
  const step = (Math.PI / 180) * (360 / (length-1));
  const Noise2D = makeNoise2D(Date.now());

  for (let a = 0; a < Math.PI * 2; a += step) {
    let nx = Math.cos(a) + 1;
    let ny = Math.sin(a) + 1;

    let noiseValue = Noise2D(nx, ny);

    values.push(Number(noiseValue.toFixed(2)));
  }

  return values;
};

export default cycledNoiseValues;
