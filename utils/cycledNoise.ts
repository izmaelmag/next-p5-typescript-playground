import { makeNoise2D } from 'open-simplex-noise';

type Params = {
  seed?: number;
  length: number;
};

const cycledNoiseValues = ({ length, seed }: Params): number[] => {
  const values = [];
  const step = (Math.PI / 180) * (360 / (length-1));
  const Noise2D = makeNoise2D(seed ? seed : Date.now());

  for (let a = 0; a < Math.PI * 2; a += step) {
    let nx = Math.cos(a) + 1;
    let ny = Math.sin(a) + 1;

    let noiseValue = Noise2D(nx, ny);

    values.push(Number(noiseValue.toFixed(2)));
  }

  return values;
};

export default cycledNoiseValues;
