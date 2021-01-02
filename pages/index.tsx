import { useCallback, useEffect, useState } from 'react';
import TestSketch from 'sketches/check';
import dynamic from 'next/dynamic';
import styles from 'globals/input.module.css';

const DynamicP5Sketch = dynamic(() => import('components/P5Sketch'), { ssr: false });

const Sketch = new TestSketch({ defaults: {} })

const Home: React.FunctionComponent = () => {
  const [radius, setRadius] = useState<number>(1);

  const handleRangeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setRadius(Number(e.currentTarget.value));
  }, []);

  useEffect(() => {
    Sketch.setParams({ radius })
  }, [radius])

  return (
    <div>
      <DynamicP5Sketch sketch={Sketch.render} />

      <input
        className={styles.input}
        type='range'
        min={1}
        max={10}
        value={radius}
        onChange={handleRangeChange}
      />
    </div>
  );
};

export default Home;
