import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const MyPlantToggle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    width: 310px;
    height: auto;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffffff;
    border: 1px solid #cccccc;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.35);
    border-radius: 10px;
`;
export const MyPlantToggleContainer = styled.div`
    margin: 10px;
`;
export const MyPlantToggleDetail = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const MyPlantToggleButton = styled.button<{ $isChecked: boolean }>`
    margin: 5px;
    width: 90px;
    background-color: ${(props) => (props.$isChecked ? colors.green100 : colors.green50)};
    color: ${colors.white};
`;
