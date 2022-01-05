export type SketchParams = {
  xFreq: number;
  yFreq: number;
  phaseSpeedX: number;
  phaseSpeedY: number;
  radius: number;
  speed: number;
  showRulers: boolean;
};

export const defaultParams: SketchParams = {
  xFreq: 3,
  yFreq: 3,
  phaseSpeedX: 0,
  phaseSpeedY: 0,
  radius: 100,
  speed: 1,
  showRulers: true
};

export const controls = {
  xFreq: {
    value: defaultParams.xFreq,
    min: 1,
    max: 10,
    step: 1,
    label: 'X Frequency'
  },
  yFreq: {
    value: defaultParams.yFreq,
    min: 1,
    max: 10,
    step: 1,
    label: 'Y Frequency'
  },
  phaseSpeedX: {
    value: defaultParams.phaseSpeedX,
    min: 0,
    max: 50,
    step: 5,
    label: 'Phase X'
  },
  phaseSpeedY: {
    value: defaultParams.phaseSpeedY,
    min: 0,
    max: 50,
    step: 5,
    label: 'Phase Y'
  },
  radius: {
    value: defaultParams.radius,
    min: 50,
    max: 180,
    step: 1,
    label: 'Radius'
  },
  speed: {
    value: defaultParams.speed,
    min: 1,
    max: 10,
    step: 1,
    label: 'Speed'
  },
  showRulers: {
    value: defaultParams.showRulers,
    label: 'Show rulers'
  }
}
