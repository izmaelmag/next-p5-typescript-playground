import { useCallback, useEffect, useState } from 'react';
import Sketch, { SketchParams, defaultParams } from 'sketches/LissajousCurve';
import styles from 'globals/input.module.css';
import SketchComponent from 'components/P5Sketch'

const Home = () => {
  const [params, setParams] = useState<SketchParams>(defaultParams);

  const handleThicknessChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setParams({
      ...params,
      thickness: Number(e.currentTarget.value)
    });
  }, []);

  useEffect(() => {
    Sketch.setParams(params)
  }, [params])

  return (
    <div>
      <SketchComponent sketch={Sketch.render} />

      <input
        className={styles.input}
        type='range'
        min={1}
        max={10}
        value={params.thickness}
        onChange={handleThicknessChange}
      />
    </div>
  );
};

export default Home;
