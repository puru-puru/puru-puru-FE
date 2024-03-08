import * as St from './ModifyModal.styles';
const ModifyModal = ({ modalClose, setPostModify }) => {
    const handleDisagree = () => {
        modalClose();
        setPostModify(false);
    };
    return (
        <>
            <St.ModalOverlay onClick={modalClose} />
            <St.ModifyModalBody>
                <St.ModifyModalContent>게시글을 수정하시겠어요?</St.ModifyModalContent>
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

export default ModifyModal;
