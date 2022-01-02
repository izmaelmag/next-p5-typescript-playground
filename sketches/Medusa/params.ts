import { SketchParams } from './types'

export const defaultParams: SketchParams = {
  vertices: 6,
  polygonsNumber: 60,
  gap: 10,
  phaseOffset: 30,
  pointSize: 1,
  speed: 32,
  amplitude: 10,
  frequency: 94.5,
  showLines: true,
  showPolygons: true,
  color: '#aa0000',
  background: '#000000'
};

export const controls = {
  vertices: {
    value: defaultParams.vertices,
    min: 1,
    max: 10,
    step: 1,
    label: 'Vertices'
  },
  polygonsNumber: {
    value: defaultParams.polygonsNumber,
    min: 1,
    max: 500,
    step: 1,
    label: 'Layers'
  },
  gap: {
    value: defaultParams.gap,
    min: 1,
    max: 50,
    step: 1,
    label: 'Size'
  },
  phaseOffset: {
    value: defaultParams.phaseOffset,
    min: 0,
    max: 100,
    step: 0.1,
    label: 'Phase offset'
  },
  speed: {
    value: defaultParams.speed,
    min: 0,
    max: 100,
    step: 1,
    label: 'Speed'
  },
  amplitude: {
    value: defaultParams.amplitude,
    min: 0,
    max: 360,
    step: 0.1,
    label: 'Amplitude'
  },
  frequency: {
    value: defaultParams.frequency,
    min: 0,
    max: 360,
    step: 0.01,
    label: 'Frequency'
  },
  showLines: {
    value: defaultParams.showLines,
    label: 'Lines'
  },
  showPolygons: {
    value: defaultParams.showPolygons,
    label: 'Polygons'
  },
  pointSize: {
    value: defaultParams.pointSize,
    label: 'Point size'
  },
  color: {
    value: defaultParams.color,
    label: 'Color'
  },
  background: {
    value: defaultParams.background,
    label: 'Background'
  }
}
