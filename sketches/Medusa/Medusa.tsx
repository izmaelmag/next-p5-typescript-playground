import p5 from 'p5';
import P5Sketch from 'sketches/P5Sketch';
import polypoints from 'utils/polypoints';
import { SketchParams } from './types';
import { defaultParams } from './params'

class Medusa extends P5Sketch<SketchParams> {
  size = 480;

  center = {
    x: this.size/2,
    y: this.size/2
  }

  render = (p: p5) => {
    this.p = p;

    p.setup = () => {
      p.createCanvas(this.size, this.size);
    };

    p.draw = () => {
      const {
        polygonsNumber,
        vertices,
        showPolygons,
        gap,
        phaseOffset,
        speed,
        amplitude,
        frequency,
        showLines
      } = this.params;

      p.background(this.params.background);
      p.stroke(this.params.color);
      p.fill(this.params.color);

      if (showPolygons) {
        p.noFill()
      }

      for (let i = polygonsNumber; i >= 0; i--) {
        let currentPoints = polypoints({
          vertices: vertices,
          center: this.center,
          radius: (i+1) * gap + phaseOffset * Math.sin(this.dt*speed/50 + i * 0.2),
          angle: p.radians((amplitude + frequency) * Math.sin(this.dt*speed/100 + i * 0.2 * frequency))
        })
  
        if (showPolygons) {
          p.beginShape()
          currentPoints.map(({x, y}) => p.vertex(x, y))
          p.endShape(p.CLOSE)
        }
          
        if (showLines) {
          let prevPoints = polypoints({
            vertices: vertices,
            center: this.center,
            radius: (i) * gap + phaseOffset * Math.sin(this.dt*speed/50 + (i-1) * 0.2),
            angle: p.radians((amplitude + frequency) * Math.sin(this.dt*speed/100 + (i-1) * 0.2 * frequency))
          })
    
          currentPoints.map(({ x, y }, i) => {
            p.line(x, y, prevPoints[i].x, prevPoints[i].y)
          })
        }
        
        if (!showLines && !showPolygons) {
          currentPoints.forEach(({x, y}) => p.circle(x, y, 1))
        }
      }
    };
  };
}

const sketch = new Medusa({ defaults: defaultParams });

export default sketch;
