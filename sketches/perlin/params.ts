import { SketchParams } from './types';

export const defaultParams: SketchParams = {
  radius: 1
};

export const controls = {
  radius: {
    value: defaultParams.radius,
    min: 0.5,
    max: 10,
    step: 0.1,
    label: 'Noise intense'
  }
};
