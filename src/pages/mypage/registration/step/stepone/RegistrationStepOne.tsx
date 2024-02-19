import React, { useRef, useState } from 'react';
import { currentStepState } from '../../../../../recoil/atom';
import { useRecoilState } from 'recoil';
import { SharedInput } from '../../../../Shared.styles';
import {
    NextStepButton,
    PreviewContainer,
    PreviewImage,
    SetImgContainer,
    SetNameContainer,
    StepOneContainer,
    UploadButton,
} from './RegistrationStepOne.styles';
import { registrationApi } from '../../../../../api/http';
import { PetPlantFormData } from '../../../../../api/model';

export const RegistrationStepOne: React.FC = () => {
    const [currentStep, setCurrentStep] = useRecoilState<number>(currentStepState);
    const [imageBase64, setImageBase64] = useState<string | null>(null);
    const [formData, setFormData] = useState<PetPlantFormData>({
        name: '',
        plantAt: '',
        image: null,
    });
    const handleNextStep = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        if (formData.image && formData.name && formData.plantAt) {
            const formDataToSend = new FormData();
            formDataToSend.append('image', formData.image);
            formDataToSend.append('name', formData.name);
            formDataToSend.append('plantAt', formData.plantAt);

            try {
                await registrationApi.post(formDataToSend);
                setCurrentStep(currentStep + 1);
            } catch (error) {
                console.error('반려식물 등록 에러:', error);
            }
        }
        setCurrentStep(currentStep + 1);
    };

    // 이미지 추가
    const onChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
    
        const files = e.target.files;
        if (files && files.length > 0) {
            const uploadFile = files[0];
            setFormData(prevData => ({
                ...prevData,
                image: uploadFile
            }));
    
            // 이미지 선택 시 바로 미리보기 생성
            encodeFileToBase64(uploadFile);
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
            setImageBase64(base64String);
        };

        reader.readAsDataURL(fileBlob);
    };

    // 반려 식물 이름 및 식물을 만난 날짜 변경 핸들러
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };


    return (
        <StepOneContainer>
            <SetImgContainer>
                <p>이미지 업로드</p>
                <PreviewContainer>
                    {imageBase64 && <PreviewImage src={imageBase64} alt="preview-img" />}

                    <form action="">
                        <input
                            type="file"
                            id="profile-upload"
                            accept="image/*"
                            onChange={onChangeImg}
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                        />

                        <label htmlFor="profile-upload">
                            <UploadButton type="button" onClick={handleClickFileInput}>
                                <img src="./Plus_Icon.svg" alt="PlusIcon" />
                            </UploadButton>
                        </label>
                    </form>
                </PreviewContainer>
            </SetImgContainer>
            <SetNameContainer>
                <p>반려 식물 이름을 설정해주세요</p>
                <SharedInput
                    placeholder="오월이 행복해"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </SetNameContainer>
            <SetNameContainer>
                <p>반려 식물을 만난 날은 언제 인가요?</p>
                <SharedInput
                    placeholder="YYYY-MM-DD"
                    name="plantAt"
                    value={formData.plantAt}
                    onChange={handleChange}
                />
            </SetNameContainer>
            <NextStepButton 
            // FormDataEntryValue | null => boolean 변환
            $isChecked={!!(formData.image && formData.name && formData.plantAt)}
            disabled={!formData.image && !formData.name && !formData.plantAt}
            onClick={handleNextStep}>다음</NextStepButton>
        </StepOneContainer>
    );
};

