import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  padding: 0 20px 32px;
  position: relative;
`;

export const SketchWrapper = styled.div<{ size: number }>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  box-shadow: 0 0 0 1px #eee;

  canvas {
    width: 100%;
    height: 100%;
  }
`;
