import { Playfair, PlayfairSC } from 'design/fonts';
import styled, { css } from 'styled-components';

export const Page = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 0 20px;
  max-width: 640px;
  margin: 0 auto;
`;

export const Gallery = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
`;

type PreviewProps = { wide?: boolean };
export const Preview = styled.div<PreviewProps>`
  position: relative;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 0 1px #e7ebf1 inset;
  display: block;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
  font-size: 0;
  line-height: 0;
  overflow: hidden;

  ${props =>
    props.wide &&
    css`
      grid-column-start: 1;
      grid-column-end: 3;
      aspect-ratio: 1/0.5;
    `}

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 48px;
    background: linear-gradient(to top, #000, transparent);
  }

  img {
    transform: scale(1);
    transition: transform 0.2s ease;
  }

  &:hover {
    box-shadow: 0 0 0 1px #ccc inset;

    img {
      transform: scale(1.05)
    }
  }
`;

export const PreviewTitle = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0;
  padding: 0 8px 8px;
  font-size: 24px;
  line-height: 1;
  color: white;
  font-family: ${PlayfairSC};
  z-index: 1;
`;
