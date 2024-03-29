import React from 'react';
import {
    MyPlantToggle,
    MyPlantToggleButton,
    MyPlantToggleContainer,
    MyPlantToggleDetail,
} from '../../mypage/plantmodal/DeletePlantModal.styles';

interface DeletePlantModalProps {
    handleDeleteClick: () => void;
    modalClose: () => void;
    setSecession: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteProfileModal: React.FC<DeletePlantModalProps> = ({ handleDeleteClick, modalClose,setSecession }) => {
    const handleNoButtonClick = () => {
        setSecession(false);
        modalClose();
    };

    return (
        <div>
            <div className="dark-overlay" />
            <MyPlantToggle>
                <MyPlantToggleContainer>
                    회원 탈퇴 하시겠습니까?
                    <MyPlantToggleDetail>
                        <MyPlantToggleButton $isChecked={true} onClick={handleNoButtonClick}>
                            아니오
                        </MyPlantToggleButton>
                        <MyPlantToggleButton $isChecked={false} onClick={handleDeleteClick}>
                            예
                        </MyPlantToggleButton>
                    </MyPlantToggleDetail>
                </MyPlantToggleContainer>
            </MyPlantToggle>
        </div>
    );
};

export default DeleteProfileModal;
