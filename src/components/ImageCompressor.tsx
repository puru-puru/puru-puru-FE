import imageCompression from 'browser-image-compression';

const ImageCompressor = async (imageFile: File) => {
    const options = {
        maxSizeMB: 0.5,
        maxWidthOrHeight: 180,
    };

    try {
        // 이미지 압축
        const compressedImage = await imageCompression(imageFile, options);
        return compressedImage;
    } catch (error) {
        console.error('이미지 압축 오류:', error);
        return null; 
    }
};

export default ImageCompressor;
