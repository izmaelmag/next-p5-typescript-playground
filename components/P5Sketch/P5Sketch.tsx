import { FC, useEffect, useRef } from 'react';
import p5 from 'p5';

/**
 * Creates new p5.js canvas instance with given sketch function
 */
const P5Sketch: FC<{
  sketch: P5SketchFunction;
}> = ({ sketch, ...rest }) => {
  const container: React.RefObject<HTMLDivElement> = useRef(null);
  const canvas: React.MutableRefObject<Optional<p5>> = useRef(null);

  useEffect(() => {
    if (container.current) {
      canvas.current = new p5(sketch, container.current);
    }

    // Removes canvas after sketch hot-reloading
    return canvas.current?.remove;
  }, [sketch]);

  return <div {...rest} ref={container} />;
};

export default P5Sketch;
