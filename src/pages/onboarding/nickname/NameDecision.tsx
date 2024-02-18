import React, { useState } from 'react';
import Cookies from 'js-cookie';

import { OnboardingButton, OnboardingContainer } from '../OnboardingPage.styles';
import {
    ClearButton,
    ErrorText,
    NameDecisionHeading,
    NameDecisionInput,
    NameDecisionText,
} from './NameDecision.styles';
import { useNavigate } from 'react-router-dom';
import { nameApi } from '../../../api/http';

const NameDecision: React.FC = () => {
    const navigate = useNavigate();
    const [nameInfo, setNameInfo] = useState({
        name: '',
        isError: false,
        isChecked: false,
        errorMessage: '',
    });

    const isNameValid = (name: string) => /^[\wㄱ-ㅎㅏ-ㅣ가-힣]{2,8}$/.test(name);

    const handleNameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newName = event.target.value;
        setNameInfo((prevState) => ({
            ...prevState,
            name: newName,
            isChecked: isNameValid(newName),
            isError: !isNameValid(newName),
            errorMessage: !isNameValid(newName) ? '닉네임은 한글/영문/숫자 2자~8자로 입력해 주세요' : '',
        }));
    };

    const handleClear = () => {
        setNameInfo((prevState) => ({
            ...prevState,
            name: '',
            isError: false,
            isChecked: false,
            errorMessage: '',
        }));
    };
    // 여러번 누를 경우 닉네임 등록이 반복됨
    const THROTTLE_TIME = 1000; // 쓰로틀링 시간 간격 (밀리초)
    let throttled = false; // 쓰로틀링 여부를 추적하는 변수
    const handleNameDecisionButtonClick = async () => {
        if (nameInfo.isChecked) {
            if (!throttled) {
                throttled = true;
                try {
                    // API 요청 보내기
                    const response = await nameApi.post(`/api/users/set-name`, {
                        nickname: nameInfo.name,
                    });

                    // API 요청 성공 시 처리
                    setNameInfo((prevState) => ({
                        ...prevState,
                        errorMessage: '',
                    }));
                    console.log('API 요청 성공:', response);

                    Cookies.set('Nickname', nameInfo.name, { expires: 365 });
                    navigate('/mainpage');
                } catch (error) {
                    // API 요청 실패 시 처리
                    setNameInfo((prevState) => ({
                        ...prevState,
                        errorMessage: '서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.',
                    }));
                    console.error('API 요청 실패:', error);
                }
                setTimeout(()=>{
                    throttled = false;
                }, THROTTLE_TIME)
            }
        }
    };

    return (
        <>
            <OnboardingContainer>
                <div>
                    <NameDecisionHeading>
                        어떻게
                        <br />
                        불러드릴까요?
                    </NameDecisionHeading>
                    <NameDecisionText>
                        이름을 한글/영문/숫자 2자~8자 내로 지어주세요
                    </NameDecisionText>
                    <div style={{ position: 'relative' }}>
                        <NameDecisionInput
                            $isError={nameInfo.isError}
                            type="text"
                            value={nameInfo.name}
                            onChange={handleNameInputChange}
                        />
                        {nameInfo.name && <ClearButton onClick={handleClear}>X</ClearButton>}
                    </div>
                    {nameInfo.errorMessage && <ErrorText>{nameInfo.errorMessage}</ErrorText>}
                </div>
                <OnboardingButton

                    $isChecked={nameInfo.isChecked}
                    onClick={handleNameDecisionButtonClick}
                >
                    확인했어요
                </OnboardingButton>
            </OnboardingContainer>

        </>
    );
};

export default NameDecision;
