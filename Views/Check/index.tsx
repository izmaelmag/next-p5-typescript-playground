import { useEffect } from 'react';
import { useControls } from 'leva';
import P5Sketch from 'components/P5Sketch';
import { sketch, controls } from 'sketches/Check';
import { Page, CanvasWrapper } from './styles';

const Check = () => {
  const controlsParams = useControls(controls);

  useEffect(() => sketch.setParams(controlsParams), [controlsParams]);

  return (
    <Page>
      <CanvasWrapper>
        <P5Sketch render={sketch.render} />;
      </CanvasWrapper>
    </Page>
  );
};

export default Check;
