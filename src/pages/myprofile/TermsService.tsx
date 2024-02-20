import React, { useState } from 'react';
import { useModal } from '../../hook/useModal';
import ModalContent from '../onboarding/service/ModalContent';
import { CheckboxButton, CheckboxContainer } from '../onboarding/service/ServicePage.styles';


export const TermsService: React.FC = () => {
    const { open, modalOpen, modalClose } = useModal();
    const [selectedAgreement, setSelectedAgreement] = useState<string | null>(null);


    const handleArrowButtonClick = (agreementName: string) => {
        setSelectedAgreement(agreementName);
        modalOpen();
    };
    return (
        <>
            <CheckboxContainer>
                &nbsp;
                <label htmlFor="agree_check_terms">서비스 이용약관</label>
                {/* 화살표 버튼 */}
                <button
                    onClick={() => handleArrowButtonClick('terms')}
                    style={{ marginLeft: '55px' }}
                >
                    ➡
                </button>
            </CheckboxContainer>
            <CheckboxContainer>
                &nbsp;
                <label htmlFor="agree_check_privacy">개인정보 처리방침</label>
                {/* 화살표 버튼 */}
                <button
                    onClick={() => handleArrowButtonClick('privacy')}
                    style={{ marginLeft: '40px' }}
                >
                    ➡
                </button>
            </CheckboxContainer>
            {open && (
                <>
                    {/* Dark overlay */}
                    <div
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(0, 0, 0, 0.5)', // 어둡게 만들기 위한 rgba 값
                            zIndex: 1, // 모달보다 레이어가 위에 오도록 설정
                        }}
                    ></div>

                    {/* Modal */}
                    <div
                        style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            padding: '20px',
                            background: '#fff',
                            borderRadius: '8px',
                            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                            width: '304px',
                            zIndex: 2, // 모달이 레이어 위에 올라오도록 설정
                        }}
                    >
                        {selectedAgreement === 'terms' && <ModalContent content={'terms'} />}
                        {selectedAgreement === 'privacy' && <ModalContent content={'privacy'} />}

                        <CheckboxButton onClick={modalClose}>확인했어요</CheckboxButton>
                    </div>
                </>
            )}
        </>
    );
};
