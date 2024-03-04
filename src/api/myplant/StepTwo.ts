import { http } from '../http';
import { useQuery } from '@tanstack/react-query';
import { SearchApiResponse } from './model';

const QUERY_KEY = {
    STEPTWO: 'STEPTWO',
};

export const useSearchPlants = (searchItem: string) => {
    const URL = `/api/plants/search/${searchItem}`;
    
    return useQuery<SearchApiResponse>(
        [QUERY_KEY.STEPTWO, searchItem],
        async () => {
            try {
                const response = await http.get<SearchApiResponse>(URL);
                return response;
            } catch {
                throw new Error('데이터를 불러오는 중에 문제가 발생했습니다.');
            }
        },
        {
            enabled: false, // 검색어가 있을 때에만 쿼리를 실행
        }
    );
};