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
import likeImg from '../../assets/favorite.svg';
import commentImg from '../../assets/chat.svg';

const CommunityPage: React.FC = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState<CommunityData>({ data: [], loginUser: '' });
    const [url, setUrl] = useState('boards');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await communityApi.get(`/api/${url}`);
                // console.log('Url => ', url);
                setPost(response);
            } catch (error) {
                console.error('Error: ', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);
    // console.log('post => ', post.data);

    const handleWriteButtonClick = () => {
        navigate('/communityWrite');
    };
    const totalButtonHandler = () => {
        setUrl('boards');
    };
    const popularButtonHandler = () => {
        setUrl('boards/sortBy/likes');
    };
    const postDetailNavigateHandler = (boardId: number, commentCount: number) => {
        navigate('/communitydetail', { state: { boardId, commentCount } });
    };
    return (
        <>
            <CommunityContainer>
                <CommunityHeader username={post.loginUser} />
                <PostButtonBox>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <CompositionSortButton
                            $active={url === 'boards'}
                            onClick={totalButtonHandler}
                        >
                            전체
                        </CompositionSortButton>
                        <CompositionSortButton
                            $active={url === 'boards/sortBy/likes'}
                            onClick={popularButtonHandler}
                        >
                            인기순
                        </CompositionSortButton>
                    </div>
                    <CompositionWriteButton onClick={handleWriteButtonClick}>
                        글쓰기
                    </CompositionWriteButton>
                </PostButtonBox>
                <PostContainerScroll>
                    {loading ? (
                        <div style={{ position: 'absolute', bottom: '40%' }}>
                            <p>작성글이 없습니다.</p>
                            <p>첫 번째 작성글을 남겨주세요.</p>
                        </div>
                    ) : (
                        post.data?.map((post) => (
                            <PostContainer
                                onClick={() =>
                                    postDetailNavigateHandler(post.boardId, post.commentCount)
                                }
                                key={post.boardId}
                            >
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
                                                    {post.commentCount}
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
