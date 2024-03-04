import React, { useEffect, useState } from 'react';
import { communityApi } from '../../api/community/Community';
import {
    CommunityContainer,
    PostContainer,
    PostImg,
    PostTextContainer,
    PostTitle,
    PostText,
    PostContainerScroll,
    PostBottomContainer,
    PostLikeCommentContainer,
    LikeCommentButtonContainer,
    LikeCommentButton,
    LikeCommentImg,
    LikeCommentCount,
    PostDateContainer,
    PostDate,
    Nickname,
    PostButtonBox,
    CompositionSortButton,
    CompositionWriteButton,
} from './Community.styles';
import CommunityHeader from './header/CommunityHeader';
import { CommunityData } from '../../api/community/model';
import { useNavigate } from 'react-router-dom';
import Spinner from '/Spin.gif';
import likeImg from '../../assets/favorite.svg';
import commentImg from '../../assets/chat.svg';

const CommunityPage: React.FC = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState<CommunityData>({ data: [], loginUser: '' });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await communityApi.get('/api/boards');
                setPost(response);
            } catch (error) {
                console.error('Error: ', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    // console.log('post => ', post.data[0]?.createdAt.split(' ')[0]);
    const handleWriteButtonClick = () => {
        navigate('/communityWrite');
    };
    return (
        <>
            <CommunityContainer>
                <CommunityHeader username={post.loginUser} />
                <PostButtonBox>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <CompositionSortButton>전체</CompositionSortButton>
                        <CompositionSortButton>최신순</CompositionSortButton>
                        <CompositionSortButton>인기순</CompositionSortButton>
                    </div>
                    <CompositionWriteButton onClick={handleWriteButtonClick}>
                        글쓰기
                    </CompositionWriteButton>
                </PostButtonBox>
                <PostContainerScroll>
                    {loading ? (
                        <img
                            src={Spinner}
                            alt="loding"
                            style={{ width: '100px', height: '100px' }}
                        />
                    ) : (
                        post.data?.map((post) => (
                            <PostContainer key={post.boardId}>
                                <div>
                                    {post.author?.nickname ? (
                                        <Nickname>{post.author.nickname}</Nickname>
                                    ) : (
                                        <Nickname>익명</Nickname>
                                    )}
                                    <PostImg
                                        src={post.image ? post.image : '/plantimg.png'}
                                        alt="이미지 없음"
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <PostTextContainer>
                                        <PostTitle>{post.title}</PostTitle>
                                        <PostText>{post.content}</PostText>
                                    </PostTextContainer>
                                    <PostBottomContainer>
                                        <PostLikeCommentContainer>
                                            <LikeCommentButtonContainer>
                                                <LikeCommentButton>
                                                    <LikeCommentImg src={likeImg} />
                                                </LikeCommentButton>

                                                <LikeCommentCount>
                                                    {post.likeCount}
                                                </LikeCommentCount>
                                            </LikeCommentButtonContainer>
                                            <LikeCommentButtonContainer>
                                                <LikeCommentButton>
                                                    <LikeCommentImg src={commentImg} />
                                                </LikeCommentButton>
                                                <LikeCommentCount>
                                                    {post.likeCount}
                                                </LikeCommentCount>
                                            </LikeCommentButtonContainer>
                                        </PostLikeCommentContainer>

                                        <PostDateContainer>
                                            <PostDate>{post.createdAt.split(' ')[0]}</PostDate>
                                        </PostDateContainer>
                                    </PostBottomContainer>
                                </div>
                            </PostContainer>
                        ))
                    )}
                </PostContainerScroll>
            </CommunityContainer>
        </>
    );
};

export default CommunityPage;
