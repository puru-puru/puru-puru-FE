import React, { useEffect, useState } from 'react';
import { communityApi } from '../../api/http';
import {
    CommunityContainer,
    PostContainer,
    PostImg,
    PostTextContainer,
    PostTitle,
    PostText,
    PostContainerScroll,
    Nickname,
    PostButtonBox,
    CompositionButton,
} from './Community.styles';
import CommunityHeader from './header/CommunityHeader';
import { CommunityData } from '../../api/model';
import { useNavigate } from 'react-router-dom';
import Spinner from '/Spin.gif';
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
    const handleWriteButtonClick = () => {
        navigate('/communityWrite');
    };
    return (
        <>
            <CommunityContainer>
                <CommunityHeader username={post.loginUser} />
                <PostButtonBox>
                    <div>
                        <CompositionButton>전체</CompositionButton>
                    </div>
                    <CompositionButton onClick={handleWriteButtonClick}>글쓰기</CompositionButton>
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
                                        alt=""
                                    />
                                </div>
                                <PostTextContainer>
                                    <PostTitle>{post.title}</PostTitle>
                                    <PostText>{post.content}</PostText>
                                </PostTextContainer>
                            </PostContainer>
                        ))
                    )}
                </PostContainerScroll>
            </CommunityContainer>
        </>
    );
};

export default CommunityPage;
