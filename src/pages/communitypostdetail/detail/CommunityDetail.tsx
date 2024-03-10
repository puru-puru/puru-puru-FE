import { useLocation, useNavigate } from 'react-router-dom';
import {
    useGetCommunityDetailData,
    usePostLikeCountUp,
} from '../../../api/communitypostdetail/CommunityPostDetail';
import * as St from './CommunityDetail.styles';
import backButtonImg from '../../../assets/backbutton.svg';
import {
    Nickname,
    PostImg,
    PostTextContainer,
    PostTitle,
    PostText,
    PostBottomContainer,
    PostLikeCommentContainer,
    LikeCommentButtonContainer,
    LikeCommentButton,
    LikeCommentImg,
    LikeCommentCount,
    PostDateContainer,
    PostDate,
} from '../../community/Community.styles';
import likeImg from '../../../assets/favorite.svg';
import commentImg from '../../../assets/chat.svg';
import profileImg from '../../../../public/person.svg';
import CommentToggle from '../toggle/CommentToggle';
import { useState } from 'react';
import coloredLikeImg from '../../../assets/coloredlikebutton.svg';
import { useModal } from '../../../hook/useModal';
import PostLikeModal from '../postlikemodal/PostLikeModal';

const CommunityDetail = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { open, modalOpen, modalClose } = useModal();
    const { boardId, commentCount } = location.state;
    const { data } = useGetCommunityDetailData({ boardId });
    const { mutate } = usePostLikeCountUp(boardId);
    // const { mutate } = useDeleteLikeData();
    console.log('detailData => ', data?.data.board);
    const navigateInputHandler = (boardId: number) => {
        navigate('/communitycomment', { state: { boardId } });
    };
    const [isOpenMap, setIsOpenMap] = useState<{ [key: number]: boolean }>({});
    const [isInputClicked, setIsInputClicked] = useState(false);
    const [likeButton, setLikeButton] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const backButtonHandler = () => {
        navigate('/community');
    };

    const getModifyToggleHandler = (commentId: number) => {
        setIsOpenMap((prevMap) => ({
            ...prevMap,
            [commentId]: !prevMap[commentId],
        }));
    };

    const handleSuccess = () => {
        setLikeButton(true);
        modalOpen();
    };
    const handleError = (error: any) => {
        if (error.response.status === 404) {
            setErrorMessage('좋아요 실패: 서버 오류가 발생했습니다.');
            alert(errorMessage);
            alert(error);
        }
    };

    const likeButtonHandler = async () => {
        try {
            mutate({
                onSuccess: handleSuccess,
                onError: handleError,
            });
        } catch (error: any) {
            handleError(error);
        }
    };

    return (
        <St.DetailContainer>
            <St.DetailHeadWrapper1>
                <St.DetailHeadWrapper2>
                    <St.DetailHeadLayout>
                        <St.BackButtonLayout>
                            <St.BackButton onClick={backButtonHandler}>
                                <St.BackButtonImg src={backButtonImg} />
                            </St.BackButton>
                        </St.BackButtonLayout>
                        <St.DetailHeadContentLayout>
                            <St.DetailHeadContent>글 댓글</St.DetailHeadContent>
                        </St.DetailHeadContentLayout>
                    </St.DetailHeadLayout>
                </St.DetailHeadWrapper2>
            </St.DetailHeadWrapper1>
            <St.DetailPostContainer key={data?.data.board.boardId}>
                <div>
                    {data?.data.board.author?.nickname ? (
                        <Nickname>{data?.data.board.author.nickname}</Nickname>
                    ) : (
                        <Nickname>익명</Nickname>
                    )}
                    <PostImg
                        src={data?.data.board.image ? data?.data.board.image : '/plantimg.png'}
                        alt="이미지 없음"
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <PostTextContainer>
                        <PostTitle>{data?.data.board.title}</PostTitle>
                        <PostText>{data?.data.board.content}</PostText>
                    </PostTextContainer>
                    <PostBottomContainer>
                        <PostLikeCommentContainer>
                            <LikeCommentButtonContainer>
                                {likeButton && (
                                    <St.DetailLikeCommentButton
                                        onClick={() => likeButtonHandler(boardId)}
                                    >
                                        <LikeCommentImg src={coloredLikeImg} />
                                    </St.DetailLikeCommentButton>
                                )}
                                {!likeButton && (
                                    <St.DetailLikeCommentButton>
                                        <LikeCommentImg src={likeImg} />
                                    </St.DetailLikeCommentButton>
                                )}

                                <LikeCommentCount>{data?.data.board.likeCount}</LikeCommentCount>
                            </LikeCommentButtonContainer>
                            <LikeCommentButtonContainer>
                                <LikeCommentButton>
                                    <LikeCommentImg src={commentImg} />
                                </LikeCommentButton>
                                <LikeCommentCount>{commentCount}</LikeCommentCount>
                            </LikeCommentButtonContainer>
                        </PostLikeCommentContainer>

                        <PostDateContainer>
                            <PostDate>{data?.data.board.createdAt.split(' ')[0]}</PostDate>
                        </PostDateContainer>
                    </PostBottomContainer>
                </div>
            </St.DetailPostContainer>
            {data?.data.board.Comments.length === 0 && (
                <St.DetailNoCommentContainer>
                    <p>댓글이 없습니다.</p>
                    <p>첫 번째 댓글을 남겨주세요.</p>
                </St.DetailNoCommentContainer>
            )}
            <St.CommentContainerScroll>
                {data?.data.board.Comments.map((comment) => {
                    return (
                        <St.CommentContainer key={comment.id}>
                            <St.CommentHeadContainer>
                                <St.CommentHeadLayout>
                                    <St.UserProfileImg>
                                        <St.ProfileImg src={profileImg} />
                                    </St.UserProfileImg>
                                    <St.UserNameLayout>
                                        <St.UserName>
                                            {data.data.board.author ? (
                                                <Nickname>
                                                    {data.data.board.author.nickname}
                                                </Nickname>
                                            ) : (
                                                <Nickname>익명</Nickname>
                                            )}
                                        </St.UserName>
                                    </St.UserNameLayout>
                                </St.CommentHeadLayout>
                                <CommentToggle
                                    commentId={comment.id}
                                    getModifyToggleHandler={getModifyToggleHandler}
                                    isOpenMap={isOpenMap}
                                />
                            </St.CommentHeadContainer>
                            <St.CommentLayout>{comment.content}</St.CommentLayout>
                            <St.CommentBottomContainer>
                                <St.CommentBottomButtonContainer>
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
                                        <St.ReComment>답글</St.ReComment>
                                    </LikeCommentButtonContainer>
                                </St.CommentBottomButtonContainer>

                                <PostDateContainer>
                                    <PostDate>{comment.createdAt.split(' ')[0]}</PostDate>
                                </PostDateContainer>
                            </St.CommentBottomContainer>
                        </St.CommentContainer>
                    );
                })}
            </St.CommentContainerScroll>
            <St.CommentInputLayout>
                <St.CommentInput
                    onFocus={() => setIsInputClicked(true)}
                    onBlur={() => setIsInputClicked(false)}
                    onClick={() => navigateInputHandler(boardId)}
                    placeholder={isInputClicked ? '' : '댓글을 입력해주세요'}
                />
                <St.CommentPostButton>등록</St.CommentPostButton>
            </St.CommentInputLayout>
            {open && <PostLikeModal modalClose={modalClose} />}
        </St.DetailContainer>
    );
};

export default CommunityDetail;
