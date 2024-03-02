import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 예시 라우터 정보
const RouterInfo = [
    { path: '/signin', title: '로그인' },
    { path: '/', title: '홈' },
    { path: '/signup', title: '회원가입' },
    { path: '/myplant', title: '나의 반려식물' },
    { path: '/myprofile', title: '나의 프로필' },
    { path: '/plants', title: '식물 등록' },
    { path: '/mainpage', title: '메인 페이지' },
    { path: '/service', title: '서비스 페이지' },
    { path: '/users', title: '닉네임 등록' },
    { path: '/mycomponent', title: '반려식물 일지' },
    { path: '/community', title: '커뮤니티' },
    { path: '/communitywrite', title: '커뮤니티 작성' },
    { path: '/boardtest', title: '게시판' },
    { path: '/boardresult', title: '게시판 결과' },
];

export default function ScrollToTop(props) {
    const { pathname } = useLocation();

    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        const currentPath = window.location.pathname;
        const route = RouterInfo.find((route) => route.path === currentPath);
        if (route) {
            titleElement.innerHTML = `puru-puru - ${route.title}`;
        }
    }, [pathname]);

    return <>{props.children}</>;
}
