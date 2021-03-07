import p5 from "p5"

export default class P5Sketch<SketchParams> {
  params: SketchParams
  p: p5
  size: number
  
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
