import React, { useEffect } from 'react';
import { useModal } from '../../hook/useModal';

const NotificationModal: React.FC = () => {
    const { open, modalOpen, modalClose } = useModal();
    
    const notificationText = `
    해당 기기로 답장 알림 등
    서비스 이용에 필요한 안내 사항을
    푸시 알림으로 보내드리겠습니다.

    앱 푸시에 수신 동의하시겠습니까?`;

    const handleAgree = () => {
        modalClose();
    };

    const handleDisagree = () => {
        modalClose();
    };
    useEffect(() => {
        modalOpen();
    }, []);
    return (
        <>
            {open && (
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
                        zIndex: 2,
                    }}
                >
                    <div style={{ textAlign: 'center' }}>
                        <h2>'푸릇푸릇' 앱 푸시</h2>
                        <p style={{ whiteSpace: 'pre-line' }}>{notificationText}</p>
                    </div>
                    <button onClick={handleAgree}>예</button>
                    <button onClick={handleDisagree}>아니요</button>
                </div>
            )}
        </>
    );
};

export default NotificationModal;
