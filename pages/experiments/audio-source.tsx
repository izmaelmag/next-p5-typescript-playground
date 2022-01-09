import { useCallback, useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import P5Sketch from 'components/P5Sketch';
import Sketch from 'sketches/audio-source';

import PageHeader from 'components/PageHeader';

export const GlobalStyle = createGlobalStyle`
  body, html {
    padding: 0;
    margin: 0;
    width: 100%;
    min-height: 100vh;
  }
  `;

export const Page = styled.main`
  padding: 0 20px;
`;

const AudioExpPage = () => {
  const [audioElement, setAudioElement] = useState<HTMLAudioElement>(null);
  const [analyser, setAnalyser] = useState(null);

  const handleStart = useCallback(() => {
    const aud = new Audio();
    const ctx = new AudioContext();
    const als = ctx.createAnalyser();
    const src = ctx.createMediaElementSource(aud);

    src.connect(als);
    als.connect(ctx.destination);

    setAudioElement(aud);
    setAnalyser(als);
  }, []);

  useEffect(() => {
    if (audioElement) {
      audioElement.src = '/neon-sky-rain.ogg';
      audioElement.play();
    }

    if (typeof window !== undefined) {
      requestAnimationFrame(loop);
    }

    () => audioElement.pause();
  }, [audioElement]);

  const loop = useCallback(() => {
    if (analyser) {
      const fbc_array = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(fbc_array);

      Sketch.setParams({ frequencyData: fbc_array });

      if (typeof window !== undefined) {
        requestAnimationFrame(loop);
      }
    }
  }, [analyser]);

  return (
    <Page>
      <PageHeader title='Audio visualiser' homeLink />

      <P5Sketch sketch={Sketch.render} />

      <fieldset>
        <legend>Controls</legend>
        <button onClick={handleStart}>Start</button>
      </fieldset>
    </Page>
  );
};

export default AudioExpPage;
