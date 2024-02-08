import styled from 'styled-components';

export const Heading = styled.h1`
    width: 334px;
    height: 142px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SignInnContainer = styled.div`
    align-items: center;
    justify-content: center;
`;

export const SignInBotten = styled.button<{ $isChecked: boolean }>`
    width: 334px;
    height: 50px;
    border-radius: 20px;
    background-color: ${props => props.$isChecked ? "#72A474" : "#DAEBCA"};
    color: #FFFFFF;
    margin-bottom: 20px;
`;

export const SignUpBotten = styled.button`
    width: 334px;
    height: 50px;
    border-radius: 20px;
    background-color: #ffffff;
    color: #8b8879;
    border: 1px solid #72a474;

`;

export const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const SocialBotten = styled.div`
    width: 210px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SocialDescription = styled.p`
    font-size: 14px;
`;
