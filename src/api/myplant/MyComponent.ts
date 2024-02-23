import { http } from '../http';
import { useMutation } from '@tanstack/react-query';
import { useInvalidateQueries } from '../../hook/useInvaildQueries';

const MUTATION_KEY = {
    MYCOMPONENT: 'MYCOMPONENT',
};

export const usePatchMyComponentData = ({templateId}) => {
    const URL = `/api/random/templates/${templateId}`;
    const invalidate = useInvalidateQueries();

    return useMutation(
        async (editedEntry) => {
            return http.patch(URL, { answer: editedEntry }).then((res) => res);
        },
        {
            onSuccess: () => invalidate([MUTATION_KEY.MYCOMPONENT]),
        },
    );
};