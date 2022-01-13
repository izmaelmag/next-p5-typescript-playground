export type SketchParams = {
  gridSize: number;
  gap: number;
  period: number;
};

export const defaultParams: SketchParams = {
  gridSize: 5,
  gap: 10,
  period: 2
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
  },

  period: {
    value: defaultParams.period,
    min: 1,
    max: 10,
    step: 0.5,
    label: 'Period'
  }
};
