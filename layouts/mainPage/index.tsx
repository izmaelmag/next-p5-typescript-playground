import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageHeader from 'components/PageTitle';
import { Page, Gallery, Preview, PreviewTitle } from './styles';

const MainPageLayout = () => {
  return (
    <Page>
      <PageHeader title='Izmael Magomedov' subtitle='Full-stack web developer' />

      <Gallery>
        <Link href='/sketches/prism'>
          <Preview>
            <Image
              src='/images/sketches/prism.png'
              alt='Prism animation'
              width={512}
              height={512}
            />

            <PreviewTitle>Liquid Prism</PreviewTitle>
          </Preview>
        </Link>

        <Link href='/sketches/medusa'>
          <Preview>
            <Image
              src='/images/sketches/medusa.png'
              alt='Medusa animation'
              width={512}
              height={512}
            />

            <PreviewTitle>Medusa</PreviewTitle>
          </Preview>
        </Link>
      </Gallery>
    </Page>
  );
};

export default MainPageLayout;
