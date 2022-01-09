import styled from 'styled-components';

export const Header = styled.header`
  margin: 20px 0;
  position: relative;
`;

export const Title = styled.h1`
  transform: scale(1, 0.9);
  color: #212121;
  font-size: 36px;
  line-height: 40px;
  font-weight: 400;

  display: flex;
  align-items: center;

  a {
    margin-right: 10px;
  }
`;

export const Subtitle = styled.h2`
  margin-top: 12px;
  transform: scale(1, 0.85);
  font-size: 14px;
  line-height: 20px;
  color: #555;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
