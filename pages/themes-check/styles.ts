import styled from 'styled-components';

export const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const View = styled.div`
  width: 320px;
  height: min(520px, 90vh);
  border-radius: 6px;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.03);
  background: ${({ theme }) => theme.colors.layout.light.background};
  padding: 16px 20px;
  transition: background-color .3s ease;

  h1 {
    color: ${({ theme }) => theme.colors.layout.light.primary};
    font-size: 32px;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    transition: color .3s ease;
  }

  h2 {
    color: ${({ theme }) => theme.colors.layout.light.secondary};
    font-size: 20px;
    font-weight: 500;
    transition: color .3s ease;
  }

  p {
    color: ${({ theme }) => theme.colors.layout.light.foreground};
    font-size: 14px;
    line-height: 1.5;
    transition: color .3s ease;
  }
`;

export const SchemesList = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 320px;
  height: 100vh;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
`;

export const SchemeItem = styled.div`
  padding: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`
