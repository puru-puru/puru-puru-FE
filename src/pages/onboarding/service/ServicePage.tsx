import React, { useState, useEffect } from 'react';
import {
    CheckboxButton,
    CheckboxContainer,
    OnboardingButton,
    OnboardingContainer,
    OnboardingLine,
} from '../OnboardingPage.styles';
import { useModal } from '../../../hook/useModal';
import ModalContent from './ModalContent';
import NotificationModal from './NotificationModal';
import { useNavigate } from 'react-router-dom';

const ServicePage: React.FC = () => {
    const navigate = useNavigate();
    const [allAgreed, setAllAgreed] = useState(false);
    const [agreements, setAgreements] = useState({
        isTermsChecked: false,
        isPrivacyChecked: false,
        isOver14: false,
    });
    const [confirmationButtonEnabled, setConfirmationButtonEnabled] = useState(false);
    const { open, modalOpen, modalClose } = useModal();
    const [selectedAgreement, setSelectedAgreement] = useState<string | null>(null);
    const [notificationModalDisplayed, setNotificationModalDisplayed] = useState(false);
    const [isChecked, setisChecked] = useState(false);
    const handleAllAgreementChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = event.target;
        setAgreements({
            isTermsChecked: checked,
            isPrivacyChecked: checked,
            isOver14: checked,
        });
        setAllAgreed(checked);
    };

    const handleAgreementChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;

        setAgreements((prevAgreements) => ({ ...prevAgreements, [name]: checked }));
    };

    useEffect(() => {
        if (!notificationModalDisplayed && open) {
            modalOpen();
            setNotificationModalDisplayed(true);
        }
        // isTermsChecked와 isPrivacyChecked가 선택되었는지 확인
        const termsAndPrivacyChecked = agreements.isTermsChecked && agreements.isPrivacyChecked;

        setisChecked(termsAndPrivacyChecked);
        // 확인했어요 버튼 활성화 여부 업데이트
        setConfirmationButtonEnabled(termsAndPrivacyChecked);

    }, [agreements.isTermsChecked, agreements.isPrivacyChecked, notificationModalDisplayed, open, modalOpen]);

    const handleArrowButtonClick = (agreementName: string) => {
        setSelectedAgreement(agreementName);
        modalOpen();
    };

    const handleNameDecisionButtonClick = () => {
        navigate('/users');
    };

    return (
        <OnboardingContainer>
            <div>
                <CheckboxContainer>
                    <label style={{ fontSize: '24px' }}>서비스 이용 동의</label>
                </CheckboxContainer>
                <div>
                    <input
                        type="checkbox"
                        id="agree_check_all"
                        name="agree_check_all"
                        checked={allAgreed}
                        onChange={handleAllAgreementChange}
                    />
                    &nbsp;
                    <label htmlFor="agree_check_all">이용약관 전체동의</label>
                </div>
                <OnboardingLine />
                <CheckboxContainer>
                    <input
                        type="checkbox"
                        id="agree_check_over14"
                        name="isOver14"
                        checked={agreements.isOver14}
                        onChange={handleAgreementChange}
                    />
                    &nbsp;
                    <label htmlFor="agree_check_over14">만 14세 이상 입니다</label>
                </CheckboxContainer>
                <CheckboxContainer>
                    <input
                        type="checkbox"
                        id="agree_check_terms"
                        name="isTermsChecked"
                        checked={agreements.isTermsChecked}
                        onChange={handleAgreementChange}
                    />
                    &nbsp;
                    <label htmlFor="agree_check_terms">(필수) 서비스 이용약관</label>
                    {/* 화살표 버튼 */}
                    <button
                        onClick={() => handleArrowButtonClick('terms')}
                        style={{ marginLeft: '55px' }}
                    >
                        ➡
                    </button>
                </CheckboxContainer>
                <CheckboxContainer>
                    <input
                        type="checkbox"
                        id="agree_check_privacy"
                        name="isPrivacyChecked"
                        checked={agreements.isPrivacyChecked}
                        onChange={handleAgreementChange}
                    />
                    &nbsp;
                    <label htmlFor="agree_check_privacy">(필수) 개인정보 처리방침</label>
                    {/* 화살표 버튼 */}
                    <button
                        onClick={() => handleArrowButtonClick('privacy')}
                        style={{ marginLeft: '40px' }}
                    >
                        ➡
                    </button>
                </CheckboxContainer>
            </div>

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

            <NotificationModal />
            {/* transient props사용 */}
            <OnboardingButton
                $isChecked={isChecked}
                disabled={!confirmationButtonEnabled}
                onClick={handleNameDecisionButtonClick}
            >
                확인했어요
            </OnboardingButton>
        </OnboardingContainer>
    );
};

export default ServicePage;
