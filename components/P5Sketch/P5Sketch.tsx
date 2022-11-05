import { FC, useEffect, useRef } from 'react';
import p5 from 'p5';

type Props = { render: P5SketchFunction };

/**
 * Creates new p5.js canvas instance with given sketch function
 */
const P5Sketch = ({ render }: Props) => {
  const container: React.RefObject<HTMLDivElement> = useRef(null);
  const canvas: React.MutableRefObject<Optional<p5>> = useRef(null);

  useEffect(() => {
    if (container.current) {
      canvas.current = new p5(render, container.current);
    }

    return () => canvas.current?.remove();
  }, [render]);

  return <div ref={container} />;
};

export default P5Sketch;
