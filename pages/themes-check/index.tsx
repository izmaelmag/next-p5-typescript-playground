import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Emerald from 'themes/emerald';
import Blueberry from 'themes/blueberry';
import { Layout, View, SchemesList, SchemeItem } from './styles';
import SchemePreview from 'components/SchemePreview'

const Home = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(Blueberry);

  const theme = {
    colors: colorScheme
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SchemesList>
          <SchemeItem onClick={() => setColorScheme(Emerald)}>
            <SchemePreview scheme={Emerald} />
          </SchemeItem>
          
          <SchemeItem onClick={() => setColorScheme(Blueberry)}>
            <SchemePreview scheme={Blueberry} />
          </SchemeItem>
        </SchemesList>

        <View>
          <h1>Big heder</h1>
          <h2>Smol heder</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta quasi similique, amet corporis rem
            veritatis, porro ad recusandae, autem quo nobis sequi placeat magni.
          </p>
        </View>
      </Layout>
    </ThemeProvider>
  );
};

export default Home;
