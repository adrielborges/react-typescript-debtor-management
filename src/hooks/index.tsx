import React from 'react';

import { UsersProvider } from './Users';

const AppContext: React.FC = ({ children }: any) => (
  <UsersProvider>{children}</UsersProvider>
);

export default AppContext;
