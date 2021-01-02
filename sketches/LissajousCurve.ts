import p5 from 'p5';
import Sketch from 'globals/Sketch';

export type SketchParams = {
  thickness?: number;
  radius: {
    x: number;
    y: number;
  };
  period: {
    x: number;
    y: number;
  };
};

export const defaultParams = {
  thickness: 4,
  radius: {
    x: 75,
    y: 75
  },
  period: {
    x: 1,
    y: 0.5
  }
};

class LissajousCurveSketch extends Sketch<SketchParams, TP5SketchFunction> {
  private linesDistance = 20;

  private get x() {
    const { p, params } = this;
    return params.radius.x * Math.sin((p.millis() * params.period.x * Math.PI / 1000));
  }

  private get y() {
    const { p, params } = this;
    return params.radius.y * Math.cos((p.millis() * params.period.y * Math.PI / 1000));
  }

  private drawLines = () => {
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

  render = (p: p5) => {
    this.p = p;

    p.setup = () => {
      p.createCanvas(window.innerWidth, window.innerHeight);
      p.background(0);
      p.stroke(255);
      p.frameRate(60);
    };

    p.draw = () => {
      p.background(0);
      p.translate(window.innerWidth / 2, window.innerHeight / 2);

      this.drawLines();

      p.fill(255);
      p.circle(this.x, this.y, this.params.thickness);
    };
  };
}

const sketch = new LissajousCurveSketch({ defaults: defaultParams });

export default sketch;
