import styled from 'styled-components';
import { Playfair, PlayfairSC } from 'design/fonts';

export const Header = styled.header`
  margin: 20px 0;
  position: relative;

  a {
    font-size: 16px;
    line-height: 20px;
    font-family: ${PlayfairSC};
    color: #666;
    background-image: linear-gradient(to bottom, transparent 18px, #ccc 19px);
    background-size: 1px 19px;

    &:hover {
      color: #333;
      background-image: linear-gradient(to bottom, transparent 18px, #aaa 19px);
    }
  }
`;

export const Title = styled.h1`
  transform: scale(1, 0.9);
  color: #212121;
  font-size: 36px;
  line-height: 40px;
  font-family: ${PlayfairSC};
  font-weight: 400;
`;

export const Subtitle = styled.h2`
  margin-top: 12px;
  transform: scale(1, 0.85);
  font-size: 14px;
  line-height: 20px;
  color: #555;
  font-family: ${PlayfairSC};
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
