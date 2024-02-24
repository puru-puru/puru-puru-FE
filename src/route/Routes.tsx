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
import Spinner from '/Spin.gif';
// import RedirectionKakao from '../pages/login/social/redirection/RedirectionKakao';
import RouteChangeTracker from '../components/RouteChangeTracker';
import ScrollToTop from '../components/scrollToTop';

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
    { path: '/signin', title: '로그인', element: <SignIn />, withAuthorization: false },
    { path: '/', title: '홈', element: <SplashGuidePage />, withAuthorization: false },
    { path: '/signup', title: '회원가입', element: <SignUp />, withAuthorization: false },
    { path: '/myplant', title: '나의 반려식물', element: <MyPlantPage />, withAuthorization: true },
    { path: '/myprofile', title: '나의 프로필', element: <MyProfile />, withAuthorization: true },
    {
        path: '/plants',
        title: '식물 등록',
        element: <PlantRegistrationPage />,
        withAuthorization: true,
    },
    { path: '/mainpage', title: '메인 페이지', element: <MainPage />, withAuthorization: true },
    { path: '/service', title: '서비스 페이지', element: <ServicePage />, withAuthorization: true },
    { path: '/users', title: '닉네임 등록', element: <NameDecision />, withAuthorization: true },
    {
        path: '/mycomponent',
        title: '반려식물 일지',
        element: <MyComponent />,
        withAuthorization: true,
    },
    { path: '/community', title: '커뮤니티', element: <CommunityPage />, withAuthorization: true },
    {
        path: '/communitywrite',
        title: '커뮤니티 작성',
        element: <CommunityWritePage />,
        withAuthorization: true,
    },
    { path: '/boardtest', title: '게시판 테스트', element: <BoardTest />, withAuthorization: true },
    {
        path: '/boardresult',
        title: '게시판 결과',
        element: <BoardResult />,
        withAuthorization: true,
    },
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
                    <div
                        style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        {' '}
                        <img src={Spinner} alt="Loding" />
                    </div>
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
                        {/* <Route path="/api/auth/login/kakao/return" element={<RedirectionKakao />} /> */}
                        <Route path="*" element={<Navigate replace to="/signin" />} />
                    </Route>
                </ReactRouterRoutes>
            </Suspense>
        </Router>
    );
};
