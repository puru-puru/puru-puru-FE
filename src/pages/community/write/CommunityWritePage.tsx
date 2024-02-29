import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { communityApi } from '../../../api/http';
import {
    CommunityPostContainer,
    CommunityPostHeader,
    CommunityPostHeaderText,
    CommunityPostHeaderTitle,
    CommunityPostTextContainer,
    CommunityPostTextTextarea,
    CommunityPostTitleContainer,
    CommunityPostlabel,
    CommunityPreviewContainer,
    CommunityPreviewImage,
    CommunityUploadButton,
    PostButton,
} from './CommunityWritePage.styles';
import { SharedInput } from '../../Shared.styles';
import { CommunityFormData } from '../../../api/model';
import ImageCompressor from '../../../components/ImageCompressor';
import { ReUploadButton } from '../../mypage/registration/step/stepone/RegistrationStepOne.styles';
import { BackspaceButton } from '../../../components/atoms/button/BackspaceButton';

const CommunityWritePage: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<CommunityFormData>({
        title: '',
        content: '',
        image: null,
    });
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    // 이미지 추가
    const onChangeImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const files = e.target.files;
        if (files && files.length > 0) {
            const uploadFile = files[0];
            const compressedImage = await ImageCompressor(uploadFile);
            if (compressedImage) {
                setFormData((prevData) => ({
                    ...prevData,
                    image: compressedImage,
                }));

                encodeFileToBase64(compressedImage);
            }
        }
    };

    // 이미지 선택
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleClickFileInput = () => {
        fileInputRef.current?.click();
    };

    // 이미지 미리보기
    const encodeFileToBase64 = (fileBlob: File) => {
        const reader = new FileReader();

        reader.onload = () => {
            const base64String = reader.result as string;
            setImagePreview(base64String);
        };

        reader.readAsDataURL(fileBlob);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData.title || formData.title.length < 2 || formData.title.length > 10) {
            alert('제목을 2자 이상 10자 이내로 입력해주세요');
            return;
        } else if (
            !formData.content ||
            formData.content.length < 5 ||
            formData.content.length > 100
        ) {
            alert('내용을 5자 이상 100자 이내로 입력해주세요');
            return;
        }

        try {
            const formDataObj = new FormData();
            formDataObj.append('title', formData.title);
            if (formData.image) {
                formDataObj.append('image', formData.image);
            }
            formDataObj.append('content', formData.content);

            await communityApi.post('/api/boards', formDataObj);

            navigate(-1);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    function formatPlantTitleInput(value: string) {
        const regex = /[^\w\sㄱ-ㅎㅏ-ㅣ가-힣]/g;
        let formattedValue = value.trim();
        formattedValue = value.replace(regex, '');
        formattedValue = formattedValue.slice(0, 10);
        return formattedValue;
    }

    function formatPlantContentInput(value: string) {
        let formattedValue = value;
        formattedValue = formattedValue.slice(0, 100);
        return formattedValue;
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        let formattedValue = value;
        if (name === 'title') {
            formattedValue = formatPlantTitleInput(value);
        } else if (name === 'content') {
            formattedValue = formatPlantContentInput(value);
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: formattedValue,
        }));
    };


    const { title, content } = formData;

    return (
        <div>
            <BackspaceButton onClick={()=>navigate(-1)} />
            <CommunityPostHeader>
                <CommunityPostHeaderTitle>게시글 작성</CommunityPostHeaderTitle>
                <CommunityPostHeaderText>
                    반려 식물 글을 작성하고 공유해보세요
                </CommunityPostHeaderText>
            </CommunityPostHeader>
            <CommunityPostContainer onSubmit={handleSubmit}>
                <CommunityPostTitleContainer>
                    <CommunityPostlabel>제목을 작성해주세요</CommunityPostlabel>
                    <SharedInput
                        placeholder="2자 이상 10자 이내 제목을 작성해주세요"
                        type="text"
                        name="title"
                        value={title}
                        onChange={handleChange}
                    />
                </CommunityPostTitleContainer>

                <CommunityPostTextContainer>
                    <CommunityPostlabel>자세한 내용을 작성해주세요</CommunityPostlabel>
                    <CommunityPostTextTextarea
                        value={content}
                        name="content"
                        onChange={handleChange}
                        placeholder="최소 5자 이상 100자 이내로  입력해 주세요"
                    />
                </CommunityPostTextContainer>
                <CommunityPostlabel>이미지 업로드</CommunityPostlabel>
                <CommunityPreviewContainer>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={onChangeImg}
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                    />
                    {imagePreview && <CommunityPreviewImage src={imagePreview} alt="preview-img" />}
                    {!formData.image ? (
                        <CommunityUploadButton type="button" onClick={handleClickFileInput}>
                            <img src="./Plus_Icon.svg" alt="PlusIcon" />
                        </CommunityUploadButton>
                    ) : (
                        <ReUploadButton
                            type="button"
                            onClick={handleClickFileInput}
                        ></ReUploadButton>
                    )}
                </CommunityPreviewContainer>
                <PostButton
                    $isChecked={!!(formData.image && formData.title && formData.content)}
                    // disabled={!formData.image || !formData.title || !formData.content}
                    type="submit"
                >
                    제출
                </PostButton>
            </CommunityPostContainer>
        </div>
    );
};

export default CommunityWritePage;
