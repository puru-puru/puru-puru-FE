import React from 'react';
import styled from 'styled-components';

interface BackspaceButtonProps {
    onClick: () => void;
}

const StyledBackspaceButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    margin-top: 10px;
`;

export const BackspaceButton: React.FC<BackspaceButtonProps> = ({ onClick }) => {
    return (
        <StyledBackspaceButton onClick={onClick}>
            <img src="./ArrowLeft.svg" alt="Backspace" style={{width: '8px', height: '13px'}}/>
        </StyledBackspaceButton>
    );
};
