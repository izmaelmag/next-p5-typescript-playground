import React, { FC } from 'react';
import { Header, Title, Subtitle } from './styles';
import Link from 'next/link'

interface PageHeaderProps {
  title?: string;
  subtitle?: string;
  homeLink?: boolean;
}

const PageHeader: FC<PageHeaderProps> = ({ title, subtitle, homeLink }) => {
  if (!title && !subtitle) return null;

  return (
    <Header>
      {homeLink && <Link href="/">home</Link>}
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Header>
  );
};

export default PageHeader;
