import React from 'react';
import {
    HeaderContainer,
    HeaderContent,
    PostProfileWrapper,
    PostProfileBox,
    PostProfileImgBox,
    PostProfileTitle,
    PostProfileTitleWrapper,
    PostProfileMyPostWrapper,
    PostProfileMyPostCountWrapper,
    PostProfileMyPostCount,
    PostProfileMyPostCountNumber,
    PostProfileButton,
} from './CommunityHeader.styles';

interface CommunityHeaderProps {
    username: string;
}

const CommunityHeader: React.FC<CommunityHeaderProps> = ({ username }) => {
    const postArray = ['작성글', '댓글 단 글', '좋아요'];
    return (
        <>
            <HeaderContainer>
                <HeaderContent>커뮤니티</HeaderContent>
            </HeaderContainer>
            <PostProfileBox>
                <PostProfileImgBox>
                    <img src="/person.svg" alt="카드 이미지" />
                </PostProfileImgBox>

                <PostProfileWrapper>
                    <PostProfileTitleWrapper>
                        <PostProfileTitle>
                            <span style={{ color: '#72A474' }}>{username}</span>&nbsp;님
                        </PostProfileTitle>
                    </PostProfileTitleWrapper>

                    <PostProfileMyPostWrapper>
                        {postArray.map((post, index) => {
                            return (
                                <PostProfileMyPostCountWrapper key={index}>
                                    <PostProfileMyPostCount>{post}</PostProfileMyPostCount>
                                    <PostProfileMyPostCountNumber>0</PostProfileMyPostCountNumber>
                                </PostProfileMyPostCountWrapper>
                            );
                        })}
                        <div style={{ margin: '5px 0px 0px 10px' }}>
                            <PostProfileButton>더보기</PostProfileButton>
                        </div>
                    </PostProfileMyPostWrapper>
                </PostProfileWrapper>
            </PostProfileBox>
        </>
    );
};

export default CommunityHeader;
