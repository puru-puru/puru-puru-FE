import * as St from './CommentModifyModal.styles';

const CommentModifyModal = ({ modalClose, setCommentModify }) => {
    const handleDisagree = () => {
        modalClose();
        setCommentModify(false);
    };
    return (
        <>
            <St.ModalOverlay onClick={modalClose} />
            <St.ModifyModalBody>
                <St.ModifyModalContent>댓글을 수정하시겠어요?</St.ModifyModalContent>
                <St.ModifyModalButtonLayout>
                    <St.ModifyModalLeftButton onClick={handleDisagree}>
                        <St.ModifyModalButtonContent>아니오</St.ModifyModalButtonContent>
                    </St.ModifyModalLeftButton>
                    <St.ModifyModalRightButton>
                        <St.ModifyModalButtonContent>네</St.ModifyModalButtonContent>
                    </St.ModifyModalRightButton>
                </St.ModifyModalButtonLayout>
            </St.ModifyModalBody>
        </>
    );
};

export default CommentModifyModal;
