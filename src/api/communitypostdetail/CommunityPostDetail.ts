import { http } from '../http';
import { useQuery } from '@tanstack/react-query';
import { CommunityDetailData } from './model';

const QUERY_KEY = {
    COMMUNITYDETAILDATA: 'COMMUNITYDETAILDATA',
};

/* 보드 테스트 페이지 Data GET */
export const useGetCommunityDetailData = ({ boardId }) => {
    const URL = `/api/boards/${boardId}`;
    const fetchCommunityDetailData = () => {
        return http.get<CommunityDetailData>(URL).then((res) => res);
    };

    return useQuery<CommunityDetailData>(
        [QUERY_KEY.COMMUNITYDETAILDATA],
        async (): Promise<CommunityDetailData> => {
            const data = await fetchCommunityDetailData();
            return data;
        },
    );
};
