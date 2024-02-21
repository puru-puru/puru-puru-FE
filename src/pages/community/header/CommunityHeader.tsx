import React from 'react';
import { CompositionButton, PostProFileBox, PostProFileImgBox, PostProFileTitle, PostButtonBox } from './CommunityHeader.styles';
import { useNavigate } from 'react-router-dom';

interface CommunityHeaderProps {
    username: string; 
}

const CommunityHeader: React.FC<CommunityHeaderProps> = ({ username }) => {
    const navigate = useNavigate();

    const handleWriteButtonClick = () => {
        navigate('/communityWrite');
    };

    return (
        <>
            <h2>커뮤니티</h2>
            <PostProFileBox>
                <PostProFileImgBox>
                    <img src="./person.svg" alt="카드 이미지" />
                </PostProFileImgBox>
                <PostProFileTitle>
                    <span>{username}</span>님
                </PostProFileTitle>
            </PostProFileBox>
            <PostButtonBox>
                <CompositionButton onClick={handleWriteButtonClick}>글쓰기</CompositionButton>
            </PostButtonBox>
        </>
    );
};

export default CommunityHeader;
