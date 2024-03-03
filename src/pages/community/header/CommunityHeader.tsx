import React from 'react';
import {  PostProFileBox, PostProFileImgBox, PostProFileTitle } from './CommunityHeader.styles';

interface CommunityHeaderProps {
    username: string; 
}

const CommunityHeader: React.FC<CommunityHeaderProps> = ({ username }) => {

    return (
        <>
            <h2>커뮤니티</h2>
            <PostProFileBox>
                <PostProFileImgBox>
                    <img src="/person.svg" alt="카드 이미지" />
                </PostProFileImgBox>
                <PostProFileTitle>
                    <span>{username}</span>님
                </PostProFileTitle>
            </PostProFileBox>

        </>
    );
};

export default CommunityHeader;
