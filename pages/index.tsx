import { useEffect, useState } from 'react';
import Sketch, { SketchParams, defaultParams } from 'sketch/LissajousCurve';
import SketchLayout from 'layouts/sketch';

const Home = () => {
  const [params] = useState<SketchParams>(defaultParams);

  useEffect(() => {
    Sketch.setParams(params);
  }, [params]);

  return (
    <SketchLayout
      title='Lissajous Curve'
      sketch={Sketch.render}
    />
  );
};

export default Home;
