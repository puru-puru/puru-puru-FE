import { http } from '../http';
import { useQuery } from '@tanstack/react-query';
import { MyCommentPageData, MyPostPageData } from './model';

const QUERY_KEY = {
    MYPOSTDATA: 'MYPOSTDATA',
    MYCOMMENTDATA: 'MYCOMMENTDATA',
};

/* 커뮤니티 페이지 내 정보 데이터 GET */

// 내가 작성한 글 GET
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

// 내가 작성한 댓글 GET
export const useGetMyCommentPageData = () => {
    const URL = '/api/boards/mycomments';
    const fetchMyCommentPageData = () => {
        return http.get<MyCommentPageData>(URL).then((res) => res);
    };

    return useQuery<MyCommentPageData>(
        [QUERY_KEY.MYCOMMENTDATA],
        async (): Promise<MyCommentPageData> => {
            const commentData = await fetchMyCommentPageData();
            return commentData;
        },
    );
};
