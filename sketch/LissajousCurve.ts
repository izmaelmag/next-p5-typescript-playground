import p5 from 'p5';
import Sketch from 'sketch';
import lissajousCurve from 'utils/lissajousCurve';

export type SketchParams = {
  onlyCurve?: boolean;
  phaseSpeed?: number;
  radius?: number;
  period: Vector2D;
};

export const defaultParams: SketchParams = {
  onlyCurve: true,
  phaseSpeed: 12,
  radius: 60,
  period: {
    x: 2,
    y: 1
  }
};

class LissajousCurveSketch extends Sketch<SketchParams, TP5SketchFunction> {
  private linesDistance = 10;
  private currentPhase = 0;
  private canvasSize = 480;

  private get curvePoints(): Point[] {
    return lissajousCurve({
      radius: this.params.radius,
      period: this.params.period,
      phase: this.currentPhase
    });
  }

  private get x(): number {
    return this.params.radius * Math.sin(this.dt / this.params.period.x + this.currentPhase);
  }

  private get y(): number {
    return this.params.radius * Math.cos(this.dt / this.params.period.y + this.currentPhase);
  }

  private drawAxes = (p: p5) => {
    const ycoord = this.params.radius + this.linesDistance;
    const xcoord = -this.params.radius - this.linesDistance;
    const xradius = this.params.radius;
    const yradius = this.params.radius;

    // Axes
    p.line(-xradius - this.linesDistance, ycoord, xradius, ycoord);
    p.line(xcoord, -yradius, xcoord, yradius + this.linesDistance);

    // Point connectors
    p.line(this.x, this.y, this.x, ycoord);
    p.line(this.x, this.y, xcoord, this.y);

    // Axes pointers
    p.circle(this.x, ycoord, 8);
    p.circle(xcoord, this.y, 8);
  };

  private drawCurve = (p: p5) => {
    p.push();
    p.noFill();
    p.stroke(255, 0, 0);
    p.beginShape();

    this.curvePoints.forEach(({ x, y }) => {
      p.vertex(x, y);
    });

    p.endShape();
    p.pop();
  };

  private get dt() {
    return this.p.millis() / 1000;
  }

  private drawPoint = (p: p5) => {
    p.fill(255);
    p.circle(this.x, this.y, 4);
  };

  render = (p: p5) => {
    this.p = p;

    p.setup = () => {
      p.createCanvas(this.canvasSize, this.canvasSize);
      p.background(0);
      p.stroke(255);
    };

    p.draw = () => {
      const { phaseSpeed, onlyCurve } = this.params;

      this.currentPhase += phaseSpeed / 1000;

      p.background(0);
      p.translate(this.canvasSize / 2, this.canvasSize / 2);

      this.drawCurve(p);

      if (!onlyCurve) {
        this.drawAxes(p);
        this.drawPoint(p);
      }
    };
  };
}

const sketch = new LissajousCurveSketch({ defaults: defaultParams });

export default sketch;
