import { http } from '../http';
import { useQuery } from '@tanstack/react-query';
import { MyPostPageData } from './model';

const QUERY_KEY = {
    MYPOSTDATA: 'MYPOSTDATA',
};

/* 커뮤니티 페이지 내 정보 데이터 GET */
export const useGetMyPostPageData = () => {
    const URL = '/api/boards/myposts';
    const fetchMyPostPageData = () => {
        return http.get<MyPostPageData>(URL).then((res) => res);
    };

    return useQuery<MyPostPageData>([QUERY_KEY.MYPOSTDATA], async (): Promise<MyPostPageData> => {
        const data = await fetchMyPostPageData();
        return data;
    });
};
