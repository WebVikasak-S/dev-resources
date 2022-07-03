// import { HelmetProvider } from 'react-helmet-async';
import React from 'react';
import { AuthProvider } from '../contexts/UserContext';
import { TagProvider } from '../contexts/TagContext';
import { QueryClient, QueryClientProvider } from 'react-query';

import Main from '../root/Main';

const queryClient = new QueryClient();

const App = () => {
  return (
    // <HelmetProvider>
    <AuthProvider>
      <TagProvider>
        <QueryClientProvider client={queryClient}>
          <Main />
        </QueryClientProvider>
      </TagProvider>
    </AuthProvider>
    //  </HelmetProvider>
  );
};

export default App;
