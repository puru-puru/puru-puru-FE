import styled from "styled-components";
import { SharedButton } from "../../../../Shared.styles";

export const SelectionCompletedContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SavePlantsButton = styled(SharedButton)<{$isChecked:boolean}>`
    position: absolute;
    bottom: 2%;
    background-color: ${(props) => (props.$isChecked ? '#DAEBCA' : '#72A474')};
    font-size: 18px;
`;