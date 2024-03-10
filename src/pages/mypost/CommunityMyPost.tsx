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
    CommentContainer,
    CommentHeadContainer,
    CommentHeadLayout,
    UserProfileImg,
    ProfileImg,
    UserNameLayout,
    UserName,
    CommentLayout,
    CommentBottomContainer,
    CommentBottomButtonContainer,
    ReComment,
    NoCommentContainer,
} from './CommunityMyPost.styles';
import likeImg from '../../assets/favorite.svg';
import commentImg from '../../assets/chat.svg';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ToggleButton from './togglebutton/ToggleButton';
import { useGetMyCommentPageData } from '../../api/mypost/MyPost';
import CommentToggle from '../communitypostdetail/toggle/CommentToggle';
import profileImg from '../../../public/person.svg';

const CommunityMyPost = () => {
    const location = useLocation();
    const [isOpenMap, setIsOpenMap] = useState<{ [key: number]: boolean }>({});
    const [getPost, setGetPost] = useState<boolean>(false);
    const [getComment, setGetComment] = useState<boolean>(false);
    const { data, username } = location.state;
    // console.log('data => ', data.data);

    const commentData = useGetMyCommentPageData();
    // console.log('commentData => ', commentData.data?.data);

    useEffect(() => {
        setGetPost(true);
    }, []);

    const getPostHandler = () => {
        setGetPost(true);
        setGetComment(false);
    };
    const getCommentHandler = () => {
        setGetComment(true);
        setGetPost(false);
    };
    const getModifyToggleHandler = (postBoardId: number) => {
        setIsOpenMap((prevMap) => ({
            ...prevMap,
            [postBoardId]: !prevMap[postBoardId],
        }));
    };
    // console.log('getPost =>', getPost);
    // console.log('getComment => ', getComment);
    return (
        <>
            <CommunityContainer>
                <CommunityHeader username={username} />
                <PostButtonBox>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <CompositionSortButton onClick={getPostHandler} $isSelected={getPost}>
                            작성글
                        </CompositionSortButton>
                        <CompositionSortButton onClick={getCommentHandler} $isSelected={getComment}>
                            댓글 단 글
                        </CompositionSortButton>
                    </div>
                </PostButtonBox>
                <PostContainerScroll>
                    {getPost && data.data.data.length === 0 ? (
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '100px 0px',
                            }}
                        >
                            <p>작성글이 없습니다.</p>
                            <p>첫 번째 작성글을 남겨주세요.</p>
                        </div>
                    ) : (
                        getPost &&
                        data.data.data?.map((mypost) => (
                            <PostContainer key={mypost.boardId}>
                                <div>
                                    {mypost.author?.nickname ? (
                                        <Nickname>{mypost.author.nickname}</Nickname>
                                    ) : (
                                        <Nickname>익명</Nickname>
                                    )}
                                    <PostImg
                                        src={mypost.image ? mypost.image : '/plantimg.png'}
                                        alt="이미지 없음"
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <PostTextContainer>
                                        <PostTitle>
                                            {mypost.title}
                                            <ToggleButton
                                                mypost={mypost}
                                                isOpenMap={isOpenMap}
                                                getModifyToggleHandler={getModifyToggleHandler}
                                            />
                                        </PostTitle>
                                        <PostText>{mypost.content}</PostText>
                                    </PostTextContainer>
                                    <PostBottomContainer>
                                        {}
                                        <PostLikeCommentContainer>
                                            <LikeCommentButtonContainer>
                                                <LikeCommentButton>
                                                    <LikeCommentImg src={likeImg} />
                                                </LikeCommentButton>

                                                <LikeCommentCount>
                                                    {mypost.likeCount}
                                                </LikeCommentCount>
                                            </LikeCommentButtonContainer>
                                            <LikeCommentButtonContainer>
                                                <LikeCommentButton>
                                                    <LikeCommentImg src={commentImg} />
                                                </LikeCommentButton>
                                                <LikeCommentCount>
                                                    {mypost.likeCount}
                                                </LikeCommentCount>
                                            </LikeCommentButtonContainer>
                                        </PostLikeCommentContainer>

                                        <PostDateContainer>
                                            <PostDate>{mypost.createdAt.split(' ')[0]}</PostDate>
                                        </PostDateContainer>
                                    </PostBottomContainer>
                                </div>
                            </PostContainer>
                        ))
                    )}
                    {getComment &&
                        commentData.data?.data.length !== 0 &&
                        commentData.data?.data.map((comment) => {
                            <CommentContainer key={comment.user.userId}>
                                <CommentHeadContainer>
                                    <CommentHeadLayout>
                                        <UserProfileImg>
                                            <ProfileImg src={profileImg} />
                                        </UserProfileImg>
                                        <UserNameLayout>
                                            <UserName>
                                                {data.data.board.author ? (
                                                    <Nickname>
                                                        {data.data.board.author.nickname}
                                                    </Nickname>
                                                ) : (
                                                    <Nickname>익명</Nickname>
                                                )}
                                            </UserName>
                                        </UserNameLayout>
                                    </CommentHeadLayout>
                                    <CommentToggle
                                        commentId={comment.user.userId}
                                        getModifyToggleHandler={getModifyToggleHandler}
                                        isOpenMap={isOpenMap}
                                    />
                                </CommentHeadContainer>
                                <CommentLayout>{comment.content}</CommentLayout>
                                <CommentBottomContainer>
                                    <CommentBottomButtonContainer>
                                        <LikeCommentButtonContainer>
                                            <LikeCommentButton>
                                                <LikeCommentImg src={likeImg} />
                                            </LikeCommentButton>

                                            <LikeCommentCount>0</LikeCommentCount>
                                        </LikeCommentButtonContainer>
                                        <LikeCommentButtonContainer>
                                            <LikeCommentButton>
                                                <LikeCommentImg src={commentImg} />
                                            </LikeCommentButton>
                                            <ReComment>답글</ReComment>
                                        </LikeCommentButtonContainer>
                                    </CommentBottomButtonContainer>

                                    <PostDateContainer>
                                        <PostDate>{comment.createdAt.split(' ')[0]}</PostDate>
                                    </PostDateContainer>
                                </CommentBottomContainer>
                            </CommentContainer>;
                        })}
                    {getComment && commentData.data?.data.length === 0 && (
                        <NoCommentContainer>
                            <p>댓글이 없습니다.</p>
                            <p>첫 댓글을 작성 해보세요!</p>
                        </NoCommentContainer>
                    )}
                </PostContainerScroll>
            </CommunityContainer>
        </>
    );
};

export default CommunityMyPost;
