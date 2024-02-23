import { axios } from '../http';

// 반려식물 등록
export const registrationApi = {
    post: async function registrationApiPost(formData: FormData) {
        try {
            const response = await axios.post('/api/diaries', formData);
            return response.data;
        } catch (error) {
            // 에러 처리
            console.error('에러 발생:', error);
            if (error) {
                console.error('서버 응답 데이터:', error);
            }
            throw error;
        }
    },
};
