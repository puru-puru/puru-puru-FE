import { Suspense, lazy } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes as ReactRouterRoutes,
    Navigate,
} from 'react-router-dom';
import Layout from '../components/atoms/Layout';
import { GlobalStyles } from '../components/atoms/GlobalStyled';

const SignIn = lazy(() => import('../pages/login/signin/SignIn'));
const SignUp = lazy(() => import('../pages/login/signup/SignUp'));
const ServicePage = lazy(() => import('../pages/onboarding/service/ServicePage'));
const NameDecision = lazy(() => import('../pages/onboarding/nickname/NameDecision'));
const MainPage = lazy(() => import('../pages/mainpage/MainPage'));
const BoardTest = lazy(() => import('../pages/boardtest/boardtestpage/BoardTest'));
const BoardResult = lazy(() => import('../pages/boardtest/boardresultpage/BoardResult'));
export const Routes = () => {
    return (
        <Router>
            <GlobalStyles />
            <Suspense fallback={<div>loading...</div>}>
                <ReactRouterRoutes>
                    <Route element={<Layout />}>
                        <Route path="/mainpage" element={<MainPage />} />
                        <Route path="/service" element={<ServicePage />} />
                        <Route path="/users" element={<NameDecision />} />
                        <Route path="/" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/boardtest" element={<BoardTest />} />
                        <Route path="/boardresult" element={<BoardResult />} />
                        <Route path="*" element={<Navigate replace to="/" />} />
                    </Route>
                </ReactRouterRoutes>
            </Suspense>
        </Router>
    );
};
