import p5 from 'p5';
import P5Sketch from 'sketches/P5Sketch';
import { SketchParams } from './types';
import cycledNoiseValues from 'utils/cycledNoise';

class Medusa extends P5Sketch<SketchParams> {
  size = 600;
  points = [];
  state = {
    xPos: this.size / 2
  };

  setPoints = () => {
    for (let i = 0; i < this.p.width; i += 2) {
      this.points.push({
        x: i,
        y: this.p.height / 2,
        noise: cycledNoiseValues({ length: 360 }),
        intense: 0
      });
    }
  };

  render = (p: p5) => {
    this.p = p;

    p.setup = () => {
      p.createCanvas(this.size, this.size);
      this.setPoints();
      p.stroke(255);
      p.noFill();
    };
    let t = 0;

    p.draw = () => {
      p.background(0);

      p.beginShape();
      for (let i = 0; i < this.points.length; i++) {
        const { x, y, noise } = this.points[i];

        let dist = Math.abs(p.width / 2 - x);
        let intense =
          100 * (Math.sin(this.dt) + 1) * p.constrain(1 - p.map(dist, 0, 100 * (Math.sin(this.dt) + 1), 0, 1), 0, 1);
        let dy = intense * noise[t % 360];

        p.vertex(x, y + dy);
      }
      p.endShape();
      t++;
    };
  };
}

const sketch = new Medusa({ defaults: {} });

export default sketch;
