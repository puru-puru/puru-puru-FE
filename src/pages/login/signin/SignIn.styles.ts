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

export const SignInBotten = styled.button<{color: string}>`
    width: 334px;
    height: 50px;
    border-radius: 20px;
    background-color: ${props => props.color === "signin" ? "#72A474" : "#FFFFFF"};
    color: ${props => props.color === "signin" ? "#FFFFFF" : "#8B8879"};
    border: ${props => props.color === "signin" ? "none" : "1px solid #72A474"};
    &:focus {
        outline: none; // 클릭되었을 때 생기는 외곽선 제거
    }
    margin-bottom: 20px;
`;

export const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const SocialBotten = styled.div`
    width: 210px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SocialDescription = styled.p`
    font-size: 14px;
`;