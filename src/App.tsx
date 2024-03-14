import { Routes } from './route/Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div role="alert">
            <p>에러:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>다시 시도</button>
        </div>
    );
}

function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: 3,
                suspense: true,
                refetchOnWindowFocus: false,
            },
        },
    });

    return (
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <Routes />
                </ErrorBoundary>
            </RecoilRoot>
        </QueryClientProvider>
    );
}

export default App;
