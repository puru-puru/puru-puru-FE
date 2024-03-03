import styled from 'styled-components';
import { PetPlantRegisterText } from '../../../EmptyMyPlant.styles';
import { colors } from '../../../../../../styles/colors';

// 카드 부분들
export const HomeRecent = styled.section`
    width: 330px;
    height: 350px;
    position: relative;
    margin: 10px auto;

    .card-group {
        display: flex;
        flex-wrap: wrap;
    }

    .card {
        box-sizing: border-box;
        color: #051619;

        cursor: pointer;
        text-decoration-line: none;
        width: 100px;
        min-height: 120px;
        margin: 5px;
        margin-bottom: 25px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        border-radius: 10px;


        img {
            width: 100%;
            max-width: 100px;
            height: 50%;
            max-height: 60px;
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;

            object-fit: cover;
            background-color: #f8f9fa;
            filter: grayscale(50%);
            transition: filter 0.3s ease;
        }

        .card-body {
            width: 100%;
            max-width: 100px;
            height: 50%;
            max-height: 60px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-weight: 600;
        }

        .card-title {
            text-align: center;
            color: #72A474;
            font-size: 8px;

        }
        .card-text {
            margin-top: 0px;
            text-align: center;
            color: #3D3D3D;
            font-size: 10px;
        }

        &:hover {
            background-color: #F4FFF4;
            img {
                filter: grayscale(0%);
            }
        }
        &.selected {
            img {
                filter: grayscale(0%);
            }
            border-width: 3px;
            background-color: #F4FFF4;
            border: 2px solid ${colors.green100};
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
    font-size: 13px;
    text-align: center;
`;
