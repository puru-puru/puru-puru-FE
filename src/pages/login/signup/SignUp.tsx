import React, { useEffect, useState } from 'react';
import { UserWithConfirmPassword } from '../../../api/Login/User';
import { ErrorMessage, LoginContainer, LoginInput } from '../Login.styles';
import { SignUpBotten } from './SignUp.styles';
import { useNavigate } from 'react-router-dom';
import { signupApi } from '../../../api/http';
const SignUp: React.FC = () => {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);
    const [user, setUser] = useState<UserWithConfirmPassword>({
        email: '',
        password: '',
        confirmpassword: '',
    });
    const [error, setError] = useState('');
    

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    // 이메일과 비밀번호가 5자 이상 입력되었을 때 isChecked를 true로 설정
    useEffect(() => {
        const isEmailValid = user.email.length > 0 && validateEmail(user.email);
        const isPasswordValid = user.password.length >= 5;
    
        if (isEmailValid && isPasswordValid) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    }, [user.email, user.password]);
    

    // 회원가입 폼 제출 핸들러
    const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (user.email === '' || user.password === '') {
                alert('아이디와 비밀번호를 입력해주세요');
                return;
            }
            const response = await signupApi.post('http://localhost:3001/api/auth/sign-up', user);

            if (response.data) {
                alert(response.data.Message);
                setUser({
                    email: '',
                    password: '',
                    confirmpassword: '',
                });
                navigate('/');
            } else {
                setError('회원가입 실패');
            }
        } catch (error: any) {
            if (error.response) {
                if (error.response.status === 409) {
                    setError('회원가입 실패: 이미 존재하는 아이디입니다.');
                } else {
                    setError('회원가입 실패: 서버 오류가 발생했습니다.');
                }
            }
        }
    };


    return (
        <LoginContainer>
                <h2>회원가입</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={onSubmitHandler}>
                    <label>
                        <p>Email</p>
                        <LoginInput
                            type="text"
                            value={user.email}
                            placeholder="예)puleuspuleus@puleus.co.kr"
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />
                    </label>
                    <label>
                        <p>Password</p>
                        <LoginInput
                            type="password"
                            value={user.password}
                            placeholder="비밀번호를 5자 이상 입력하세요"
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                        {user.password.length < 5 && user.password && <ErrorMessage>비밀번호를 5자 이상 입력하세요</ErrorMessage>}
                        <p></p>
                        <LoginInput 
                        type="password"
                        value={user.confirmpassword}
                        onChange={(e) => setUser({ ...user, confirmpassword: e.target.value })}
                        placeholder="비밀번호를 재입력하세요" 
                        />
                        {user.password!==user.confirmpassword && user.confirmpassword && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
                    </label>
                    <br />
                    <SignUpBotten $isChecked={isChecked}type="submit">가입하기</SignUpBotten>
                </form>
        </LoginContainer>
    );
};

export default SignUp;
