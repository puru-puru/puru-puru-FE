import React, { useEffect, useState } from 'react';
import { axios } from '../../api/http';
import {
    CompositionButton,
    PostButtonBox,
    CommunityContainer,
    PostProFileBox,
    PostProFileImgBox,
    PostContainer,
    PostImg,
    PostTextContainer,
    PostTitle,
    PostText,
    PostContainerScroll,
    PostProFileTitle,
    Nickname,
} from './CommunityPage.styles';
import { useNavigate } from 'react-router-dom';


const CommunityPage: React.FC = () => {
    const navigate = useNavigate();
    const [post, setPost] = useState([
        {
            boardId: 1,
            title: '테스333',
            image: 'https://purupuru-bk.s3.ap-northeast-2.amazonaws.com/test/1708117121490.png',
            content: '테스트3333',
            createdAt: '2024-02-16 20:58:42',
            author: {
                nickname: 'test',
            },
        },
        {
            boardId: 2,
            title: '테스222',
            image: 'https://purupuru-bk.s3.ap-northeast-2.amazonaws.com/test/1708117236417.png',
            content: '테스트222',
            createdAt: '2024-02-16 21:00:36',
            author: {
                nickname: 'test',
            },
        },
        {
            boardId: 3,
            title: '테스222',
            image: 'https://purupuru-bk.s3.ap-northeast-2.amazonaws.com/test/1708117236417.png',
            content: '테스트222',
            createdAt: '2024-02-16 21:00:36',
            author: {
                nickname: 'test',
            },
        },
    ]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/boards');
                console.log(response);
                setPost(response.data.data);
            } catch (error) {
                console.error('Error: ', error);
            }
        };
        fetchData();
    }, []);
    const handleWriteButtonClick = () => {
        navigate('/communityWrite');
    };

    const name = localStorage.getItem('Nickname') || "사용자";
    return (
        <>
            <CommunityContainer>
                <h2>커뮤니티</h2>
                <PostProFileBox>
                    <PostProFileImgBox>
                        <img src="./person.svg" alt="카드 이미지" />
                    </PostProFileImgBox>
                    <PostProFileTitle>
                        <span>{name}</span>님
                    </PostProFileTitle>
                </PostProFileBox>
                <PostButtonBox>
                    <CompositionButton onClick={handleWriteButtonClick}>글쓰기</CompositionButton>
                </PostButtonBox>
                <PostContainerScroll>
                    {post?.map((post) => (
                        <PostContainer key={post.boardId}>
                            <div>
                            {post.author?.nickname && <Nickname>{post.author?.nickname}</Nickname>}
                                <PostImg src={post.image} alt="" />
                            </div>
                            <PostTextContainer>
                                <PostTitle>{post.title}</PostTitle>
                                <PostText>{post.content}</PostText>
                            </PostTextContainer>
                        </PostContainer>
                    ))}
                </PostContainerScroll>
            </CommunityContainer>
        </>
    );
};

export default CommunityPage;
