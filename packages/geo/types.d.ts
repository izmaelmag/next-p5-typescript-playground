declare type Point = {
  x: number;
  y: number;
};

declare type Circle = {
  c: Point;
  r: number;
};

declare type Vector2D = {
  r: number;
  a: number;
};

declare type Rectangle = {
  center: Point;
  width: number;
  height: number;
  corners: Point[];
  incircle: Circle;
  circumcircle: Circle;
};
