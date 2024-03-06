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
import { useGetMyPostPageData } from '../../../api/mypost/MyPost';
import { useLocation, useNavigate } from 'react-router-dom';

interface CommunityHeaderProps {
    username: string;
}

const CommunityHeader: React.FC<CommunityHeaderProps> = ({ username }) => {
    const navigate = useNavigate();
    const { data } = useGetMyPostPageData();
    // console.log('MyPostPageData => ', data?.data.data);
    const location = useLocation();
    // console.log('location => ', location.pathname);

    const getMyPostHandler = () => {
        navigate('/communitymypost', { state: { data, username } });
    };
    return (
        <>
            {location.pathname === '/community' ? (
                <HeaderContainer>
                    <HeaderContent>커뮤니티</HeaderContent>
                </HeaderContainer>
            ) : (
                <HeaderContainer>
                    <HeaderContent>커뮤니티 - 내 정보</HeaderContent>
                </HeaderContainer>
            )}

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
                        <PostProfileMyPostCountWrapper>
                            <PostProfileMyPostCount>작성글</PostProfileMyPostCount>
                            <PostProfileMyPostCountNumber>
                                {data?.data.data.length}
                            </PostProfileMyPostCountNumber>
                        </PostProfileMyPostCountWrapper>
                        <PostProfileMyPostCountWrapper>
                            <PostProfileMyPostCount>댓글 단 글</PostProfileMyPostCount>
                            <PostProfileMyPostCountNumber>
                                {data?.data.totalCommentsCount}
                            </PostProfileMyPostCountNumber>
                        </PostProfileMyPostCountWrapper>
                        <PostProfileMyPostCountWrapper>
                            <PostProfileMyPostCount>좋아요</PostProfileMyPostCount>
                            <PostProfileMyPostCountNumber>
                                {data?.data.totalLikesCount}
                            </PostProfileMyPostCountNumber>
                        </PostProfileMyPostCountWrapper>
                        {location.pathname === '/community' ? (
                            <div style={{ margin: '5px 0px 0px 10px' }}>
                                <PostProfileButton onClick={getMyPostHandler}>
                                    더보기
                                </PostProfileButton>
                            </div>
                        ) : (
                            <div style={{ width: '90px', height: '25px' }}></div>
                        )}
                    </PostProfileMyPostWrapper>
                </PostProfileWrapper>
            </PostProfileBox>
        </>
    );
};

export default CommunityHeader;
