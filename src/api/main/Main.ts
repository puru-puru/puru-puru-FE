import { http } from '../http';
import { useQuery } from '@tanstack/react-query';
import { MainPageData } from './model';

const QUERY_KEY = {
    MAINPAGEDATA: 'MAINPAGEDATA',
};

/* 메인 페이지 데이터 GET */
export const useGetMainPageData = () => {
    const URL = '/api/main';
    const fetchMainPageData = () => {
        return http.get<MainPageData>(URL).then((res) => res);
    };

    return useQuery<MainPageData>([QUERY_KEY.MAINPAGEDATA], async (): Promise<MainPageData> => {
        const data = await fetchMainPageData();
        return data;
    });
};

// useQuery는 훅이라서 앞에 항상 use를 사용해야한다.
