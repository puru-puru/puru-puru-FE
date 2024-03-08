import React from 'react';
import Spinner from '/Spin.gif'; // Spinner 이미지 경로에 따라 수정해야 할 수 있습니다.

const LoadingSpinner:React.FC = () => {
    return (
        <div
            style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}
        >
            <img src={Spinner} alt="Loading" />
        </div>
    );
};

export default LoadingSpinner;