import p5 from 'p5';
import P5Sketch from 'sketches/P5Sketch';
import { defaultParams, SketchParams } from './data';

class LissajousCurveSketch extends P5Sketch<SketchParams> {
  size = 540;

  render = (p: p5) => {
    this.p = p;

    p.setup = () => {
      p.createCanvas(this.size, this.size);
      p.background(255);
      p.noStroke();
      p.fill(0);
      p.rectMode(p.CENTER);
    };

    p.draw = () => {
      p.background('white');

      const { gridSize, gap } = this.params;
      const cellSize = (this.size - (gridSize + 1) * gap) / gridSize;

      p.rectMode(p.CENTER);
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          let x = gap + cellSize / 2 + i * (cellSize + gap);
          let y = gap + cellSize / 2 + j * (cellSize + gap);

          p.fill('black');
          p.rect(x, y, cellSize, cellSize);

          p.fill('red');
          p.circle(x, y, 4);
        }
      }

      p.rectMode(p.CORNER);
      p.fill('rgba(0, 255, 0, 0.33)');

      p.rect(0, 0, gap, this.size);
      p.rect(0, 0, this.size, gap);
      p.rect(0, this.size - gap, this.size, gap);
      p.rect(this.size - gap, 0, gap, this.size);
    };
  };
}

const sketch = new LissajousCurveSketch({ defaults: defaultParams });

export default sketch;
