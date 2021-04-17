import p5 from 'p5';
import P5Sketch from 'sketches/P5Sketch';
import { SketchParams } from './types'
import cycledNoiseValues from 'utils/cycledNoise'

class Medusa extends P5Sketch<SketchParams> {
  size = 480;
  circlesCount = 10;
  radius = 100;
  radiusStep = 10;

  render = (p: p5) => {
    this.p = p;

    const nv = cycledNoiseValues({ length: this.size })

    p.setup = () => {
      p.createCanvas(this.size, this.size);
    };
    
    let i = 0
    p.draw = () => {
      p.background(0)
      p.stroke(255)
      p.noFill()


      let x = p.width/2
      let y = p.height/2 + 50 * nv[i%this.size]


      p.circle(x, y, 10);

      i++;
    };
  };
}

const sketch = new Medusa({ defaults: {} });

export default sketch;
