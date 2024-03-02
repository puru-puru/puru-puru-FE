import { http } from '../http';
import { useQuery } from '@tanstack/react-query';
import { BoardTestData } from './model';

const QUERY_KEY = {
    BOARDTESTPAGEDATA: 'BOARDTESTPAGEDATA',
};

/* 보드 테스트 페이지 Data GET */
export const useGetBoardTestPageData = ({ boardId }) => {
    const URL = `/api/test-result/${boardId}`;
    const fetchBoardTestPageData = () => {
        return http.get<BoardTestData>(URL).then((res) => res);
    };

    return useQuery<BoardTestData>(
        [QUERY_KEY.BOARDTESTPAGEDATA],
        async (): Promise<BoardTestData> => {
            const pageData = await fetchBoardTestPageData();
            return pageData;
        },
    );
};
