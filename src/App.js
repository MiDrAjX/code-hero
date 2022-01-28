import React from 'react';
import {StatusBar} from 'react-native';

import Routes from './routes';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#d42026" />
      <Routes />
    </>
  );
}

export default App;
