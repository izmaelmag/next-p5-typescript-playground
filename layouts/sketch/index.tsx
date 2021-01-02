import React, { FC, useCallback } from 'react';
import styles from './styles.module.css';
import SketchInfo from 'components/SketchInfo';

interface SketchLayoutProps {
  title?: string;
  subtitle?: string;
}

const SketchLayout: FC<SketchLayoutProps> = ({
  title, subtitle
}) => {
  const toggleFullscreen = useCallback(() => {}, []);

  return (
    <main className={styles.layout}>
      <div className={styles.sketch}></div>

      <SketchInfo title={title} subtitle={subtitle} />
    </main>
  );
};

export default SketchLayout;
