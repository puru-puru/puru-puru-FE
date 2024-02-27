import React, { useEffect, useState } from 'react';
import { UserWithConfirmPassword } from '../../../api/loginapi/model';
import { ErrorMessage, LoginContainer } from '../Login.styles';
import { SignUpBotten, SignUpToggle, StyledInput } from './SignUp.styles';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../../hook/useModal';
import { usePostSignUpData } from '../../../api/loginapi/SignUp';
import { BackspaceButton } from '../../../components/atoms/button/BackspaceButton';

const SignUp: React.FC = () => {
    const { mutate } = usePostSignUpData();
    const navigate = useNavigate();
    const { open, modalOpen, modalClose } = useModal();
    const [isChecked, setIsChecked] = useState(false);
    const [user, setUser] = useState<UserWithConfirmPassword>({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const validatePassword = (password: string): boolean => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{6,12}$/;
        return passwordRegex.test(password);
    };
    const isEmailValid = user.email.length > 0 && validateEmail(user.email);
    const isPasswordValid = validatePassword(user.password);

    useEffect(() => {
        if (isEmailValid && isPasswordValid) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    }, [isEmailValid, isPasswordValid]);

    const handleSuccess = () => {
        setUser({
            email: '',
            password: '',
            confirmPassword: '',
        });
        modalOpen();
        setTimeout(() => {
            modalClose();
            navigate('/signin');
        }, 1500);
    };

    const handleError = (error: any) => {
        if (error.response) {
            const statusCode = error.response.status;
            if (statusCode === 409) {
                setError('회원가입 실패: 이미 존재하는 이메일입니다.');
            } else if (statusCode === 400) {
                setError('회원가입 실패: 데이터 형식 오류가 발생했습니다.');
            }
        }
    };
    // 회원가입 폼 제출 핸들러
    const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (user.email === '' || user.password === '') {
                alert('아이디와 비밀번호를 입력해주세요');
                return;
            }
            mutate(user, {
                onSuccess: handleSuccess,
                onError: handleError,
            });
        } catch (error: any) {
            handleError(error);
        }
    };

    return (
        <>
            <BackspaceButton onClick={() => navigate('/signin')} />
            <LoginContainer>
                <h2>회원가입</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={onSubmitHandler}>
                    <label>
                        <p>Email</p>
                        <StyledInput
                            type="text"
                            value={user.email}
                            $invalid={!isEmailValid}
                            placeholder="예)puleuspuleus@puleus.co.kr"
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />
                    </label>
                    <label>
                        <p>Password</p>
                        <StyledInput
                            type="password"
                            value={user.password}
                            $invalid={!isPasswordValid}
                            placeholder="영문 + 숫자 6자~12자로 입력해 주세요"
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                        {!isPasswordValid && user.password && (
                            <ErrorMessage>영문 + 숫자 6자~12자로 입력해 주세요</ErrorMessage>
                        )}
                        <p></p>
                        <StyledInput
                            type="password"
                            value={user.confirmPassword}
                            $invalid={!!(!user.password || user.password !== user.confirmPassword)}
                            onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                            placeholder="비밀번호를 재입력하세요"
                        />
                        {user.password !== user.confirmPassword && user.confirmPassword && (
                            <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
                        )}
                    </label>
                    <br />
                    <SignUpBotten $isChecked={isChecked} type="submit">
                        가입하기
                    </SignUpBotten>
                </form>
                {open && (
                    <>
                        <div className="dark-overlay" />
                        <SignUpToggle>회원가입 완료</SignUpToggle>
                    </>
                )}
            </LoginContainer>
        </>
    );
};

export default SignUp;
