import React, { FC } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

interface SketchInfoProps {
  title: string;
  subtitle?: string;
  nextLink?: string;
  prevLink?: string;
  isDark?: boolean;
  toggleFullscreen?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SketchInfo: FC<SketchInfoProps> = ({
  title,
  subtitle,
  nextLink,
  prevLink,
  isDark = true,
  toggleFullscreen = null,
  ...rest
}) => {
  return (
    <div {...rest} className={styles.container}>
      <h1>{title}</h1>

      {subtitle && <h2>{subtitle}</h2>}

      {nextLink && prevLink && (
        <nav>
          {prevLink && <Link href={prevLink} />}
          {nextLink && <Link href={nextLink} />}
        </nav>
      )}

      {toggleFullscreen && <button onClick={toggleFullscreen}>Fullscreen</button>}
    </div>
  );
};

export default SketchInfo;
