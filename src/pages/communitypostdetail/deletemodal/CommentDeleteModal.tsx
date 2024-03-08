import * as St from './CommentDeleteModal.styles';

const CommentDeleteModal = ({ modalClose, setCommentDelete }) => {
    const handleDisagree = () => {
        modalClose();
        setCommentDelete(false);
    };
    return (
        <>
            <St.ModalOverlay onClick={modalClose} />
            <St.DeleteModalBody>
                <St.DeleteModalContent>댓글을 삭제하시겠어요?</St.DeleteModalContent>
                <St.DeleteModalButtonLayout>
                    <St.DeleteModalLeftButton>네</St.DeleteModalLeftButton>
                    <St.DeleteModalRightButton onClick={handleDisagree}>
                        아니오
                    </St.DeleteModalRightButton>
                </St.DeleteModalButtonLayout>
            </St.DeleteModalBody>
        </>
    );
};

export default CommentDeleteModal;
