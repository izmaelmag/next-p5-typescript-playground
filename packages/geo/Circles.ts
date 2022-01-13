import { toRad } from './utils';

export default class Circles {
  static pointAtAngle(C: Circle, deg: number): Point {
    let angle = toRad(deg);

    let x = C.c.x + (C.r / 2) * Math.sin(angle);
    let y = C.c.y + (C.r / 2) * Math.cos(angle);

    return { x, y };
  }
}
