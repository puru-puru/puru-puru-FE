import imageCompression from 'browser-image-compression';

const ImageCompressor = async (imageFile: File) => {
    const options = {
        maxSizeMB: 0.5,
        maxWidthOrHeight: 318,
    };
    try {
        const compressedImage = await imageCompression(imageFile, options);
        const resizingFile = new File([compressedImage], 'compressed_image.jpg', {
            type: compressedImage.type,
        });
        return resizingFile;
    } catch (error) {
        console.error('이미지 압축 오류:', error);
        return null; 
    }
};

export default ImageCompressor;
