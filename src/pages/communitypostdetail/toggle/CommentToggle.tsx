import * as St from './CommentToggle.styles';
import modifyButtonImg from '../../../assets/modifybutton.svg';
import deleteButtonImg from '../../../assets/delete.svg';
import modifyPencil from '../../../assets/modifypen.svg';
import { useState } from 'react';
import CommentModifyModal from '../modifymodal/CommentModifyModal';
import CommentDeleteModal from '../deletemodal/CommentDeleteModal';
import { useModal } from '../../../hook/useModal';

const CommentToggle = ({ commentId, isOpenMap, getModifyToggleHandler }) => {
    const [commentDelete, setCommentDelete] = useState(false);
    const [commentModify, setCommentModify] = useState(false);
    const {
        open,
        modalOpen,
        modalClose,
    }: { open: boolean; modalOpen: () => void; modalClose: () => void } = useModal();
    const handleDeleteButton = () => {
        setCommentDelete(true);
        modalOpen();
    };
    const handleModifyButton = () => {
        setCommentModify(true);
        modalOpen();
    };
    return (
        <>
            <St.CommentModifyButton onClick={() => getModifyToggleHandler(commentId)}>
                {isOpenMap[commentId] && (
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
                {!isOpenMap[commentId] && <St.CommentModifyButtonImg src={modifyButtonImg} />}
            </St.CommentModifyButton>
            {open && commentModify && (
                <CommentModifyModal modalClose={modalClose} setCommentModify={setCommentModify} />
            )}
            {open && commentDelete && (
                <CommentDeleteModal modalClose={modalClose} setCommentDelete={setCommentDelete} />
            )}
        </>
    );
};

export default CommentToggle;
