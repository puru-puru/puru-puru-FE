import React, { useState } from 'react';
import { OnboardingButton, OnboardingContainer } from '../OnboardingPage.styles';
import {
    ClearButton,
    ErrorText,
    NameDecisionHeading,
    NameDecisionInput,
    NameDecisionText,
} from './NameDecision.styles';
import { useNavigate } from 'react-router-dom';
import { usePostNameData } from '../../../api/loginapi/Name';

const NameDecision: React.FC = () => {
    const { mutate } = usePostNameData();
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
            errorMessage: !isNameValid(newName)
                ? '닉네임은 한글/영문/숫자 2자~8자로 입력해 주세요'
                : '',
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
                // API 요청 보내기
                mutate(nameInfo.name, {
                    onSuccess: () => {
                        setNameInfo((prevState) => ({
                            ...prevState,
                            errorMessage: '',
                        }));
                        navigate('/boardtest');
                    },
                    onError: (error: any) => {
                        if (error.response && error.response.status === 409) {
                            // 이미 사용 중인 닉네임입니다.
                            setNameInfo((prevState) => ({
                                ...prevState,
                                errorMessage: '이미 사용 중인 닉네임입니다.',
                            }));
                        } else {
                            // 다른 에러 발생한 경우
                            setNameInfo((prevState) => ({
                                ...prevState,
                                errorMessage:
                                    '서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.',
                            }));
                        }
                    },
                });

                setTimeout(() => {
                    throttled = false;
                }, THROTTLE_TIME);
            }
        } else {
            // 닉네임이 유효하지 않은 경우
            setNameInfo((prevState) => ({
                ...prevState,
                errorMessage: '닉네임은 한글/영문/숫자 2자~8자로 입력해 주세요',
            }));
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
                            placeholder="공주는행복해"
                        />
                        {nameInfo.name && (
                            <ClearButton onClick={handleClear}>
                                <img src="./Clear.svg" alt="Clear" />
                            </ClearButton>
                        )}
                    </div>
                    {nameInfo.errorMessage && <ErrorText>{nameInfo.errorMessage}</ErrorText>}
                </div>
                <OnboardingButton
                    $isChecked={nameInfo.isChecked}
                    onClick={handleNameDecisionButtonClick}
                >
                    시작하기
                </OnboardingButton>
            </OnboardingContainer>
        </>
    );
};

export default NameDecision;
