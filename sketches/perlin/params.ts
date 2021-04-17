import { SketchParams } from './types'

export const defaultParams: SketchParams = {
  radius: 50
};

export const controls = {
  radius: {
    value: defaultParams.radius,
    min: 10,
    max: 100,
    step: 1,
    label: 'Radius'
  }
}
