import styled from 'styled-components';
import { PetPlantRegisterText } from '../../EmptyMyPlant.styles';

// 카드 부분들
export const HomeRecent = styled.section`
    width: 330px;
    height: 302px;
    position: relative;
    margin: 10px auto;
    
    .card-group {
        display: flex;
        flex-wrap: wrap;

    }

    .card {
        box-sizing: border-box;
        color: #051619;
        border: 1px solid #051619;
        cursor: pointer;
        text-decoration-line: none;
        width: 100px;
        height: 142px;
        margin: 5px;
        display: flex;
        flex-direction: column;

        img {
            width: 100%;
            max-width: 100px;
            height: 110px;
            object-fit: cover;
            background-color: #f8f9fa;
            filter: grayscale(100%);
            transition: filter 0.3s ease;
        }

        .card-body {
            width: 100px;
            height: 24px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .card-title {
            text-align: center;
            font-size: 10px;
        }

        &:hover {
            background-color: #f8f9fa;
            img {
                filter: grayscale(0%);
            }
        }
        &.selected {
            img {
                filter: grayscale(0%);
            }
            border-width: 3px; 
        }
    }
`;

export const NoneResult = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto; 
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

export const NoneResultText = styled(PetPlantRegisterText)`
    text-align: center;
`;
