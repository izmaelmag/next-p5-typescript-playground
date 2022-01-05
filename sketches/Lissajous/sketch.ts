import p5 from 'p5';
import P5Sketch from 'sketches/P5Sketch';
import lissajousCurve from 'utils/lissajousCurve';
import { defaultParams, SketchParams } from './data';

class LissajousCurveSketch extends P5Sketch<SketchParams> {
  private linesDistance = 10;
  private currentPhase = {
    x: 0,
    y: 0
  };

  size = 420;

  private get curvePoints(): Point[] {
    return lissajousCurve({
      radius: this.params.radius,
      period: {
        x: this.params.xFreq,
        y: this.params.yFreq
      },
      phase: this.currentPhase
    });
  }

  private get x(): number {
    return this.params.radius * Math.sin((this.dt / this.params.xFreq) * this.params.speed + this.currentPhase.x);
  }

  private get y(): number {
    return this.params.radius * Math.cos((this.dt / this.params.yFreq) * this.params.speed + this.currentPhase.y);
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
    p.fill(20)
    p.circle(this.x, ycoord, 8);
    p.circle(xcoord, this.y, 8);
  };

  private drawCurve = () => {
    const p = this.p;

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

  private drawPoint = (p: p5) => {
    p.fill(20);
    p.circle(this.x, this.y, 4);
  };

  render = (p: p5) => {
    this.p = p;

    let bg = null
    const half = this.size / 2

    p.setup = () => {
      bg = p.createGraphics(this.size, this.size)

      p.createCanvas(this.size, this.size);
      p.background(255);
      bg.background(255, 0, 0);
      p.stroke(20);
      bg.noStroke(20);
      bg.fill(20)
    };

    p.draw = () => {
      this.currentPhase.x += this.params.phaseSpeedX / 1000;
      this.currentPhase.y += this.params.phaseSpeedY / 1000;

      p.background(255);
      p.translate(half, half);
      // bg.translate(half, half)

      // this.drawCurve();

      bg.circle(this.x, this.y, 2)

      p.image(bg, 0, 0)

      if (this.params.showRulers) {
        this.drawAxes(p);
        // this.drawPoint(p);
      }
    };
  };
}

const sketch = new LissajousCurveSketch({ defaults: defaultParams });

export default sketch;
