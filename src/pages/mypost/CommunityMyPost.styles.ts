import styled from 'styled-components';

export const CommunityContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const PostNone = styled.div`
    padding: 150px;
`;

export const PostButtonBox = styled.div`
    width: 321px;
    height: 20px;
    margin: 15px;
    display: flex;
    justify-content: space-between;
`;
export const CompositionSortButton = styled.button<{ $isSelected: boolean }>`
    width: 60px;
    height: 20px;
    background-color: ${({ $isSelected }) =>
        $isSelected ? 'rgba(114, 164, 116, 0.5)' : 'rgba(255, 255, 255, 1)'};
    color: #989898;
    border: 2px solid #daebca;
    border-radius: 999px;
    font-size: 10px;
    font-weight: 700;
    line-height: 18.28px;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

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
    padding: 5px;
    margin: 10px 0px;
    border: none;
    border-radius: 20px;
    background-color: #fafff4;
    display: flex;
    align-items: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    &:hover {
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
    }
`;

export const Nickname = styled.div`
    font-size: 14px;
    font-weight: 700;
    line-height: 11.93px;
    color: #72a474;
    margin-left: 10px;
    opacity: 75%;
`;

export const PostImg = styled.img`
    width: 100px;
    height: 100px;
    margin: 10px;
    border: none;
    border-radius: 10px;
`;
export const PostTextContainer = styled.div`
    width: 192px;
    height: 100px;
    margin: 0 5px;
`;
export const PostTitle = styled.p`
    width: 190px;
    height: 21px;
    font-size: 16px;
    font-weight: 800;
    line-height: 21.32px;
    margin: 0;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
`;

// export const PostModifyButton = styled.button`
//     width: 24px;
//     height: 24px;
//     padding: 0px;
//     background-color: rgba(218, 234, 202, 1);
// `;

// export const PostModifyButtonImg = styled.img`
//     width: 16px;
//     height: 16px;
//     background-color: rgba(218, 234, 202, 1);
// `;

export const PostText = styled.p`
    width: 192px;
    height: 75px;
    font-size: 11px;
    font-weight: 400;
    line-height: 15.23px;
    margin: 5px 0;
`;

export const PostBottomContainer = styled.div`
    width: 100%;
    height: 100%;
    max-width: 185px;
    max-height: 15px;
    margin: 20px 0px -10px 0px;
    display: flex;
    justify-content: space-between;
`;

export const PostLikeCommentContainer = styled.div`
    width: 66px;
    height: 15px;
    display: flex;
`;

export const LikeCommentButtonContainer = styled.div`
    width: 28px;
    height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LikeCommentButton = styled.div`
    width: 14px;
    height: 14px;
    background: none;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LikeCommentImg = styled.img`
    width: 11.67px;
    height: 10.7px;
`;

export const LikeCommentCount = styled.div`
    width: 14px;
    height: 14px;
    font-size: 8px;
    font-weight: 500;
    line-height: 12.18px;
    color: #939393;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PostDateContainer = styled.div`
    width: auto;
    height: 12px;
    display: flex;
`;

export const PostDate = styled.div`
    font-size: 8px;
    font-weight: 400;
    line-height: 12.18px;
`;

export const CommentContainer = styled.div`
    width: 330px;
    height: 140px;
    margin: 5px 15px;
    padding: 8px;
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
`;

export const CommentHeadContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CommentHeadLayout = styled.div`
    width: 196px;
    height: 24px;
    display: flex;
`;

export const UserProfileImg = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProfileImg = styled.img`
    width: 16px;
    height: 16px;
`;

export const UserNameLayout = styled.div`
    width: 163px;
    height: 10px;
    display: flex;
    align-items: center;
    margin-top: 8px;
`;

export const UserName = styled.span`
    font-size: 10px;
    font-weight: 700;
    line-height: 11.93px;
`;

export const CommentLayout = styled.div`
    width: 100%;
    height: 100%;
    margin: 5px 0px;
    font-size: 10px;
    font-weight: 300;
    line-height: 15.23px;
`;

export const CommentBottomContainer = styled.div`
    width: 100%;
    height: 100%;
    max-width: 290px;
    max-height: 15px;
    margin: 20px 0px -10px 0px;
    display: flex;
    justify-content: space-between;
`;

export const CommentBottomButtonContainer = styled.div`
    width: 66px;
    height: 15px;
    display: flex;
`;

export const MyPostLikeCommentButtonContainer = styled.div`
    width: 28px;
    height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MyPostLikeCommentButton = styled.button`
    width: 14px;
    height: 14px;
    background: none;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MyPostLikeCommentImg = styled.img`
    width: 11.67px;
    height: 10.7px;
`;

export const ReComment = styled.div`
    width: 14px;
    height: 14px;
    font-size: 8px;
    font-weight: 500;
    line-height: 12.18px;
    color: #939393;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MyPostPostDateContainer = styled.div`
    width: auto;
    height: 12px;
    display: flex;
`;

export const MyPostPostDate = styled.div`
    font-size: 8px;
    font-weight: 400;
    line-height: 12.18px;
`;

export const NoCommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 0px;
`;
