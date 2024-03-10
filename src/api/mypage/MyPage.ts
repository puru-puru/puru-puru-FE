import { http } from '../http';
import { useMutation, useQuery /*useQueryClient*/ } from '@tanstack/react-query';
import { IUserInfo } from './model';
import { useInvalidateQueries } from '../../hook/useInvaildQueries';

const QUERY_KEY = {
    MYINFO: 'MYINFO',
};

/* 유저정보 조회 GET */
export const useGetUserInfo = () => {
    const URL = '';
    const fetchUserInfo = () => {
        return http.get<IUserInfo>(URL).then((res) => res);
    };

    return useQuery<IUserInfo>([QUERY_KEY.MYINFO], async (): Promise<IUserInfo> => {
        const data = await fetchUserInfo();
        return data;
    });
};

/**
 *
 * 닉네임 업데이트 API
 */
export const useUpdateNickName = () => {
    const URL = '';
    const invalidate = useInvalidateQueries();
    // const queryClient = useQueryClient();

    return useMutation(
        async (body) => {
            return http.put(URL, body).then((res) => res);
        },
        {
            // onSuccess: () => queryClient.invalidateQueries([QUERY_KEY.MYINFO]),
            onSuccess: () => invalidate([QUERY_KEY.MYINFO]),
        },
    );
};
