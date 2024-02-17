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

const MyPlantPage = lazy(() => import('../pages/mypage/MyPlantPage'));
const MyComponent = lazy(() => import('../pages/mypage/MyComponent'));
const PlantRegistrationPage = lazy(() => import('../pages/mypage/registration/PlantRegistrationPage'));

const CommunityPage = lazy(() => import('../pages/community/CommunityPage'));
const CommunityWritePage = lazy(() => import('../pages/community/CommunityWritePage'));
const MyProfile = lazy(() => import('../pages/myprofile/MyProfilepage'));

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
                        <Route path="/myplant" element={<MyPlantPage />} />
                        <Route path="/myprofile" element={<MyProfile />} />
                        <Route path="/plants" element={<PlantRegistrationPage />} />
                        <Route path="/mainpage" element={<MainPage />} />
                        <Route path="/service" element={<ServicePage />} />
                        <Route path="/users" element={<NameDecision />} />
                        <Route path="/mycomponent" element={<MyComponent />} />
                        <Route path="/community" element={<CommunityPage />} />
                        <Route path="/communitywrite" element={<CommunityWritePage />} />

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
