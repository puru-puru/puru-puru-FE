import { http } from '../http';
import { useQuery } from '@tanstack/react-query';
import { SearchApiResponse } from './model';

const QUERY_KEY = {
    STEPTWO: 'STEPTWO',
};

export const useGetPlantStepTwoData = ({ searchItem }, options = {}) => {
    const URL = `/api/plants/search/${searchItem}`;
    const GetStepTwoData = () => {
        return http.get<SearchApiResponse>(URL).then((res) => res);
    };

    return useQuery<SearchApiResponse>(
        [QUERY_KEY.STEPTWO],
        async () => {
            const data = await GetStepTwoData();
            return data;
        },
        {
            ...options,
            enabled: !!searchItem, // 검색어가 있을 때에만 쿼리를 실행
        }
    );
};