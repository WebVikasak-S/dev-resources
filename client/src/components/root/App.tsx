// import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '../../Components/contexts/UserContext';
import { TagProvider } from '../../Components/contexts/TagContext';
import { QueryClient, QueryClientProvider } from 'react-query';

import Main from '../../Components/root/Main';

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
