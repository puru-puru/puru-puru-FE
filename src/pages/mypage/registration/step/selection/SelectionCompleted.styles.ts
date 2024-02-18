import styled from "styled-components";
import { SharedButton } from "../../../../Shared.styles";

export const SelectionCompletedContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
`;

export const FindOtherPlantsButton = styled(SharedButton)`
    width: 150px;
    background-color: #72A474;
    font-size: 13px;
`;

export const SavePlantsButton = styled(SharedButton)<{$isChecked:boolean}>`
    width: 150px;
    background-color: ${(props) => (props.$isChecked ? '#DAEBCA' : '#72A474')};
    font-size: 13px;
`;