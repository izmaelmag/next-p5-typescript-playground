import p5 from 'p5';

export default class P5Sketch<SketchParams> {
  params: SketchParams;
  p: p5;
  size: number;

  get dt() {
    return this.p.millis() / 1000;
  }

  get center() {
    return this.size / 2;
  }

  constructor({ defaults }) {
    this.params = {
      ...defaults
    };
  }

  onParamsUpdate = (newParams?: SketchParams) => {
    return;
  };

  setParams = (newParams: SketchParams) => {
    this.params = {
      ...this.params,
      ...newParams
    };

    this.onParamsUpdate(newParams);
  };

  render: P5SketchFunction;
}
