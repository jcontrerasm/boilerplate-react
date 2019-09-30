import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  border: 1px solid #000;
  border-radius: 5px;
  display: inline;
  padding: 5px 0;
`;

export const LinkCustom = styled(Link)`
  text-decoration: none;
  padding: 5px 25px;
  transition: .5s;
  :hover {
    background-color: #D6E6EB;
  }
`;
