import { Suspense, lazy } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes as ReactRouterRoutes,
    Navigate,
} from 'react-router-dom';
import Cookies from 'js-cookie';
import Layout from '../components/atoms/Layout';
import { GlobalStyles } from '../components/atoms/GlobalStyled';
import RouteChangeTracker from '../components/RouteChangeTracker';
import ScrollToTop from '../components/DocumentTitle';
import RedirectionKakao from '../pages/login/social/redirection/RedirectionKakao';
import RedirectionGoogle from '../pages/login/social/redirection/RedirectionGoogle';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

// Lazy-loaded components
const SignIn = lazy(() => import('../pages/login/signin/SignIn'));
const SignUp = lazy(() => import('../pages/login/signup/SignUp'));
const ServicePage = lazy(() => import('../pages/onboarding/service/ServicePage'));
const NameDecision = lazy(() => import('../pages/onboarding/nickname/NameDecision'));
const MyPlantPage = lazy(() => import('../pages/mypage/MyPlantPage'));
const MyComponent = lazy(() => import('../pages/mypage/MyComponent'));
const PlantRegistrationPage = lazy(
    () => import('../pages/mypage/registration/PlantRegistrationPage'),
);
const CommunityPage = lazy(() => import('../pages/community/CommunityPage'));
const CommunityWritePage = lazy(() => import('../pages/community/write/CommunityWritePage'));
const MyProfile = lazy(() => import('../pages/myprofile/MyProfilepage'));
const MainPage = lazy(() => import('../pages/mainpage/MainPage'));
const BoardTest = lazy(() => import('../pages/boardtest/boardtestpage/BoardTest'));
const BoardResult = lazy(() => import('../pages/boardtest/boardresultpage/BoardResult'));
const SplashGuidePage = lazy(() => import('../pages/onboarding/guide/SplashGuidePage'));

// RouterInfo 배열
const RouterInfo = [
    { path: '/signin', element: <SignIn />, withAuthorization: false },
    { path: '/', element: <SplashGuidePage />, withAuthorization: false },
    { path: '/signup', element: <SignUp />, withAuthorization: false },
    { path: '/myplant', element: <MyPlantPage />, withAuthorization: true },
    { path: '/myprofile', element: <MyProfile />, withAuthorization: true },
    { path: '/plants', element: <PlantRegistrationPage />, withAuthorization: true },
    { path: '/mainpage', element: <MainPage />, withAuthorization: true },
    { path: '/service', element: <ServicePage />, withAuthorization: true },
    { path: '/users', element: <NameDecision />, withAuthorization: true },
    { path: '/mycomponent', element: <MyComponent />, withAuthorization: true },
    { path: '/community', element: <CommunityPage />, withAuthorization: true },
    { path: '/communitywrite', element: <CommunityWritePage />, withAuthorization: true },
    { path: '/boardtest', element: <BoardTest />, withAuthorization: true },
    { path: '/boardresult', element: <BoardResult />, withAuthorization: true },
];

const Authorization = ({ redirectTo, children }) => {
    const refreshToken = Cookies.get('RefreshToken');
    if (refreshToken) {
        return <>{children}</>;
    } else {
        return <Navigate to={redirectTo} />;
    }
};

export const Routes = () => {

    return (
        <Router>
            <GlobalStyles />
            <Suspense
                fallback={
                    <LoadingSpinner/>
                }
            >
                <ScrollToTop/>
                <RouteChangeTracker />
                <ReactRouterRoutes>
                    <Route element={<Layout />}>
                        {RouterInfo.map(({ path, element, withAuthorization }) => (
                            <Route
                                key={path}
                                path={path}
                                element={
                                    withAuthorization ? (
                                        <Authorization redirectTo="/signin" children={element} />
                                    ) : (
                                        element
                                    )
                                }
                            />
                        ))}
                        <Route path="/api/auth/login/google/return" element={<RedirectionGoogle />} />
                        <Route path="/api/auth/login/kakao/return" element={<RedirectionKakao />} />
                        <Route path="*" element={<Navigate replace to="/signin" />} />
                    </Route>
                </ReactRouterRoutes>
            </Suspense>
        </Router>
    );
};
