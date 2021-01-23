import React from 'react';
import Dashboard from './pages/Dashboard/index';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Dashboard />

      <GlobalStyle />
    </>
  );
};

export default App;
