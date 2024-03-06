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
import likeImg from '../../assets/favorite.svg';
import commentImg from '../../assets/chat.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ToggleButton from './togglebutton/ToggleButton';
import { useModal } from '../../hook/useModal';

const CommunityMyPost = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpenMap, setIsOpenMap] = useState<{ [key: number]: boolean }>({});
    const [isSelected, setSelected] = useState<boolean>(true);
    const { data, username } = location.state;
    // console.log('data => ', data.data.data);
    const { open, modalOpen, modalClose } = useModal();

    const getPostHandler = () => {
        navigate('/communitymypost', { state: location.state });
        setSelected((prevState) => !prevState);
    };
    const getCommentHandler = () => {
        setSelected((prevState) => !prevState);
    };
    const getModifyToggleHandler = (postBoardId: number) => {
        setIsOpenMap((prevMap) => ({
            ...prevMap,
            [postBoardId]: !prevMap[postBoardId],
        }));
    };
    return (
        <>
            <CommunityContainer>
                <CommunityHeader username={username} />
                <PostButtonBox>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <CompositionSortButton onClick={getPostHandler} $isSelected={isSelected}>
                            작성글
                        </CompositionSortButton>
                        <CompositionSortButton
                            onClick={getCommentHandler}
                            $isSelected={!isSelected}
                        >
                            댓글 단 글
                        </CompositionSortButton>
                    </div>
                </PostButtonBox>
                <PostContainerScroll>
                    {data.data.data.length === 0 ? (
                        <div style={{ padding: '150px' }}>
                            <p>작성글이 없습니다.</p>
                            <p>첫 번째 작성글을 남겨주세요.</p>
                        </div>
                    ) : (
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
                                                modalProps={(open, modalOpen, modalClose)}
                                            />
                                        </PostTitle>
                                        <PostText>{mypost.content}</PostText>
                                    </PostTextContainer>
                                    <PostBottomContainer>
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
                </PostContainerScroll>
            </CommunityContainer>
        </>
    );
};

export default CommunityMyPost;
