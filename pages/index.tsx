import { useCallback, useEffect, useState } from 'react';
import Sketch, { SketchParams, defaultParams } from 'sketches/LissajousCurve';
import SketchComponent from 'components/P5Sketch'

const Home = () => {
  const [params, setParams] = useState<SketchParams>(defaultParams);

  useEffect(() => {
    Sketch.setParams(params)
  }, [params])

  return (
    <div>
      <SketchComponent sketch={Sketch.render} />
    </div>
  );
};

export default Home;
