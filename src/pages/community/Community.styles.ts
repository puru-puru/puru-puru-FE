import styled from "styled-components";

export const CommunityContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`


// 카드
export const PostContainerScroll = styled.div`
    max-height: 400px;
    overflow-y: auto; 
    scrollbar-width: none;
`;

export const PostContainer = styled.div`
    width: 330px;
    height: 180px;
    border-radius: 20px;
    padding: 10px;
    margin: 30px 0px;
    display: flex;
    background-color: #fff;
    align-items: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease; 
    &:hover {
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3); 
    }
`;
export const PostImg = styled.img`
    width: 100px;
    height: 100px;
    margin: 10px;
`
export const PostTextContainer = styled.div`
    width: 192px;
    height: 100px;
    margin: 0 5px;
`
export const PostTitle = styled.p`
    font-size: 14px;
    font-weight: bold;
    margin: 0;
    margin-top: 10px;
`

export const PostText = styled.p`
    font-size: 10px;
    margin: 5px 0;
`

export const Nickname = styled.div`
    margin-left: 10px;
    opacity: 75%;
`;