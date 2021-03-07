import { useEffect, useState } from 'react';
import Sketch, { SketchParams, defaultParams } from 'sketches/Prism';
import SketchLayout from 'layouts/sketch';

const Lissajous = () => {
  const [params] = useState<SketchParams>(defaultParams);

  useEffect(() => Sketch.setParams(params), [params]);

  return <SketchLayout title='Prism' sketch={Sketch.render} size={Sketch.size} />;
};

export default Lissajous;
