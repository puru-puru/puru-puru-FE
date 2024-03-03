import Axios from 'axios';
import Cookies from 'js-cookie';
import { CommunityData, CommunityFormData, DiaryEntry, newPlantData } from './model';
import { SearchApiResponse } from './myplant/model';
export const axios = Axios.create({
    baseURL: `${import.meta.env.VITE_REACT_APP_SERVER_URL}`,
});

// Request 인터셉터
axios.interceptors.request.use(
    (api) => {
        const accessToken = Cookies.get('AccessToken');
        if (accessToken) {
            api.headers.Authorization = `Bearer ${accessToken}`;
        }
        return api;
    },
    (error) => {
        return Promise.reject(error);
    },
);

// Response 인터셉터
axios.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && error.config.url !== '/api/auth/sign-in') {
            // 엑세스 토큰이 만료되었고 인증되지 않았을 경우
            originalRequest._retry = true;
            const refreshToken = Cookies.get('RefreshToken'); // 쿠키에서 리프레시 토큰을 가져옴
            if (refreshToken) {
                try {
                    const res = await axios.get('/api/refresh', {
                        headers: {
                            refresh: `Bearer ${refreshToken}`,
                        },
                    }); // 리프레시 토큰을 이용하여 새로운 엑세스 토큰 발급 요청
                    if (res.data.data.newAccessToken) {
                        Cookies.set('AccessToken', res.data.data.newAccessToken, {
                            expires: 1 / 24,
                            sameSite: 'strict',
                            overwrite: true,
                        }); // 발급받은 새로운 엑세스 토큰을 저장
                        Cookies.set('RefreshToken', res.data.data.newRefreshToken, {
                            expires: 30,
                            sameSite: 'strict',
                            overwrite: true,
                        });
                        originalRequest.headers.Authorization = `Bearer ${res.data.data.newAccessToken}`; // 새로운 엑세스 토큰으로 재요청
                        return axios(originalRequest); // 재요청
                    } else {
                        alert('사용자 인증에 실패했습니다. 재 로그인 해주세요');
                        Cookies.remove('AccessToken');
                        Cookies.remove('RefreshToken');
                        window.location.href = '/signin';
                    }
                } catch (error) {
                    // Cookies.remove('AccessToken');
                    alert('로그인 인증이 만료 되었습니다. 로그아웃됩니다.');
                    window.location.href = '/signin';
                }
            } else {
                alert('로그인이 필요합니다. 로그인 페이지로 이동합니다.');
                window.location.href = '/signin';
            }
        }
        return Promise.reject(error);
        // 명시적으로 실패한 경우를 처리하기 위해
        // Promise.reject(error)를 반환함으로써 오류가 호출자에게 전파되고 이에 대한 적절한 처리가 가능
    },
);

export const http = {
    get: function httpGet<Response = unknown>(url: string) {
        return axios.get<Response>(url).then((res) => res.data);
    },
    post: function httpPost<Request = any, Response = unknown>(url: string, data?: Request) {
        return axios.post<Response>(url, data).then((res) => res.data);
    },
    put: function httpPut<Request = any, Response = unknown>(url: string, data?: Request) {
        return axios.put<Response>(url, data).then((res) => res.data);
    },
    patch: function httpPatch<Request = any, Response = unknown>(url: string, data?: Request) {
        return axios.patch<Response>(url, data).then((res) => res.data);
    },
    delete: function httpDelete< Response = unknown>(url: string){
        return axios.delete<Response>(url).then((res)=> res.data);
    }
};

// 제네릭 타입을 지정함으로써 코드의 재사용성을 높이고, 함수를 호출할 때 요청과 응답의 타입을 명시적으로 지정하여 타입 안정성을 확보할 수 있습니다.

// 반려식물 페이지
export const myplantApi = {
    get: async function myplantApi<Response = DiaryEntry>(url: string) {
        const res = await axios.get<Response>(url);
        return res.data;
    },
    // 일지 수정
    patch: async function diariesApi<Request = string, Response = string>(
        url: string,
        data?: Request,
    ) {
        const res = await axios.patch<Response>(url, data);
        return res.data;
    },
};

// 반려식물 검색
export const searchApi = {
    get: async function searchApi<Response = SearchApiResponse>(url: string) {
        const res = await axios.get<Response>(url);
        return res.data;
    },

    // 검색 결과 등록
    post: async function searchresultsApi<Request = unknown, Response = string>(
        url: string,
        data?: Request,
    ) {
        const res = await axios.post<Response>(url, data);
        return res.data;
    },
};

// 검색결과 없을때 새로 등록
export const plantdataApi = {
    post: async function plantdataApi<Request = newPlantData, Response = string>(
        url: string,
        data?: Request,
    ) {
        const res = await axios.post<Response>(url, data);
        return res.data;
    },
};

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
