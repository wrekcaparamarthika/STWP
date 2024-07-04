import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { clientQuery } from './lib/utils';
ReactDOM.createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={clientQuery}>
		<ReactQueryDevtools initialIsOpen={true} />
		<App />
	</QueryClientProvider>
);
