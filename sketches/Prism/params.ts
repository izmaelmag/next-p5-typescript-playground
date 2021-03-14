import { SketchParams } from './types'

export const defaultParams: SketchParams = {
  pointsCount: 32,
  xAmplitude: 64,
  yAmplitude: 16,
  hueSize: 1,
  xFrequency: 3,
  yFrequency: 1.5,
  spine: true,
  sides: true,
  fadeOut: 0.8,
  background: 20
};

export const controls = {
  pointsCount: {
    value: defaultParams.pointsCount,
    min: 2,
    max: 300,
    step: 1,
    label: 'Triangles'
  },
  xAmplitude: {
    value: defaultParams.xAmplitude,
    min: 0,
    max: 320,
    step: 1,
    label: 'X amplitude'
  },
  yAmplitude: {
    value: defaultParams.yAmplitude,
    min: 0,
    max: 100,
    step: 1,
    label: 'Y amplitude'
  },
  xFrequency: {
    value: defaultParams.xFrequency,
    min: 0,
    max: 10,
    step: 0.02,
    label: 'X wavelength'
  },
  yFrequency: {
    value: defaultParams.yFrequency,
    min: 0,
    max: 10,
    step: 0.02,
    label: 'Y wavelength'
  },
  hueSize: {
    value: defaultParams.hueSize,
    min: 0,
    max: 2,
    step: 0.02,
    label: 'HUE size'
  },
  fadeOut: {
    value: defaultParams.fadeOut,
    min: 0,
    max: 1,
    step: 0.02,
    label: 'Fading'
  },
  spine: {
    value: defaultParams.spine,
    label: 'Connect points'
  },
  sides: {
    value: defaultParams.sides,
    label: 'Show sides'
  },
  background: {
    value: defaultParams.background,
    options: {
     'White': 255
    },
    label: 'Background'
  }
}
