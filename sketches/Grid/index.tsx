import { useEffect } from 'react';
import { useControls } from 'leva';
import SketchLayout from 'layouts/sketch';

import Sketch from './sketch';
import { controls } from './data';

const Page = () => {
  const controlsParams = useControls(controls);

  useEffect(() => Sketch.setParams(controlsParams), [controlsParams]);

  return <SketchLayout title='Grid' sketch={Sketch.render} size={Sketch.size} />;
};

export default Page;
