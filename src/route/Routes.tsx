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
import Spinner from '/Spin.gif'

// Lazy-loaded components
const SignIn = lazy(() => import('../pages/login/signin/SignIn'));
const SignUp = lazy(() => import('../pages/login/signup/SignUp'));
const ServicePage = lazy(() => import('../pages/onboarding/service/ServicePage'));
const NameDecision = lazy(() => import('../pages/onboarding/nickname/NameDecision'));
const MyPlantPage = lazy(() => import('../pages/mypage/MyPlantPage'));
const MyComponent = lazy(() => import('../pages/mypage/MyComponent'));
const PlantRegistrationPage = lazy(() => import('../pages/mypage/registration/PlantRegistrationPage'));
const CommunityPage = lazy(() => import('../pages/community/CommunityPage'));
const CommunityWritePage = lazy(() => import('../pages/community/write/CommunityWritePage'));
const MyProfile = lazy(() => import('../pages/myprofile/MyProfilepage'));
const MainPage = lazy(() => import('../pages/mainpage/MainPage'));
const BoardTest = lazy(() => import('../pages/boardtest/boardtestpage/BoardTest'));
const BoardResult = lazy(() => import('../pages/boardtest/boardresultpage/BoardResult'));

// RouterInfo 배열
const RouterInfo = [
    { path: '/myplant', element: <MyPlantPage />, withAuthorization: true },
    { path: '/myprofile', element: <MyProfile />, withAuthorization: true },
    { path: '/plants', element: <PlantRegistrationPage />, withAuthorization: true },
    { path: '/mainpage', element: <MainPage />, withAuthorization: true },
    { path: '/service', element: <ServicePage />, withAuthorization: false },
    { path: '/users', element: <NameDecision />, withAuthorization: false },
    { path: '/mycomponent', element: <MyComponent />, withAuthorization: true },
    { path: '/community', element: <CommunityPage />, withAuthorization: true },
    { path: '/communitywrite', element: <CommunityWritePage />, withAuthorization: true },
    { path: '/boardtest', element: <BoardTest />, withAuthorization: true },
    { path: '/boardresult', element: <BoardResult />, withAuthorization: true },
];

// Authorization 컴포넌트
const Authorization = ({ redirectTo, children }) => {
    const isAuthenticated = Cookies.get('AccessToken');
    if (isAuthenticated) {
        return <>{children}</>;
    } else {
        return <Navigate to={redirectTo} />;
    }
};

export const Routes = () => {
    return (
        <Router>
            <GlobalStyles />
            <Suspense fallback={<div  style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}> <img src={Spinner} alt="Loding" /></div>}>
                <ReactRouterRoutes>
                    <Route element={<Layout />}>
                        {RouterInfo.map(({ path, element, withAuthorization }) => (
                            <Route
                                key={path}
                                path={path}
                                element={withAuthorization ? (
                                    <Authorization redirectTo="/" children={element} />
                                ) : (
                                    element
                                )}
                            />
                        ))}
                        <Route path="/" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="*" element={<Navigate replace to="/" />} />
                    </Route>
                </ReactRouterRoutes>
            </Suspense>
        </Router>
    );
};
