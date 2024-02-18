import React from 'react';
import { CompositionButton, PostProFileBox, PostProFileImgBox, PostProFileTitle, PostButtonBox } from './CommunityHeader.styles';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const CommunityHeader: React.FC = () => {
    const navigate = useNavigate();

    const handleWriteButtonClick = () => {
        navigate('/communityWrite');
    };

    const name = Cookies.get('Nickname') || "사용자";

    return (
        <>
            <h2>커뮤니티</h2>
            <PostProFileBox>
                <PostProFileImgBox>
                    <img src="./person.svg" alt="카드 이미지" />
                </PostProFileImgBox>
                <PostProFileTitle>
                    <span>{name}</span>님
                </PostProFileTitle>
            </PostProFileBox>
            <PostButtonBox>
                <CompositionButton onClick={handleWriteButtonClick}>글쓰기</CompositionButton>
            </PostButtonBox>
        </>
    );
};

export default CommunityHeader;
