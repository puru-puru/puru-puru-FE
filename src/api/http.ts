import Axios from 'axios';
import Cookies from 'js-cookie';
import { ApiResponse, PetPlant, User, UserWithConfirmPassword } from './User';
export const axios = Axios.create({
    baseURL: 'https://www.purupuru.store/',
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
        if (error.response.status === 401 || error.response.status === 419) {
            // 엑세스 토큰이 만료되었고 인증되지 않았을 경우
            originalRequest._retry = true;
            const refreshToken = Cookies.get('RefreshToken'); // 쿠키에서 리프레시 토큰을 가져옴
            if (refreshToken) {
                try {
                    const res = await axios.post('/refresh', { refreshToken }); // 리프레시 토큰을 이용하여 새로운 엑세스 토큰 발급 요청
                    console.log(res);
                    if (res.data.newAccessToken) {
                        Cookies.set('AccessToken', res.data.newAccessToken); // 발급받은 새로운 엑세스 토큰을 저장
                        originalRequest.headers.Authorization = `${res.data.newAccessToken}`; // 새로운 엑세스 토큰으로 재요청
                        return axios(originalRequest); // 재요청
                    } else {
                        console.error('새로운 엑세스 토큰 발급 실패');
                    }
                } catch (error) {
                    console.error('오류 발생: ', error);
                    window.location.href = '/';
                }
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
        return axios.post<Response>(url, { data }).then((res) => res.data);
    },
    put: function httpPut<Request = any, Response = unknown>(url: string, data?: Request) {
        return axios.put<Response>(url, data).then((res) => res.data);
    },
};

// 로그인
export const signinApi = {
    post: async function signinApiPost<Request = User, Response = ApiResponse>(
        url: string,
        data?: Request,
    ) {
        const res = await axios.post<Response>(url, data);
        return res.data;
    },
};

// 회원가입
export const signupApi = {
    post: async function signupApiPost<Request = UserWithConfirmPassword, Response = ApiResponse>(
        url: string,
        data?: Request,
    ) {
        const res = await axios.post<Response>(url, data);
        return res.data;
    },
};

// 닉네임 설정
export const nameApi = {
    post: async function nameApiPost<Request = string, Response = string>(
        url: string,
        data?: Request,
    ) {
        const res = await axios.post<Response>(url, data);
        return res.data;
    },
};

//
export const myplantApi = {
    get: async function httpGet<Response = PetPlant>(url: string) {
        const res = await axios.get<Response>(url);
        return res.data;
    },
};
