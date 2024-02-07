import React, { useState } from 'react';
import { OnboardingBotten, OnboardingContainner } from '../OnboardingPage.styles';
import {
    ClearButton,
    ErrorText,
    NameDecisionHeading,
    NameDecisionInput,
    NameDecisionText,
} from './NameDecision.styles';
import { useNavigate } from 'react-router-dom';
import { http } from '../../../api/http';

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
        setNameInfo(prevState => ({
            ...prevState,
            name: newName,
            isChecked: isNameValid(newName),
            isError: !isNameValid(newName),
            errorMessage: !isNameValid(newName)
                ? '닉네임은 2자~8자로 입력해 주세요'
                : '',
        }));
    };

    const handleClear = () => {
        setNameInfo(prevState => ({
            ...prevState,
            name: '',
            isError: false,
            isChecked: false,
            errorMessage: '',
        }));
    };

    const handleNameDecisionButtonClick = () => {
        if (nameInfo.isChecked) {
            // API 요청 보내기
            http
                .post(`/api/users/set-name`, { nickname: nameInfo.name })
                .then((response) => {
                    // API 요청 성공 시 처리
                    setNameInfo(prevState => ({
                        ...prevState,
                        errorMessage: '',
                    }));
                    console.log('API 요청 성공:', response);
                    navigate('/main');
                })
                .catch((error) => {
                    // API 요청 실패 시 처리
                    setNameInfo(prevState => ({
                        ...prevState,
                        errorMessage: '서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.',
                    }));
                    console.error('API 요청 실패:', error);
                });
        }
    };

    return (
        <>
            <OnboardingContainner>
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
                <OnboardingBotten $isChecked={nameInfo.isChecked} onClick={handleNameDecisionButtonClick}>
                    확인했어요
                </OnboardingBotten>
            </OnboardingContainner>
        </>
    );
};

export default NameDecision;
