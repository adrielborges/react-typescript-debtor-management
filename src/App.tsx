import React from 'react';
import Dashboard from './pages/Dashboard/index';
import GlobalStyle from './styles/global';
import AppContext from './hooks/index';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <AppContext>
      <Dashboard />

      <GlobalStyle />
    </AppContext>
  );
};

export default App;
