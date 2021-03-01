import React, { FC } from 'react';
import SketchComponent from 'components/P5Sketch';
import { Layout, SketchWrapper } from './styles';

interface SketchLayoutProps {
  title?: string;
  subtitle?: string;
  sketch?: P5SketchFunction;
}

const SketchLayout: FC<SketchLayoutProps> = ({ sketch }) => {
  return (
    <Layout>
      <SketchWrapper>
        {sketch ? <SketchComponent sketch={sketch} /> : 'You should set sketch renderer function'}
      </SketchWrapper>
    </Layout>
  );
};

export default SketchLayout;
