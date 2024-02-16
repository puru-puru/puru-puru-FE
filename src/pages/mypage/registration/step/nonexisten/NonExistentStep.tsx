import React, { useState } from 'react';
import { NonExistentContainer, NonExistentNextButton, NonExistentText } from './NonExistentStep.styles';
import { SharedInput } from '../../../../Shared.styles';
import { useNavigate } from 'react-router-dom';
import { plantdataApi } from '../../../../../api/http';

export const RegistrationListStep: React.FC = () => {
    const [plantData, setPlantData] = useState({
        plantName: '',
        type: '',
        content: ''
    });
    const navigate = useNavigate();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPlantData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await plantdataApi.post('/api/newplants', plantData);
            console.log(response);
            navigate('/myplant');
        } catch (error) {
            console.error('Error occurred:', error);
        }
    };

    return (
        <>
            <NonExistentContainer>
                <NonExistentText>
                    반려 식물 정보를 직접 입력해주세요 <br/>
                    빠른 시일 내에 업데이트 하겠습니다!
                </NonExistentText>
                <p>반려 식물 이름</p>
                <SharedInput 
                    placeholder="자엽풍년화"
                    name="plantName"
                    value={plantData.plantName}
                    onChange={handleChange}
                />
                <p>식물 종류 입력</p>
                <SharedInput 
                    placeholder="조록나무과"
                    name="type"
                    value={plantData.type}
                    onChange={handleChange}
                />
                <p>식물 정보 입력</p>
                <SharedInput 
                    placeholder="물을 일주일에 세번 주어도 잘 자란다."
                    name="content"
                    value={plantData.content} 
                    onChange={handleChange}
                />
                <NonExistentNextButton onClick={handleSubmit}>다음</NonExistentNextButton>
            </NonExistentContainer>

        </>
    );
};
