import { useEffect } from 'react';
import { useControls } from 'leva';
import SketchLayout from 'layouts/sketch';

import Sketch from '.';
import { SketchParams, controls } from './data'

const Lissajous = () => {
  const controlsParams: SketchParams = useControls(controls);

  useEffect(() => Sketch.setParams(controlsParams), [controlsParams]);

  return <SketchLayout title='Liquid Prism' sketch={Sketch.render} size={Sketch.size} />;
};

export default Lissajous;
