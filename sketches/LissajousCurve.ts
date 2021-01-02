import p5 from 'p5';
import Sketch from 'globals/Sketch';
import lissajousCurve from 'utils/lissajousCurve';
import connectPoints from 'utils/connectPoints';

export type SketchParams = {
  precision?: number;
  showAxes?: boolean;
  showCurve?: boolean;
  showPoint?: boolean;
  phaseIncrement?: number;
  radius: Vector2D;
  period: Vector2D;
};

export const defaultParams: SketchParams = {
  precision: 1000,
  showAxes: true,
  showCurve: true,
  showPoint: true,
  phaseIncrement: 5,
  radius: {
    x: 75,
    y: 75
  },
  period: {
    x: 2,
    y: 3
  }
};

class LissajousCurveSketch extends Sketch<SketchParams, TP5SketchFunction> {
  private linesDistance = 20;
  private phase = 0;

  private get x(): number {
    const { p, params } = this;
    const dt = (p.millis() / 1000) * Math.PI;
    return params.radius.x * Math.sin(dt * params.period.x + this.phase);
  }

  private get y(): number {
    const { p, params } = this;
    const dt = (p.millis() / 1000) * Math.PI;
    return params.radius.y * Math.cos(dt * params.period.y + this.phase);
  }

  private drawAxes = () => {
    const { p, params, linesDistance, x, y } = this;

    let ycoord = params.radius.y + linesDistance;
    let xcoord = -params.radius.x - linesDistance;
    let xradius = params.radius.x;
    let yradius = params.radius.y;

    p.push();
    p.line(-xradius - linesDistance, ycoord, xradius, ycoord);
    p.circle(x, ycoord, 8);

    p.line(xcoord, -yradius, xcoord, yradius + linesDistance);
    p.circle(xcoord, y, 8);
    p.pop();
  };

  private drawCurve = () => {
    this.p.push();
    this.p.noFill();
    this.p.stroke(120);

    connectPoints({
      p: this.p,
      points: lissajousCurve({
        precision: this.params.precision,
        radius: this.params.radius,
        period: this.params.period,
        phase: this.phase
      })
    });

    this.p.pop();
  }

  render = (p: p5) => {
    this.p = p;

    p.setup = () => {
      p.createCanvas(480, 480);
      p.background(0);
      p.stroke(255);
      p.frameRate(60);
    };

    p.draw = () => {
      const { phaseIncrement, showCurve, showAxes } = this.params;
      
      this.phase += phaseIncrement/1000

      p.background(0);
      p.translate(480 / 2, 480 / 2);

      if (showAxes) this.drawAxes();
      if (showCurve) this.drawCurve();

      p.fill(255);
      p.circle(this.x, this.y, 4);
    };
  };
}

const sketch = new LissajousCurveSketch({ defaults: defaultParams });

export default sketch;
