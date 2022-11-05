import p5 from 'p5';
import P5Sketch from 'sketches/P5Sketch';
import { defaultParams, SketchParams } from './data';
import { Circles } from '@pp/geo';

class LissajousCurveSketch extends P5Sketch<SketchParams> {
  size = 540;
  cellSize: number = 0;
  points: Point[] = [];

  onParamsUpdate = (newParams: SketchParams) => {
    this.updatePoints();
  };

  updatePoints = () => {
    const { gridSize, gap } = this.params;

    this.points = [];
    this.cellSize = (this.size - (gridSize + 1) * gap) / gridSize;

    let start = gap + this.cellSize / 2;
    let step = this.cellSize + gap;

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        this.points.push({
          x: start + i * step,
          y: start + j * step
        });
      }
    }
  };

  render = (p: p5) => {
    this.p = p;

    p.setup = () => {
      p.createCanvas(this.size, this.size);
      p.background(255);
      p.noStroke();
      p.fill(0);
    };

    p.draw = () => {
      p.background('white');
      p.rectMode(p.CENTER);

      for (let i = 0; i < this.points.length; i++) {
        const { x, y } = this.points[i];

        let c1: Circle = { r: this.cellSize, c: { x, y } };

        let dx = this.center - x;
        let dy = this.center - y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let phase = Math.abs(distance);

        let p1 = Circles.pointAtAngle({ ...c1, r: this.cellSize / 2 }, phase * this.params.period + this.dt * 100);
        let p2 = Circles.pointAtAngle({ c: p1, r: this.cellSize / 4 }, phase * this.params.period + this.dt * -200);
        let p3 = Circles.pointAtAngle({ c: p2, r: this.cellSize / 8 }, phase * this.params.period + this.dt * 400);

        p.fill('black');
        p.circle(c1.c.x, c1.c.y, c1.r);

        p.fill('white');
        p.circle(p1.x, p1.y, this.cellSize / 2);

        p.fill('black');
        p.circle(p2.x, p2.y, this.cellSize / 4);

        p.fill('white');
        p.circle(p3.x, p3.y, this.cellSize / 8);
      }
    };
  };
}

export const sketch = new LissajousCurveSketch({ defaults: defaultParams });
