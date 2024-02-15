import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SharedInput } from '../Shared.styles';
import { MyComponentButton, MyComponentContainer } from './MyComponent.styles';


const MyComponent: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { diaryId, templateId, question, answer } = location.state|| {};


    const [editedEntry, setEditedEntry] = useState(answer);


    const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedEntry(e.target.value);
    };

    // 수정을 저장할 때 PATCH 요청을 보냅니다.
    const saveChanges = async () => {
        try {
            const response = await axios.patch(`/api/${diaryId}/templelates/${templateId}`, {
                answer: editedEntry, 
            });
            navigate('/myplant');
            console.log('일지 수정 완료:', response.data);
        } catch (error) {
            console.error('일지 수정 실패:', error);
        }
    };

    return (
        <MyComponentContainer>
            <h3>{question}</h3>
            <SharedInput value={editedEntry} onChange={handleEdit} />

            {/* 저장 버튼 */}
            <MyComponentButton onClick={saveChanges}>저장</MyComponentButton>
        </MyComponentContainer>
    );
};

export default MyComponent;