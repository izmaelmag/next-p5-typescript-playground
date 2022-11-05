import p5 from 'p5';
import P5Sketch from 'sketches/P5Sketch';
import { defaultParams, SketchParams } from './data';

class CheckSketch extends P5Sketch<SketchParams> {
  size = 640;

  checkSize = () => {
    if (typeof window !== undefined) {
      const minSize = Math.min(window.innerWidth, window.innerHeight);
      if (minSize < this.size) {
        this.size = minSize - 80;
      }

      addEventListener('resize', () => {
        setTimeout(() => {}, 2000)
      })
    }
  };

  render = (p: p5) => {
    this.p = p;

    p.setup = () => {
      this.checkSize()
      p.createCanvas(this.size, this.size);
    };

    p.draw = () => {
      p.background(0)
      p.fill(255)
      p.noStroke()
      p.circle(this.center, this.center, 75 + 25 * p.sin(this.dt));
    };
  };
}

export const sketch = new CheckSketch({ defaults: defaultParams });
