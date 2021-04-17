import p5 from "p5"

export default class P5Sketch<SketchParams> {
  params: SketchParams
  p: p5
  size: number

  get dt() {
    return this.p.millis() / 1000;
  }
  
  constructor({ defaults }) {
    this.params = {
      ...defaults
    }
  }

  setParams = (newParams: SketchParams) => {
    this.params = {
      ...this.params,
      ...newParams
    }
  }

  render: P5SketchFunction
}
