import { useCallback, useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body, html {
    padding: 0;
    margin: 0;
    width: 100%;
    min-height: 100vh;
  }
  `;

export const Page = styled.main`
  width: 100%;
  min-height: 100vh;
`;

const Oscillator = () => {
  const [mouseY, setMouseY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [audioContext, setAudioContext] = useState<AudioContext>(null);
  const [oscillator, setOscillator] = useState<OscillatorNode>(null);
  const [oscillator2, setOscillator2] = useState<OscillatorNode>(null);

  const stopOscillator = useCallback(() => {
    oscillator && oscillator.stop();
    oscillator2 && oscillator2.stop();
  }, [oscillator, oscillator2]);

  const startOscillator = useCallback(() => {
    if (typeof window !== undefined) {
      const ctx = new AudioContext();
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      stopOscillator();

      osc1.type = 'sine';
      osc1.connect(ctx.destination);
      osc1.start();

      osc2.type = 'triangle';
      osc2.connect(ctx.destination);
      osc2.start();

      setOscillator2(osc2);
      setOscillator(osc1);
      setAudioContext(ctx);
    }
  }, [oscillator]);

  useEffect(() => {
    if (oscillator && oscillator2 && audioContext) {
      oscillator2.frequency.setValueAtTime(mouseX, audioContext.currentTime); // value in hertz
      oscillator.frequency.setValueAtTime(200 + mouseY, audioContext.currentTime); // value in hertz
    }
  }, [mouseY, mouseX, audioContext]);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    setMouseY(event.clientY / 4);
    setMouseX(event.clientX / 4);
  }, []);

  return (
    <Page onMouseMove={handleMouseMove}>
      <GlobalStyle />

      <h1>Oscillator test</h1>
      <button onClick={startOscillator}>Start</button>
      <button onClick={stopOscillator}>Stop</button>

      <fieldset>
        <legend>Data</legend>

        <div>Osc 1 frequency: {200 + mouseY}</div>
        <div>Osc 2 frequency: {200 + mouseX}</div>
      </fieldset>
    </Page>
  );
};

export default Oscillator;
