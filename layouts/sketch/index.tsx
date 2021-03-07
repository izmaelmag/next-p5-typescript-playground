import React, { FC } from 'react';
import SketchComponent from 'components/P5Sketch';
import { Layout, SketchWrapper } from './styles';
import PageHeader from 'components/PageTitle';

interface SketchLayoutProps {
  title?: string;
  subtitle?: string;
  sketch?: P5SketchFunction;
  size?: number;
}

const SketchLayout: FC<SketchLayoutProps> = ({ title, subtitle, sketch, size }) => {
  return (
    <Layout>
      <PageHeader {...{ title, subtitle }} homeLink />

      <SketchWrapper size={size}>
        {sketch ? <SketchComponent sketch={sketch} /> : 'You should set sketch renderer function'}
      </SketchWrapper>
    </Layout>
  );
};

export default SketchLayout;
