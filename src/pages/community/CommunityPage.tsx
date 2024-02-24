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
} from './Community.styles';
import CommunityHeader from './header/CommunityHeader';
import { CommunityData } from '../../api/model';
import Spinner from '/Spin.gif';
const CommunityPage: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState<CommunityData>({ data: [], loginUser: "" });
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

    return (
        <>
            <CommunityContainer>
                <CommunityHeader username={post.loginUser}/>
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
                                    <PostImg src={post.image} alt="" />
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
