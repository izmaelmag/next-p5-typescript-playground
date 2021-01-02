import p5 from 'p5';
import Sketch from 'globals/Sketch';
import lissajousCurve from 'utils/lissajousCurve';

export type SketchParams = {
  onlyCurve?: boolean;
  phaseSpeed?: number;
  radius: Vector2D;
  period: Vector2D;
};

export const defaultParams: SketchParams = {
  onlyCurve: false,
  phaseSpeed: 3,
  radius: {
    x: 100,
    y: 100
  },
  period: {
    x: 3,
    y: 2
  }
};

class LissajousCurveSketch extends Sketch<SketchParams, TP5SketchFunction> {
  private linesDistance = 10;
  private currentPhase = 0;

  private get curvePoints(): Point[] {
    return lissajousCurve({
      radius: this.params.radius,
      period: this.params.period,
      phase:  this.currentPhase
    })
  }

  private get dt(): number {
    return (this.p.millis() / 1000) * Math.PI;
  }

  private get x(): number {
    return this.params.radius.x * Math.sin(this.dt / this.params.period.x + this.currentPhase);
  }

  private get y(): number {
    return this.params.radius.y * Math.cos(this.dt / this.params.period.y + this.currentPhase);
  }

  private drawAxes = (p: p5) => {
    const ycoord  =  this.params.radius.y + this.linesDistance;
    const xcoord  = -this.params.radius.x - this.linesDistance;
    const xradius =  this.params.radius.x;
    const yradius =  this.params.radius.y;

    p.push();
    p.line(-xradius - this.linesDistance, ycoord, xradius, ycoord);
    p.line(xcoord, -yradius, xcoord, yradius + this.linesDistance);

    p.strokeWeight(1)
    p.line(this.x, this.y, this.x, ycoord);
    p.line(this.x, this.y, xcoord, this.y);
    
    p.circle(this.x, ycoord, 8);
    p.circle(xcoord, this.y, 8);
    p.pop();
  };

  private drawCurve = (p: p5) => {
    p.push();
    p.noFill();
    p.stroke(255, 0, 0);
    p.beginShape();

    this.curvePoints.forEach(({x, y}) => {
      p.vertex(x, y);
    })

    p.endShape();
    p.pop();
  }

  private drawPoint = (p: p5) => {
    p.fill(255);
    p.circle(this.x, this.y, 4);
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
      const { phaseSpeed, onlyCurve } = this.params;
      
      this.currentPhase += phaseSpeed/1000

      p.background(0);
      p.translate(480 / 2, 480 / 2);

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
