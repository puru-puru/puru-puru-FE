import Axios from 'axios';
import Cookies from 'js-cookie';
import {
    ApiResponse,
    CommunityData,
    CommunityFormData,
    DiaryEntry,
    newPlantData,
    SearchApiResponse,
    User,
    UserWithConfirmPassword,
} from './model';
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
                    const res = await axios.post('/refresh', {refreshToken}); // 리프레시 토큰을 이용하여 새로운 엑세스 토큰 발급 요청
                    console.log(res);
                    if (res.data.newAccessToken) {
                        Cookies.set('AccessToken', res.data.newAccessToken); // 발급받은 새로운 엑세스 토큰을 저장
                        originalRequest.headers.Authorization = `${res.data.newAccessToken}`; // 새로운 엑세스 토큰으로 재요청
                        return axios(originalRequest); // 재요청
                    } else {
                        alert('새로운 엑세스 토큰 발급에 실패했습니다.');
                        Cookies.remove('AccessToken');
                        window.location.href = '/signin';
                    }
                } catch (error) {
                    console.error('오류 발생: ', error);
                    Cookies.remove('AccessToken');
                    alert('알 수 없는 오류가 발생했습니다. 로그아웃됩니다.');
                    window.location.href = '/signin';
                }
            } else {
                console.error('리프레시 토큰이 없습니다. 로그인 페이지로 이동합니다.');
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
        return axios.post<Response>(url, { data }).then((res) => res.data);
    },
    put: function httpPut<Request = any, Response = unknown>(url: string, data?: Request) {
        return axios.put<Response>(url, data).then((res) => res.data);
    },
};

// 제네릭 타입을 지정함으로써 코드의 재사용성을 높이고, 함수를 호출할 때 요청과 응답의 타입을 명시적으로 지정하여 타입 안정성을 확보할 수 있습니다.
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


// 반려식물 등록
export const registrationApi = {
    post: async function registrationApiPost(formData: FormData) {
        try {
            const response = await axios.post('/api/diaries', formData);
            console.log(response);
            return response.data;
        } catch (error: any) {
            // 에러 처리
            console.error('에러 발생:', error);
            if (error.response) {
                console.error('서버 응답 데이터:', error.response.data);
            }
            throw error;
        }
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

