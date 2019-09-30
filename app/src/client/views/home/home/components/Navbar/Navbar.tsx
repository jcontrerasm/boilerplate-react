import * as React from 'react';

import { Container, Item, LinkCustom} from './styled';

export const Navbar = () => (
  <Container>
    <Item>
      <LinkCustom to={'/user/' + 123}>User</LinkCustom>
    </Item>
  </Container>
);
