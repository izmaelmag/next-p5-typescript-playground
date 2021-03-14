import p5 from 'p5';
import P5Sketch from 'sketches/P5Sketch';
import sine from 'utils/sine';
import { SketchParams } from './types';
import { defaultParams } from './params';

class PrismSketch extends P5Sketch<SketchParams> {
  size = 480;

  private start: Point = { x: 0, y: this.size };
  private end: Point = { x: this.size, y: this.size };

  private get dt() {
    return this.p.millis() / 1000;
  }

  private getPoints = (count: number) => {
    const p: Point[] = [];

    for (let i = 0; i < count; i++) {
      p.push({
        x: this.size / 2,
        y: this.size - ((this.size - 32) / count) * i
      });
    }

    return p;
  };

  updatePoints = (points: Point[]): Point[] => {
    let updatedPoints: Point[] = [];

    for (let i = 0; i < points.length; i++) {
      let point = points[i];
      let xOff = sine({
        from: -(this.params.xAmplitude / 2),
        to: this.params.xAmplitude / 2,
        dt: this.dt,
        speed: 10 / this.params.xFrequency,
        phase: 0.14 * i
      });

      let yOff = sine({
        from: 0,
        to: this.params.yAmplitude,
        dt: this.dt,
        speed: 10 / this.params.yFrequency,
        phase: 0.1 * i
      });

      updatedPoints.push({
        x: point.x + xOff,
        y: point.y + (i ? yOff : 0)
      });
    }

    return updatedPoints;
  };

  render = (p: p5) => {
    this.p = p;

    p.setup = () => {
      p.createCanvas(this.size, this.size);
    };

    p.draw = () => {
      p.background(`rgba(${this.params.background}, ${this.params.background}, ${this.params.background}, ${1 - this.params.fadeOut})`);

      let updatedPoints = this.updatePoints(this.getPoints(this.params.pointsCount));

      for (let i = 0; i < updatedPoints.length; i++) {
        let point = updatedPoints[i];
        let hue = (((this.dt + (i * this.params.hueSize) / 10) * 100) % 360).toFixed();
        p.stroke(`hsl(${hue}, 50%, 50%)`);

        if (this.params.sides) {
          p.line(point.x, point.y, this.start.x, this.start.y);
          p.line(point.x, point.y, this.end.x, this.end.y);
        }

        if (i > 0 && this.params.spine) {
          p.line(point.x, point.y, updatedPoints[i - 1].x, updatedPoints[i - 1].y);
        }
      }
    };
  };
}

const sketch = new PrismSketch({ defaults: defaultParams });

export default sketch;
