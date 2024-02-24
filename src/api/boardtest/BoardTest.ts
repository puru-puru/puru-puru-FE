import { http } from '../http';
import { useQuery } from '@tanstack/react-query';
import { BoardTestPageData, NickName } from './model';

const QUERY_KEY = {
    BOARDTESTPAGEDATA: 'BOARDTESTPAGEDATA',
    NICKNAMEDATA: 'NICKNAMEDATA',
};

/* 보드 테스트 페이지 Data GET */
export const useGetBoardTestPageData = () => {
    const URL = '/api/test-result/:boardNum';
    const fetchBoardTestPageData = () => {
        return http.get<BoardTestPageData>(URL).then((res) => res);
    };

    return useQuery<BoardTestPageData>(
        [QUERY_KEY.BOARDTESTPAGEDATA],
        async (): Promise<BoardTestPageData> => {
            const pageData = await fetchBoardTestPageData();
            return pageData;
        },
    );
};

/* 보드 테스트 페이지 닉네임 GET */
export const useGetNickNameData = () => {
    const URL = '/api/tests';
    const fetchNickNameData = () => {
        return http.get<NickName>(URL).then((res) => res);
    };

    return useQuery<NickName>([QUERY_KEY.NICKNAMEDATA], async (): Promise<NickName> => {
        const nicknameData = await fetchNickNameData();
        return nicknameData;
    });
};
