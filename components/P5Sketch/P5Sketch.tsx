import { FC, useEffect, useRef, useState } from 'react';
import p5 from 'p5';

interface P5SketchProps {
  sketch: TP5SketchFunction
}

/**
 * Creates new p5.js canvas instance with given sketch function
 */
const P5Sketch: FC<P5SketchProps> = ({ sketch, ...rest }) => {
  const container: React.RefObject<HTMLDivElement> = useRef(null);
  const canvas: React.MutableRefObject<p5> = useRef(null);

  useEffect(() => {
    canvas.current = new p5(sketch, container.current);

    // Removes canvas after sketch hot-reloading
    return canvas.current.remove
  }, [sketch]);

  return <div {...rest} ref={container} />;
};

export default P5Sketch;
