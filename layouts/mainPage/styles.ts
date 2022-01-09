import Link from 'next/link';
import styled from 'styled-components';

export const Page = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 0 20px;
  margin: 0 auto;
`;

export const Group = styled.section`
  &:not(:last-of-type) {
    margin-bottom: 24px;
  }
`;

export const GroupTitle = styled.h3`
  margin-bottom: 4px;

  &::before {
    content: '༄ ';
  }
`;

export const GroupLinks = styled.nav`
  display: flex;
  align-items: baseline;

  a:not(:first-child)::before {
    content: ' ';
  }

  a:not(:last-child)::after {
    content: ' 𐬺';
  }
`;

export const GroupLink = styled(Link)``;
