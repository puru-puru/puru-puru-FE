import { http } from '../http';
import { useMutation } from '@tanstack/react-query';
import { useInvalidateQueries } from '../../hook/useInvaildQueries';
import { UserWithConfirmPassword } from './model';

const MUTATION_KEY = {
    SIGNUP: 'SIGNUP',
};

export const usePostSignUpData = () => {
    const URL = '/api/auth/sign-up';
    const invalidate = useInvalidateQueries();

    return useMutation(
        async (body: UserWithConfirmPassword) => {
            return http.post(URL, body).then((res) => res);
        },
        {
            onSuccess: () => invalidate([MUTATION_KEY.SIGNUP]),
        },
    );
};
