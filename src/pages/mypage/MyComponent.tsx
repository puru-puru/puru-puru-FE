import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SharedInput } from '../Shared.styles';
import { MyComponentButton, MyComponentContainer } from './MyComponent.styles';
import { myplantApi } from '../../api/http';


const MyComponent: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { diaryId, templateId, question, answer } = location.state|| {};
    console.log(diaryId, templateId, question, answer)

    const [editedEntry, setEditedEntry] = useState(answer);


    const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedEntry(e.target.value);
    };

    // 수정을 저장할 때 PATCH 요청을 보냅니다.
    const saveChanges = async () => {
        if(editedEntry && editedEntry.length >= 5 && editedEntry.length <=25){
            alert('5자 이상 25자 이내로 작성해주세요')
            return;
        }
        try {
            const response = await myplantApi.patch(`/api/random/templates/${templateId}`, {
                answer: editedEntry, 
            });
            navigate('/myplant');
            console.log('일지 수정 완료:', response);
        } catch (error) {
            console.error('일지 수정 실패:', error);
        }
    };

    return (
        <MyComponentContainer>
            <h3>{question}</h3>
            <SharedInput value={editedEntry} placeholder="5자 이상 25자 이내로 입력해주세요 :)" onChange={handleEdit} />

            {/* 저장 버튼 */}
            <MyComponentButton onClick={saveChanges}>저장</MyComponentButton>
        </MyComponentContainer>
    );
};

export default MyComponent;