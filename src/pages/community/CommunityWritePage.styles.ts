import styled from 'styled-components';
import { SharedButton } from '../Shared.styles';

export const CommunityPostContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 336px;
    margin: 0 auto;
`;
export const CommunityPostlabel = styled.label`
    margin-bottom: 5px;
`;
export const CommunityPostHeader = styled.div`
    width: 334px;
    margin: 0 auto;
`;
export const CommunityPostHeaderTitle = styled.h2`
    margin-bottom: 0;
`;
export const CommunityPostHeaderText = styled.p`
    margin-top: 5px;
    margin-bottom: 30px;
    opacity: 50%;
    font-size: 14px;
`;

// 제목
export const CommunityPostTitleContainer = styled.div`
    width: 334px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

// 내용
export const CommunityPostTextContainer = styled.div`
    width: 345px;
    margin-bottom: 10px;
`;
export const CommunityPostTextTextarea = styled.textarea`
    width: 334px;
    height: 146px;
    max-width: 334px;
    max-height: 146px;
    overflow: auto;
    padding: 15px;
    border: 2px solid rgba(128, 128, 128, 0.5);
    border-radius: 20px;
`;
//이미지
export const CommunityUploadButton = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #72a474;
    color: white;
    border: none;
    display: flex;

    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const CommunityPreviewContainer = styled.div`
    width: 327px;
    height: 146px;
    border: 2px solid rgba(204, 204, 204, 0.7);
    border-radius: 18px;
    position: relative;
    margin-bottom: 30px;
`;

export const CommunityPreviewImage = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 145px;
    max-width: 326px;
`;

export const PostButton = styled(SharedButton)<{$isChecked:boolean}>`
    background-color: ${(props) => (props.$isChecked ? '#72A474' : '#DAEBCA')};
`;
