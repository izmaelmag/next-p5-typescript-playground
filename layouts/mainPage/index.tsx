import React from 'react';
import PageHeader from 'components/PageHeader';
import { Page, Group, GroupTitle, GroupLinks, GroupLink } from './styles';

const MainPageLayout = () => {
  return (
    <Page>
      <PageHeader title='Processing playground' />

      <Group>
        <GroupTitle>2D Sine series</GroupTitle>
        <GroupLinks>
          <GroupLink href='/sine/prism'>Prism</GroupLink>
          <GroupLink href='/sine/medusa'>Medusa</GroupLink>
          <GroupLink href='/sine/perlin'>Perlin</GroupLink>
          <GroupLink href='/sine/lissajous'>Lissajous</GroupLink>
        </GroupLinks>
      </Group>

      <Group>
        <GroupTitle>Audio experiments</GroupTitle>
        <GroupLinks>
          <GroupLink href='/audio/audio-source'>Audio visualiser</GroupLink>
          <GroupLink href='/audio/oscillator'>Sound oscillator</GroupLink>
        </GroupLinks>
      </Group>
    </Page>
  );
};

export default MainPageLayout;
