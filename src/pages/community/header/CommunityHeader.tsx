import React from 'react';
import {
    BackButtonLayout,
    BackButton,
    BackButtonImg,
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
import backButton from '../../../assets/backbutton.svg';

interface CommunityHeaderProps {
    username: string;
}

const CommunityHeader: React.FC<CommunityHeaderProps> = ({ username }) => {
    const navigate = useNavigate();
    const { data } = useGetMyPostPageData();
    // console.log('MyPostPageData => ', data?.data.data);
    const location = useLocation();
    // console.log('location => ', location.pathname);
    const backButtonHandler = () => {
        navigate('/community');
    };
    const getMyPostHandler = () => {
        navigate('/communitymypost', { state: { data, username } });
    };
    return (
        <>
            {location.pathname === '/communitymypost' && (
                <BackButtonLayout>
                    <BackButton>
                        <BackButtonImg src={backButton} onClick={backButtonHandler} />
                    </BackButton>
                </BackButtonLayout>
            )}
            {location.pathname === '/community' ? (
                <HeaderContainer>
                    <HeaderContent>커뮤니티</HeaderContent>
                </HeaderContainer>
            ) : (
                <HeaderContainer>
                    <HeaderContent>커뮤니티 - 내 정보</HeaderContent>
                </HeaderContainer>
            )}
            <PostProfileBox
                $iscommunitymypost={location.pathname === '/communitymypost'.toString()}
            >
                <PostProfileImgBox>
                    <img src="/person.svg" alt="카드 이미지" />
                </PostProfileImgBox>

                <PostProfileWrapper>
                    <PostProfileTitleWrapper>
                        <PostProfileTitle>
                            <span style={{ color: '#333333' }}>{username}</span>&nbsp;님
                        </PostProfileTitle>
                    </PostProfileTitleWrapper>

                    <PostProfileMyPostWrapper>
                        <PostProfileMyPostCountWrapper>
                            <PostProfileMyPostCount
                                $iscommunitymypost={
                                    location.pathname === '/communitymypost'.toString()
                                }
                            >
                                작성글
                            </PostProfileMyPostCount>
                            <PostProfileMyPostCountNumber>
                                {data?.data.data.length}
                            </PostProfileMyPostCountNumber>
                        </PostProfileMyPostCountWrapper>
                        <PostProfileMyPostCountWrapper>
                            <PostProfileMyPostCount
                                $iscommunitymypost={
                                    location.pathname === '/communitymypost'.toString()
                                }
                            >
                                댓글 단 글
                            </PostProfileMyPostCount>
                            <PostProfileMyPostCountNumber>
                                {data?.data.totalCommentsCount}
                            </PostProfileMyPostCountNumber>
                        </PostProfileMyPostCountWrapper>
                        <PostProfileMyPostCountWrapper>
                            <PostProfileMyPostCount
                                $iscommunitymypost={
                                    location.pathname === '/communitymypost'.toString()
                                }
                            >
                                좋아요
                            </PostProfileMyPostCount>
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
