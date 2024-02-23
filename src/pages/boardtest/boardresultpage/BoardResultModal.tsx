import { useModal } from '../../../hook/useModal';
import * as St from './BoardResultModal.styles';

const BoardResultModal = () => {
    const { modalClose } = useModal();
    return (
        <>
            <St.ModalOverlay onClick={modalClose} />
            <St.ModalBody>
                <St.ModalContent>
                    <p>키우고 싶은 반려 식물을</p>
                    <p>위시리스트에 저장해보세요!</p>
                </St.ModalContent>
            </St.ModalBody>
        </>
    );
};

export default BoardResultModal;
