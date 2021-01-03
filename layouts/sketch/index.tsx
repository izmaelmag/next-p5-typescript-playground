import React, { FC } from 'react';
import styles from './styles.module.css';
import SketchComponent from 'components/P5Sketch'

interface SketchLayoutProps {
  title?: string;
  subtitle?: string;
  sketch?: TP5SketchFunction
}

const SketchLayout: FC<SketchLayoutProps> = ({ sketch }) => {
  return (
    <main className={styles.layout}>
      <div className={styles.sketch}>
        {sketch ? <SketchComponent sketch={sketch} /> : 'You should set sketch renderer function'}
      </div>
    </main>
  );
};

export default SketchLayout;
