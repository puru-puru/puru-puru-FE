import styled from "styled-components";
import { colors } from "../../../../../../styles/colors";

export const FindOtherPlantsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

export const FindOtherPlantsButton = styled.button`
    width: 120px;
    height: 30px;
    background-color: ${colors.green50};
    color: ${colors.green100};
    font-size: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-weight: bold;
    &:hover {
        background-color: ${colors.green100};
        color: ${colors.green50};
    }
`;

export const SpinnerImage = styled.img`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
`;