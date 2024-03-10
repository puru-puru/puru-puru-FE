import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const CommentPostContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    overflow-x: hidden;
`;

export const CommentPostHeadWrapper1 = styled.div`
    width: auto;
    height: 136px;
    padding: 10px;
`;

export const DetailHeadWrapper2 = styled.div`
    width: 336px;
    height: 112px;
    padding: 12px;
`;

export const CommentPostHeadLayout = styled.div`
    width: auto;
    height: 88px;
`;

export const BackButtonLayout = styled.div`
    width: auto;
    height: 40px;
    margin: 0px;
    margin-right: auto;
    display: flex;
`;

export const BackButton = styled.button`
    width: 40px;
    height: 40px;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
`;

export const BackButtonImg = styled.img`
    width: 16px;
    height: 16px;
`;

export const CommentPostContentLayout = styled.div`
    width: 244px;
    height: 42px;
    padding: 10px 10px 0px 10px;
`;

export const CommentPostContent = styled.span`
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
`;

export const CommentPostInputLayout = styled.div`
    display: flex;
    margin: 0px 22.5px;
`;

export const CommentPostTextTextarea = styled.textarea`
    width: 330px;
    height: 300px;
    max-width: 340px;
    max-height: 330px;
    padding: 15px;
    border: 2px solid rgba(223, 226, 229, 1);
    border-radius: 20px;
    background-color: white;
    overflow: auto;
    transition: border-color 0.3s ease;
    &:focus {
        border-color: ${colors.green100};
        outline: none;
    }
`;

export const CommentPostButtonLayout = styled.div`
    display: flex;
    position: absolute;
    bottom: 10%;
    left: 2.25%;
`;

export const CommentPostButton = styled.button`
    width: 343px;
    height: 51px;
    border: none;
    border-radius: 100px;
    background-color: rgba(93, 176, 117, 1);
`;

export const CommentPostButtonContent = styled.div`
    color: white;
    font-size: 16px;
    font-weight: 600;
    line-height: 19.36px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
