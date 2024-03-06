import { axios } from '../http';
import { CommunityData, CommunityFormData } from './model';

// 커뮤니티 페이지
export const communityApi = {
    get: async function communityApi<Response = CommunityData>(url: string) {
        const res = await axios.get<Response>(url);
        return res.data;
    },
    post: async function communitywriteApi<Request = CommunityFormData, Response = string>(
        url: string,
        data?: Request,
    ) {
        const res = await axios.post<Response>(url, data);
        return res.data;
    },
};
