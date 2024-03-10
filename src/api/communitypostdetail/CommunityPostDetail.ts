import { http } from '../http';
import { useMutation, useQuery } from '@tanstack/react-query';
import { CommunityDetailData } from './model';
import { useInvalidateQueries } from '../../hook/useInvaildQueries';

const QUERY_KEY = {
    COMMUNITYDETAILDATA: 'COMMUNITYDETAILDATA',
};

const MUTATION_KEY = {
    COMMUNITYDETAILLIKEPOST: 'COMMUNITYDETAILLIKEPOST',
    COMMUNITYDETAILLIKEDELETE: 'COMMUNITYDETAILLIKEDELETE',
};

/* 커뮤니티 게시글 상세보기 Data GET */
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

/* 커뮤니티 게시글 상세보기 좋아요 */
export const usePostLikeCountUp = ({ boardId }) => {
    const URL = `/api/boards/${boardId}/like`;
    const invalidate = useInvalidateQueries();

    return useMutation(
        async () => {
            return http.post(URL).then((res) => res);
        },
        {
            onSuccess: () => invalidate([MUTATION_KEY.COMMUNITYDETAILLIKEPOST]),
        },
    );
};

/* 커뮤니티 게시글 상세보기 좋아요 취소 */

export const useDeleteLikeData = ({ boardId }) => {
    const URL = `/api/boards/${boardId}/like`;
    const invalidate = useInvalidateQueries();

    return useMutation(
        async () => {
            return http.delete(URL).then((res) => res);
        },
        {
            onSuccess: () => invalidate([MUTATION_KEY.COMMUNITYDETAILLIKEDELETE]),
        },
    );
};
