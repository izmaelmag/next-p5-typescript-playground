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
