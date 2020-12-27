import p5 from 'p5';

type SketchParams = {
  radius: number
}

class Sketch {
  params: {
    radius: number
  }

  constructor() {
    this.params = {
      radius: 1
    }
  }

  setParams = (newParams: SketchParams) => {
    this.params = {
      ...this.params,
      ...newParams
    }
  }

  render = (p: p5) => {
    p.setup = () => {
      p.createCanvas(window.innerWidth, window.innerHeight);
      p.background(0);
      p.noStroke()
    };
    
    p.draw = () => {
      p.background(0);
      p.translate(window.innerWidth/2, window.innerHeight/2)
      p.fill(255)
      p.circle(50 * Math.sin(p.millis()/100), 50 * Math.cos(p.millis()/80), this.params.radius);
    };
  }
}

export default Sketch
