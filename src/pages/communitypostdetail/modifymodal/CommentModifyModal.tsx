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
                        아니오
                    </St.ModifyModalLeftButton>
                    <St.ModifyModalRightButton>네</St.ModifyModalRightButton>
                </St.ModifyModalButtonLayout>
            </St.ModifyModalBody>
        </>
    );
};

export default CommentModifyModal;
