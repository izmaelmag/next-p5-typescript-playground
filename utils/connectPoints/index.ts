import p5 from 'p5';

type params = {
  points: Point[];
  p: p5;
};

const connectPoints = ({ points, p }: params) => {
  p.beginShape();
  for (let i = 0; i < points.length; i++) {
    p.vertex(points[i].x, points[i].y);
  }
  p.endShape();
};

export default connectPoints;
