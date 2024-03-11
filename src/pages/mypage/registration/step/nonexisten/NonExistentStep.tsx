import React, { useState } from 'react';
import {
    NonExistentContainer,
    NonExistentNextButton,
    NonExistentText,
    NonExistentTextArea,
} from './NonExistentStep.styles';
import { SharedInput } from '../../../../Shared.styles';
import { useNavigate } from 'react-router-dom';
import { plantdataApi } from '../../../../../api/http';
import { newPlantData } from '../../../../../api/model';
import { currentStepState } from '../../../../../recoil/atom';
import { useRecoilState } from 'recoil';

export const RegistrationListStep: React.FC = () => {
    const [, setCurrentStep] = useRecoilState<number>(currentStepState);
    const [plantData, setPlantData] = useState<newPlantData>({
        plantName: '',
        type: '',
        content: '',
    });
    const navigate = useNavigate();

    function formatPlantNameInput(value: string) {
        const regex = /[^\w\sㄱ-ㅎㅏ-ㅣ가-힣]/g;
        let formattedValue = value.trim();
        formattedValue = value.replace(regex, '');
        formattedValue = formattedValue.slice(0, 10);
        return formattedValue;
    }

    function formatTypeInput(value: string) {
        const regex = /[^\w\sㄱ-ㅎㅏ-ㅣ가-힣]/g;
        let formattedValue = value.trim();
        formattedValue = value.replace(regex, '');
        formattedValue = formattedValue.slice(0, 10);
        return formattedValue;
    }

    function formatContentInput(value: string) {
        let formattedValue = value;
        formattedValue = formattedValue.slice(0, 50);
        return formattedValue;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        let formattedValue = value;

        if (name === 'plantName') {
            formattedValue = formatPlantNameInput(value);
        } else if (name === 'type') {
            formattedValue = formatTypeInput(value);
        } else if (name === 'content') {
            formattedValue = formatContentInput(value);
        }
        setPlantData((prevData) => ({
            ...prevData,
            [name]: formattedValue,
        }));
    };

    // 반려 식물 이름 유효성 검사 함수
    const isValidPlantName = (name: string): boolean => {
        const regex = /[^\w\s]/g;
        return name.length >= 2 && name.length <= 10 && regex.test(name);
    };

    // 식물 종류 유효성 검사 함수
    const isValidType = (type: string): boolean => {
        const regex = /[^\w\s]/g;
        return type.length >= 2 && type.length <= 10 && regex.test(type);
    };

    // 식물 정보 유효성 검사 함수
    const isValidContent = (content: string): boolean => {
        return content.length >= 2 && content.length <= 50;
    };

    const handleSubmit = async () => {
        if (!plantData.plantName || !isValidPlantName(plantData.plantName)) {
            alert('반려 식물 이름을 2자 이상 10자 이내로 입력해주세요');
            return;
        } else if (!plantData.type || !isValidType(plantData.type)) {
            alert('식물 분류를 2자 이상 10자 이내로 입력해주세요');
            return;
        } else if (!plantData.content || !isValidContent(plantData.content)) {
            alert('식물 정보를 5자 이상 50자 이내로 입력해주세요');
            return;
        }
        try {
            await plantdataApi.post('/api/newplants', plantData);
            navigate('/myplant');
            setCurrentStep(1);
        } catch (error: any) {
            if (error.response && error.response.status === 409) {
                const errorMessage = error.response.data.errorMessage;
                alert(errorMessage);
            }
        }
    };
    return (
        <>
            <NonExistentContainer>
                <NonExistentText>
                    반려 식물 정보를 직접 입력해주세요 <br />
                    빠른 시일 내에 업데이트 하겠습니다!
                </NonExistentText>
                <p>반려 식물 이름</p>
                <SharedInput
                    placeholder="자엽풍년화 - 2~10자 이내로 입력해주세요 :)"
                    name="plantName"
                    value={plantData.plantName}
                    onChange={handleChange}
                />
                <p>식물 분류 입력</p>
                <SharedInput
                    placeholder="조록나무과 - 2~10자 이내로 입력해주세요 :)"
                    name="type"
                    value={plantData.type}
                    onChange={handleChange}
                />
                <p>식물 정보 입력</p>
                <NonExistentTextArea
                    style={{ width: '100%', height: '100px' }}
                    placeholder="물을 일주일에 세번 주어도 잘 자란다.&#13;&#10;2~50자 이내로 입력해주세요 :)"
                    name="content"
                    value={plantData.content}
                    onChange={handleChange}
                />
                <NonExistentNextButton onClick={handleSubmit}>다음</NonExistentNextButton>
            </NonExistentContainer>
        </>
    );
};
