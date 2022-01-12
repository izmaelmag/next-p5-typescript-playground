export type SketchParams = {
  gridSize: number;
  gap: number;
};

export const defaultParams: SketchParams = {
  gridSize: 5,
  gap: 10
};

export const controls = {
  gridSize: {
    value: defaultParams.gridSize,
    min: 1,
    max: 20,
    step: 1,
    label: 'Grid size'
  },

  gap: {
    value: defaultParams.gap,
    min: 0,
    max: 40,
    step: 1,
    label: 'Gap'
  }
};
