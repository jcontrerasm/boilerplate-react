import * as React from 'react';

import { Navbar } from '../Navbar/Navbar';

import { Container, List } from './styled';

export const Home = () => (
  <Container>
    <h1>Boilerplate React</h1>
    <div>
      <img src="/assets/images/react.gif" alt="react" />
    </div>
    <Navbar />
    <p>Puedes trabajar con las siguientes tecnologias:</p>
    <List>
      <li>React</li>
      <li>Typescript</li>
      <li>Styled Components</li>
      <li>Jest</li>
    </List>
  </Container>
);
