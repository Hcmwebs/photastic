import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { AppProvider } from './context/AppContext.jsx';
import GlobalStyles from './styles/GlobalStyles.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
	<StrictMode>
		<AppProvider>
			<QueryClientProvider client={queryClient}>
				<GlobalStyles />
				<App />
			</QueryClientProvider>
		</AppProvider>
	</StrictMode>
);
