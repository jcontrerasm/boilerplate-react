import * as React from 'react';
import '../../assets/css/style.css';
import { Container, List } from './styled';

export const App = () => (
  <Container>
    <h1>Boilerplate React</h1>
    <div>
      <img src="/assets/images/react.gif" alt="react" />
    </div>
    <p>Puedes trabajar con las siguientes tecnologias:</p>
    <List>
      <li>React</li>
      <li>Typescript</li>
      <li>Styled Components</li>
      <li>Jest</li>
    </List>
  </Container>
);
