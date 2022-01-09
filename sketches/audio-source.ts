import p5 from 'p5';
import P5Sketch from 'sketches/P5Sketch';

class AusioSource extends P5Sketch<{ frequencyData: Uint8Array }> {
  size = 512;

  render = (p: p5) => {
    this.p = p;

    const width = 512;
    const height = 480;
    const precision = 0.5;

    const number = width / precision;
    const step = width / number;

    p.setup = () => {
      p.createCanvas(width, height);
      p.strokeWeight(1);
      p.background(0);
      p.stroke(255);
    };

    p.draw = () => {
      p.background('rgba(0, 0, 0, 0.002)');

      for (let x = 0; x <= width; x += step) {
        const val = this.params.frequencyData[x];
        const val2 = this.params.frequencyData.reverse()[x];

        p.stroke('red');
        p.point(x, height - val / 2);

        p.stroke('green');
        p.point(512 - x, height - val2 / 2);
      }
    };
  };
}

const sketch = new AusioSource({ defaults: { frequencyData: new Uint8Array() } });

export default sketch;
