import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import App from '../src/Components/root/App';


const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
    ,
  </React.StrictMode>,
  document.getElementById('root')
);
