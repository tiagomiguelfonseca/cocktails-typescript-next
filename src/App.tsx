import React from 'react';
import MainRouter from './router/Router';
import Theme from './utils/Theme/Theme';

const App = () => {
  return (
    <Theme>
      <MainRouter/>
    </Theme>
  )
}

export default App;
