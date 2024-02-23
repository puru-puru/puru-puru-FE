export interface User {
    email: string;
    password: string;
    
}
export interface UserWithConfirmPassword extends User {
    confirmPassword: string;
}
export interface ApiResponse {
    accessToken: string;
    refreshToken: string;
    hasNickname: boolean;
}