import p5 from 'p5';
import P5Sketch from 'sketches/P5Sketch';
import { SketchParams } from './types';
import { makeNoise4D } from 'open-simplex-noise';

class Perlin extends P5Sketch<SketchParams> {
  size = 512;
  scale = 0.02;

  render = (p: p5) => {
    this.p = p;

    const Noise4D = makeNoise4D(567567);

    p.setup = () => {
      p.createCanvas(this.size, this.size);
      p.strokeWeight(1);
      p.noStroke();
    };

    p.draw = () => {
      p.background(0);

      let center = this.size / 2;
      let lines = 40;

      for (let j = 0; j < lines; j++) {
        p.beginShape();
        for (let i = 0; i <= this.size; i += 10) {
          let x = i,
            y = 0;
          p.fill(255);

          let radius = 1;
          let distance = center - Math.abs(center - x);
          let intense = p.constrain(distance, 0, 100) / 100;
          let noiseAngle = (p.TWO_PI * (this.dt + j * 0.1)) / 10;

          let noiseX = Noise4D(
            this.scale * x + 100,
            this.scale * y + 100,
            radius * Math.cos(noiseAngle),
            radius * Math.sin(noiseAngle)
          );
          let noiseY = Noise4D(
            this.scale * x,
            this.scale * y,
            radius * Math.cos(noiseAngle),
            radius * Math.sin(noiseAngle)
          );

          p.circle(x + intense * 50 * noiseX, y + 50 * intense * noiseY + j * 15, 2 + 5 * intense * (noiseX - noiseY));
        }
        p.endShape();
      }
    };
  };
}

const sketch = new Perlin({ defaults: {} });

export default sketch;
