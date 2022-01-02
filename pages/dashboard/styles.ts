import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body, html {
    padding: 0;
    margin: 0;
    width: 100%;
    min-height: 100vh;   
  }
`;

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`
