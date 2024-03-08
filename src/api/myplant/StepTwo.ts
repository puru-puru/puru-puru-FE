import { http } from '../http';
import { useQuery } from '@tanstack/react-query';
import { SearchApiResponse } from './model';
import { debounce } from '../../components/debounce/Debounce';
const QUERY_KEY = {
    STEPTWO: 'STEPTWO',
};

export const useSearchPlants = (searchItem: string) => {
    const URL = `/api/plants/search/${searchItem}`;
    const debouncedKeyword = debounce(searchItem,500);
    return useQuery<SearchApiResponse>(
        [QUERY_KEY.STEPTWO, debouncedKeyword],
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