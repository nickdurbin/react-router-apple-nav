import React from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import NavigationWrapper from './components/NavigationWrapper';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`;

function App() {
  return (
    <Header>
      <NavigationWrapper />
    </Header>
  );
}

export default App;