import styled from "styled-components";
import Slider from 'react-slick';

export const SlideContainer = styled.div`
    height: 100%;
    width: 100%;
    background-color: #72a474;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const StyledSlider = styled(Slider)`
    width: 100%;

    .slick-slide {
        height: 100%;
        display: flex !important;
        justify-content: center;
        align-items: center;
    }
`;

export const SliderButton = styled.button`
    padding: 10px 20px;
    margin-top: 50px;
    background-color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;