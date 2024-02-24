import { http } from '../http';
import { useMutation } from '@tanstack/react-query';
import { useInvalidateQueries } from '../../hook/useInvaildQueries';

const MUTATION_KEY = {
    NAME: 'NAME',
};

export const usePostNameData = () => {
    const URL = '/api/users/set-name';
    const invalidate = useInvalidateQueries();

    return useMutation(
        async (name: string) => {
            return http.post(URL, { nickname: name }).then((res) => res);
        },
        {
            onSuccess: () => invalidate([MUTATION_KEY.NAME]),
        },
    );
};