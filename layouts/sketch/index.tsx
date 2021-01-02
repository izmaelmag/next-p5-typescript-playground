import React, { FC, useCallback } from 'react';
import styles from './styles.module.css';
import SketchInfo from 'components/SketchInfo';
import SketchComponent from 'components/P5Sketch'

interface SketchLayoutProps {
  title?: string;
  subtitle?: string;
  sketch?: TP5SketchFunction
}

const SketchLayout: FC<SketchLayoutProps> = ({
  title, subtitle, sketch
}) => {
  return (
    <main className={styles.layout}>
      <div className={styles.sketch}>
        {sketch ? <SketchComponent sketch={sketch} /> : 'You should set sketch renderer function'}
      </div>

      <SketchInfo title={title} subtitle={subtitle} />
    </main>
  );
};

export default SketchLayout;
