import p5 from "p5"

export default class Sketch<SketchParams, RendererFunction> {
  params: SketchParams
  p: p5
  
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

  render: RendererFunction
}
