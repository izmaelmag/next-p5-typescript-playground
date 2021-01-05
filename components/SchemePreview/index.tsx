import React, { FC } from 'react';
import { Container, Title, Caption, Cell, Cells, Group, SchemeName, Colors, Color, Layouts } from './styles';

interface SchemePreviewProps {
  scheme: ColorScheme;
}

const SchemePreview: FC<SchemePreviewProps> = ({ scheme }) => {
  return (
    <Container>
      <Title>
        {scheme.name && <SchemeName>{scheme.name}</SchemeName>}

        <Colors>
          {Object.keys(scheme.colors).map(key => (
            <Color key={`color-${key}`} color={scheme.colors[key]} />
          ))}
        </Colors>
      </Title>

      <Layouts>
        <Group>
          <Caption>Light</Caption>

          <Cells>
            <Cell color={scheme.layout.light.background} />
            <Cell color={scheme.layout.light.foreground} />
            <Cell color={scheme.layout.light.primary} />
            <Cell color={scheme.layout.light.secondary} />
          </Cells>
        </Group>

        <Group>
          <Caption>Dark</Caption>

          <Cells>
            <Cell color={scheme.layout.dark.background} />
            <Cell color={scheme.layout.dark.foreground} />
            <Cell color={scheme.layout.dark.primary} />
            <Cell color={scheme.layout.dark.secondary} />
          </Cells>
        </Group>
      </Layouts>
    </Container>
  );
};

export default SchemePreview;
