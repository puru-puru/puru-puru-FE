import * as St from './ToggleButton.styles';
import modifyButtonImg from '../../../assets/modifybutton.svg';
import deleteButtonImg from '../../../assets/delete.svg';
import modifyPencil from '../../../assets/modifypen.svg';
import { useModal } from '../../../hook/useModal';
import { useState } from 'react';
import ModifyModal from '../modifymodal/ModifyModal';
import DeleteModal from '../deletemodal/DeleteModal';

const ToggleButton = ({ mypost, isOpenMap, getModifyToggleHandler }) => {
    const [postDelete, setPostDelete] = useState(false);
    const [postModify, setPostModify] = useState(false);
    const {
        open,
        modalOpen,
        modalClose,
    }: { open: boolean; modalOpen: () => void; modalClose: () => void } = useModal();
    const handleDeleteButton = () => {
        setPostDelete(true);
        modalOpen();
    };
    const handleModifyButton = () => {
        setPostModify(true);
        modalOpen();
    };
    return (
        <>
            <St.PostModifyButton onClick={() => getModifyToggleHandler(mypost.boardId)}>
                {isOpenMap[mypost.boardId] && (
                    <St.ToggleButtonWrapper>
                        <St.DeleteButton onClick={handleDeleteButton}>
                            <St.ButtonImg src={deleteButtonImg} />
                            삭제
                        </St.DeleteButton>
                        <St.ToggleButtonLine></St.ToggleButtonLine>
                        <St.ModifyButton onClick={handleModifyButton}>
                            <St.ButtonImg src={modifyPencil} />
                            수정
                        </St.ModifyButton>
                    </St.ToggleButtonWrapper>
                )}
                {!isOpenMap[mypost.boardId] && <St.PostModifyButtonImg src={modifyButtonImg} />}
            </St.PostModifyButton>
            {open && postModify && (
                <ModifyModal modalClose={modalClose} setPostModify={setPostModify} />
            )}
            {open && postDelete && (
                <DeleteModal modalClose={modalClose} setPostDelete={setPostDelete} />
            )}
        </>
    );
};

export default ToggleButton;
