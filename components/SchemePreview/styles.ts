import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 320px;
`;

export const Title = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: baseline;
  margin-bottom: 8px;
  width: 100%;
`;

export const SchemeName = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-right: 16px;
`;

export const Colors = styled.div`
  display: flex;
  align-items: center;
`;

export const Color = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 4px;
  background-color: ${({ color }) => color};

  &:last-child {
    margin: 0;
  }
`;

export const Caption = styled.div`
  font-size: 8px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
`;

export const Cell = styled.div`
  width: 24px;
  height: 24px;
  background: ${({ color }) => color};
`;

export const Cells = styled.div`
  display: flex;
  align-items: stretch;
  overflow: hidden;
`;

export const Group = styled.div`
  margin-right: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Layouts = styled.div`
  display: flex;
  align-items: center;
`;
