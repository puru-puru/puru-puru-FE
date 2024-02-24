import { http } from '../http';
import { useMutation } from '@tanstack/react-query';
import { useInvalidateQueries } from '../../hook/useInvaildQueries';
import { User } from '../loginmodel';


const MUTATION_KEY = {
    SIGN_IN: 'SIGN_IN',
};

export const usePostSignInData = () => {
    const URL = '/api/auth/sign-in';
    const invalidate = useInvalidateQueries();

    return useMutation(
        async (body: User) => {
            return http.post(URL, body).then((res) => res);
        },
        {
            onSuccess: () => invalidate([MUTATION_KEY.SIGN_IN]),
        },
    );
};