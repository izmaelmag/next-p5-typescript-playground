import styled from 'styled-components'

export const Layout = styled.div`
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  padding: 0 20px 32px;
  position: relative;
`

export const SketchWrapper = styled.div<{ size: number }>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  display: flex;
  margin: 0 auto;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  border: 1px solid #eee;

  canvas {
    width: 100%;
    height: 100%;
  }
`
