import React from 'react';
import { Container, Description, Icons } from './style';
import Icon from '~/components/Icon';

export default function Footer() {
  return (
    <Container data-cy="footer">
      <Icons>
        <a
          href="https://twitter.com/brian_lovin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon glyph="twitter" />
        </a>

        <a
          href="https://github.com/brianlovin/brian-lovin-next"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon glyph="github" />
        </a>
      </Icons>

      <Description>
        Copyright whenever. This is
        <a
          href="https://github.com/brianlovin/brian-lovin-next"
          target="_blank"
          rel="noopener noreferrer"
        >
          open source
        </a>
        .
      </Description>
    </Container>
  );
}
