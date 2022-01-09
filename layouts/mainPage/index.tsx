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
          <GroupLink href='/sketches/prism'>Prism</GroupLink>
          <GroupLink href='/sketches/medusa'>Medusa</GroupLink>
        </GroupLinks>
      </Group>

      <Group>
        <GroupTitle>Experiments</GroupTitle>
        <GroupLinks>
          <GroupLink href='/experiments/audio-source'>Audio visualiser</GroupLink>
          <GroupLink href='/experiments/oscillator'>Sound oscillator</GroupLink>
        </GroupLinks>
      </Group>
    </Page>
  );
};

export default MainPageLayout;
