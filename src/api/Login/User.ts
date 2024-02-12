export interface User {
    email: string;
    password: string;
}

export interface UserWithConfirmPassword extends User {
    confirmpassword: string;
}

export interface ApiResponse {
    status: number;
    data: any;
    message: string;
    token?: string;
    // 기타 필요한 속성들...
}