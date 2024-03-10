import * as St from './PostLikeModal.styles';

const PostLikeModal = ({ modalClose }) => {
    const handleModalClose = () => {
        modalClose();
    };
    return (
        <>
            <St.ModalOverlay onClick={handleModalClose} />
            <St.PostLikeModalBody>
                <St.PostLikeModalContent>좋아요가 반영되었습니다.</St.PostLikeModalContent>
                <St.PostLikeModalButtonLayout>
                    <St.PostLikeModalButton onClick={handleModalClose}>
                        <St.PostLikeModalButtonContent>확인</St.PostLikeModalButtonContent>
                    </St.PostLikeModalButton>
                </St.PostLikeModalButtonLayout>
            </St.PostLikeModalBody>
        </>
    );
};

export default PostLikeModal;
