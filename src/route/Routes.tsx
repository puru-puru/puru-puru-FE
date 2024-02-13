import { Suspense, lazy } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes as ReactRouterRoutes,
    Navigate,
} from 'react-router-dom';
import Layout from '../components/atoms/Layout';
import { GlobalStyles } from '../components/atoms/GlobalStyled';

const ServicePage = lazy(() => import('../pages/onboarding/service/ServicePage'));
const NameDecision = lazy(() => import('../pages/onboarding/nickname/NameDecision'));
const MainPage = lazy(() => import('../pages/mainpage/MainPage'));
const Boardtest = lazy(() => import('../pages/boardtest/BoardTest'));

export const Routes = () => {
    return (
        <Router>
            <GlobalStyles />
            <Suspense fallback={<div>loading...</div>}>
                <ReactRouterRoutes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<ServicePage />} />
                        <Route path="/user" element={<NameDecision />} />
                        <Route path="/mainpage" element={<MainPage />} />
                        <Route path="/boardtest" element={<Boardtest />} />
                        <Route path="*" element={<Navigate replace to="/" />} />
                    </Route>
                </ReactRouterRoutes>
            </Suspense>
        </Router>
    );
};
