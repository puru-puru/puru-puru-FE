import React, { useRef, useState } from 'react';
import { currentStepState } from '../../../../../recoil/atom';
import { useRecoilState } from 'recoil';
import { SharedInput } from '../../../../Shared.styles';
import {
    NextStepButton,
    PreviewContainer,
    PreviewImage,
    PreviewImageBox,
    ReUploadButton,
    SetImgContainer,
    SetNameContainer,
    StepOneContainer,
    UploadButton,
} from './RegistrationStepOne.styles';
import { registrationApi } from '../../../../../api/myplant/StepOne';
import { PetPlantFormData } from '../../../../../api/model';
import ImageCompressor from '../../../../../components/ImageCompressor';

export const RegistrationStepOne: React.FC = () => {
    const [currentStep, setCurrentStep] = useRecoilState<number>(currentStepState);
    const [imageBase64, setImageBase64] = useState<string | null>(null);
    const [formData, setFormData] = useState<PetPlantFormData>({
        name: '',
        plantAt: '',
        image: null,
    });

    const today = new Date();
    const todayString = `${today.getFullYear()}${(today.getMonth() + 1)
        .toString()
        .padStart(2, '0')}${today.getDate().toString().padStart(2, '0')}`;
    const dateRegex = /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
    const handleNextStep = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        const { image, name, plantAt } = formData;
        if (!image) {
            alert('이미지를 추가해주세요');
            return;
        }
        if (!(name && name.length >= 2 && name.length <= 10)) {
            alert('반려 식물 이름을 2자 이상 10자 이내로 입력해주세요');
            return;
        }
        if (!plantAt || !dateRegex.test(plantAt)) {
            alert('올바른 날짜 형식을 입력해주세요. YYYYMMDD');
            return;
        }
        if (parseInt(plantAt) > parseInt(todayString)) {
            alert('날짜는 오늘 날짜를 넘어갈 수 없습니다.');
            return;
        }

        if (image && name && plantAt) {
            const formDataToSend = new FormData();
            formDataToSend.append('image', image);
            formDataToSend.append('name', name);
            formDataToSend.append('plantAt', plantAt);
            try {
                await registrationApi.post(formDataToSend);
                setCurrentStep(currentStep + 1);
            } catch (error) {
                console.error('반려식물 등록 에러:', error);
            }
        }
    };

    // 이미지 추가
    const onChangeImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const files = e.target.files;
        if (files && files.length > 0) {
            const uploadFile = files[0];
            const compressedImage = await ImageCompressor(uploadFile);
            if (compressedImage) {
                const resizingFile = new File([compressedImage], 'compressed_image.jpg', {
                    type: compressedImage.type,
                });
                if (compressedImage) {
                    setFormData((prevData) => ({ ...prevData, image: resizingFile }));
                    encodeFileToBase64(resizingFile);
                }
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
        reader.onload = () => setImageBase64(reader.result as string);
        reader.readAsDataURL(fileBlob);
    };

    function formatplantAtInput(dateString: string) {
        const cleanedString = dateString.replace(/[^\d]/g, '');

        // 정규식을 사용하여 'YYYYMMDD' 형식을 'YYYY-MM-DD' 형식으로 변환
        let formattedString = cleanedString.replace(
            /^((19|20)\d{2})(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/,
            '$1-$3-$4',
        );
        formattedString = formattedString.slice(0, 10);
        return formattedString;
    }
    function formatNameInput(value: string) {
        // 입력값이 공백인 경우 처리
        if (!value.trim()) {
            return '';
        }
        let formattedValue = value.trim();

        formattedValue = value.replace(/[^\sA-Za-zㄱ-힣]/g, '');

        // 길이를 10자로 제한
        formattedValue = formattedValue.slice(0, 10);

        return formattedValue;
    }

    // 반려 식물 이름 및 식물을 만난 날짜 변경 핸들러
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        let formattedValue = '';

        if (name === 'name') {
            formattedValue = formatNameInput(value);
        }

        if (name === 'plantAt') {
            formattedValue = formatplantAtInput(value);
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: formattedValue,
        }));
    };

    return (
        <StepOneContainer>
            <SetImgContainer>
                <p>이미지 업로드</p>
                <PreviewContainer>
                    {imageBase64 && (
                        <PreviewImageBox>
                            <PreviewImage src={imageBase64} alt="preview-img" />
                        </PreviewImageBox>
                    )}

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
                            {formData.image ? (
                                // 이미지가 있는 경우
                                <ReUploadButton
                                    type="button"
                                    onClick={handleClickFileInput}
                                ></ReUploadButton>
                            ) : (
                                // 이미지가 없는 경우
                                <UploadButton type="button" onClick={handleClickFileInput}>
                                    <img src="./Plus.svg" alt="PlusIcon" />
                                </UploadButton>
                            )}
                        </label>
                    </form>
                </PreviewContainer>
            </SetImgContainer>
            <SetNameContainer>
                <p>나만의 반려 식물 이름을 설정해주세요</p>
                <SharedInput
                    placeholder="한글과 영어로 2~10자 이내 입력해주세요 :)"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </SetNameContainer>
            <SetNameContainer>
                <p>반려 식물을 만난 날은 언제 인가요?</p>
                <SharedInput
                    placeholder="YYYYMMDD"
                    name="plantAt"
                    value={formData.plantAt}
                    onChange={handleChange}
                />
            </SetNameContainer>
            <NextStepButton
                // FormDataEntryValue | null => boolean 변환
                $isChecked={!!(formData.image && formData.name && formData.plantAt)}
                onClick={handleNextStep}
            >
                다음
            </NextStepButton>
        </StepOneContainer>
    );
};
