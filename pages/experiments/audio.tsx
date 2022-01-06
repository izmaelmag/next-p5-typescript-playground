import { useCallback, useEffect, useState } from 'react';
import { GlobalStyle, Page } from './styles';

const AudioExpPage = () => {
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
      oscillator2.frequency.setValueAtTime(mouseX / (mouseY + 10), audioContext.currentTime); // value in hertz
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

      <h1>Check</h1>
      <button onClick={startOscillator}>Start</button>
      <button onClick={stopOscillator}>Stop</button>
    </Page>
  );
};

export default AudioExpPage;
