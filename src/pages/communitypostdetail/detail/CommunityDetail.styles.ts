import styled from 'styled-components';
import { colors } from '../../../styles/colors';

// 글 상세보기 스타일
export const DetailContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    overflow-x: hidden;
`;

export const DetailHeadWrapper1 = styled.div`
    width: auto;
    height: 136px;
    padding: 10px;
`;

export const DetailHeadWrapper2 = styled.div`
    width: 336px;
    height: 112px;
    padding: 12px;
`;

export const DetailHeadLayout = styled.div`
    width: auto;
    height: 88px;
`;

export const BackButtonLayout = styled.div`
    width: auto;
    height: 40px;
    margin: 0px;
    margin-right: auto;
    display: flex;
`;

export const BackButton = styled.button`
    width: 40px;
    height: 40px;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
`;

export const BackButtonImg = styled.img`
    width: 16px;
    height: 16px;
`;

export const DetailHeadContentLayout = styled.div`
    width: 244px;
    height: 42px;
    padding: 10px 10px 0px 10px;
`;

export const DetailHeadContent = styled.span`
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
`;

export const DetailPostContainer = styled.div`
    width: 330px;
    height: 150px;
    border-radius: 20px;
    padding: 5px;
    margin: 5px 15px;
    border: none;
    border-radius: 20px;
    background-color: #fff;
    display: flex;
    align-items: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

// 댓글 스타일

export const DetailNoCommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 0px;
`;

export const CommentContainerScroll = styled.div`
    max-height: 400px;
    overflow-y: auto;
    scrollbar-width: none;
`;

export const CommentContainer = styled.div`
    width: 330px;
    height: 140px;
    margin: 5px 15px;
    padding: 8px;
    border-top: 1px solid rgba(179, 179, 179, 1);
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

export const LikeCommentButtonContainer = styled.div`
    width: 28px;
    height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DetailLikeCommentButton = styled.button`
    width: 14px;
    height: 14px;
    background: none;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const LikeCommentImg = styled.img`
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

export const CommentInputLayout = styled.div`
    width: 330px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0%;
    left: 4%;
`;

export const CommentInput = styled.input`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    padding: 0 20px;
    border: 2px solid #bdbdbd;
    outline: none;
    transition: border-color 0.3s ease;
    opacity: 70%;
    &:focus {
        border-color: ${colors.green100};
    }
`;

export const CommentPostButton = styled.button`
    width: 100px;
    height: 50px;
    border: 1px solid rgba(218, 234, 202, 1);
    border-radius: 15px;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: rgba(218, 234, 202, 1);
    z-index: 2;
`;
