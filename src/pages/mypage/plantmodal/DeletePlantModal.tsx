import React from 'react';
import {
    MyPlantToggle,
    MyPlantToggleButton,
    MyPlantToggleContainer,
    MyPlantToggleDetail,
} from './DeletePlantModal.styles';

interface DeletePlantModalProps {
    handleDeleteClick: () => void;
    modalClose: () => void;
}

const DeletePlantModal: React.FC<DeletePlantModalProps> = ({ handleDeleteClick, modalClose }) => {
    return (
        <div>
            <div className="dark-overlay" />
            <MyPlantToggle>
                <MyPlantToggleContainer>
                    반려식물을 삭제하시겠습니까?
                    <MyPlantToggleDetail>
                        <MyPlantToggleButton $isChecked={true} onClick={modalClose}>
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

export default DeletePlantModal;
