import { useEffect } from 'react';
import { useControls } from 'leva';
import Sketch, { SketchParams, controls } from 'sketches/Medusa';
import SketchLayout from 'layouts/sketch';

const Lissajous = () => {
  const controlsParams: SketchParams = useControls(controls);

  useEffect(() => Sketch.setParams(controlsParams), [controlsParams]);

  return <SketchLayout title='Medusa' sketch={Sketch.render} size={Sketch.size} />;
};

export default Lissajous;
