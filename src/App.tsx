import { Routes } from './route/Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

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
                <Routes />
            </RecoilRoot>
        </QueryClientProvider>
    );
}

export default App;
