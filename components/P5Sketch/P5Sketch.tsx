import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import p5 from 'p5';

interface P5SketchProps {
  sketch: (p: p5) => void
}

const P5Sketch: React.FunctionComponent<P5SketchProps> = ({ sketch, ...rest }) => {
  const sketchContainerRef: React.RefObject<HTMLDivElement> = useRef(null);
  const canvas: React.MutableRefObject<p5> = useRef(null);

  useEffect(() => {
    canvas.current = new p5(sketch, sketchContainerRef.current);

    return canvas.current.remove
  }, [sketch]);

  return <div {...rest} ref={sketchContainerRef} className={styles.container} />;
};

export default P5Sketch;
