import CommunityHeader from '../community/header/CommunityHeader';
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
} from './CommunityMyPost.styles';
import Spinner from '/Spin.gif';
import likeImg from '../../assets/favorite.svg';
import commentImg from '../../assets/chat.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CommunityMyPost = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    return (
        <>
            <CommunityContainer>
                <CommunityHeader username={post.loginUser} />
                <PostButtonBox>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <CompositionSortButton>작성글</CompositionSortButton>
                        <CompositionSortButton>댓글 단 글</CompositionSortButton>
                    </div>
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

export default CommunityMyPost;
