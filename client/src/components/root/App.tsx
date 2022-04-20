// import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '../contexts/UserContext';
import { TagProvider } from '../contexts/TagContext';
import { QueryClient, QueryClientProvider } from 'react-query';

import Main from '../root/Main';

const queryClient = new QueryClient();

export const App = () => {
  return (
    // <HelmetProvider>
      <AuthProvider>
        <TagProvider>
          <QueryClientProvider client={queryClient}>
            <Main />
          </QueryClientProvider>
        </TagProvider>
      </AuthProvider>
    // </HelmetProvider>
  );
};
