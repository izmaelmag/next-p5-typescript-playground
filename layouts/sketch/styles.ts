import styled from 'styled-components'

export const Layout = styled.div`
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  padding: 0 20px 32px;
  position: relative;
`

export const SketchWrapper = styled.div<{ size: number }>`
  width: 100%;
  max-width: ${props => props.size}px;
  max-height: ${props => props.size}px;
  aspect-ratio: 1/1;
  display: flex;
  margin: 0 auto;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
`
