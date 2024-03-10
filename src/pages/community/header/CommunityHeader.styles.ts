import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface PostProfileBoxProps extends HTMLAttributes<HTMLDivElement> {
    $iscommunitymypost?: boolean;
}

export const BackButtonLayout = styled.div`
    margin: 0px;
    margin-right: auto;
    margin-top: -5px;
    padding: 0px;
    padding-bottom: 5px;
`;

export const BackButton = styled.button`
    width: 40px;
    height: 40px;
    background-color: white;
    padding: 0px;
`;

export const BackButtonImg = styled.img`
    width: 16px;
    height: 16px;
`;

export const HeaderContainer = styled.div`
    width: 300px;
    height: 42px;
    display: flex;
    justify-content: flex-start;
`;

export const HeaderContent = styled.div`
    font-size: 24px;
    font-weight: 700;
`;

export const PostProfileBox = styled.div<PostProfileBoxProps>`
    width: 330px;
    height: 60px;
    background-color: ${({ $iscommunitymypost }) => ($iscommunitymypost ? '#72A474' : '#F5FAF1')};
    display: flex;
    padding: 5px;
    border-radius: 10px;
`;

export const PostProfileImgBox = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 100px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`;

export const PostProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PostProfileTitleWrapper = styled.div`
    display: flex;
`;

export const PostProfileTitle = styled.p`
    width: 163px;
    height: 10px;
    font-weight: 700;
    font-size: 10px;
    line-height: 11.93px;
`;

export const PostProfileMyPostWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 250px;
    height: 25px;
    margin: -5px -0px 0px 15px;
`;

export const PostProfileMyPostCountWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PostProfileMyPostCount = styled.div<PostProfileBoxProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    font-weight: 600;
    line-height: 11.94px;
    color: ${({ $iscommunitymypost }) => ($iscommunitymypost ? '#FFFFFF' : '#989898')};
`;

export const PostProfileMyPostCountNumber = styled.div`
    font-size: 10px;
    font-weight: 600;
    line-height: 11.93px;
    color: #ff655b4d;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PostProfileButton = styled.button`
    width: 80px;
    height: 25px;
    font-size: 11px;
    font-weight: 700;
    line-height: 12.18px;
    background: none;
    color: #72a474;
    padding: 0px;
`;
