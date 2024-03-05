import React, { useState } from 'react';
import {
    MyPlantToggleButton,
    MyPlantToggleContainer,
    MyPlantToggleDetail,
} from '../../mypage/plantmodal/DeletePlantModal.styles';
import { SharedInput } from '../../Shared.styles';
import styled from 'styled-components';
import { http } from '../../../api/http';
const NameChangeContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    position: fixed;
    width: 310px;
    height: auto;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffffff;
    border: 1px solid #cccccc;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.35);
    border-radius: 10px;
    padding: 10px;
`;
interface NameChangeModalProps {
    modalClose: () => void; 
    handleNameChange: (newName: string) => void;
}

const NameChangeModal: React.FC<NameChangeModalProps> = ({ modalClose, handleNameChange }) => {
    const [newName, setNewName] = useState('');
    const isNameValid = /^[\wㄱ-ㅎㅏ-ㅣ가-힣]{2,8}$/;
    const handleNameChangeClick = async () => {
        if (!isNameValid.test(newName)) {
            alert('새 닉네임은 2~8자의 한글, 영문, 숫자만 사용할 수 있습니다.');
            return;
        }
        try {
            await http.put('/api/users/change-name', {nickname: newName});
            alert('닉네임 변경에 성공 했습니다.');
            handleNameChange(newName); 
            modalClose();
        } catch {
            alert('닉네임 변경에 실패 했습니다.');
        }
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(e.target.value);
    };
    return (
        <div>
            <div className="dark-overlay" />
            <NameChangeContainer>
                새 닉네임을 입력해 주세요(2~8자)
                <SharedInput
                    style={{ width: '250px' }}
                    value={newName}
                    onChange={handleInputChange}
                />
                <MyPlantToggleContainer>
                    닉네임 변경 하시겠습니까?
                    <MyPlantToggleDetail>
                        <MyPlantToggleButton $isChecked={false} onClick={modalClose}>
                            아니오
                        </MyPlantToggleButton>
                        <MyPlantToggleButton $isChecked={true} onClick={handleNameChangeClick}>
                            예
                        </MyPlantToggleButton>
                    </MyPlantToggleDetail>
                </MyPlantToggleContainer>
            </NameChangeContainer>
        </div>
    );
};

export default NameChangeModal;