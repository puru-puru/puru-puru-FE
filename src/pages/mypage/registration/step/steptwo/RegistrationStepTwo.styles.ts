import styled from 'styled-components';
import { SharedButton, SharedInput } from '../../../../Shared.styles';

export const SearchContainer = styled.div`
    width: 313px;
    height: 55px;
    margin: auto;
    display: flex;
    align-items: center;
    position: relative;
`;
export const SearchInput = styled(SharedInput)`
    background-color: #fff8f8;
    color: #86869e;
    outline: none;
    font-size: 11px;
`;

export const SearchButtonContainer = styled.div`
    margin: 0 12px;
`;

export const SearchButton = styled(SharedButton)<{ $isChecked: boolean }>`
    position: absolute;
    bottom: 2%;
    background-color: ${(props) => (props.$isChecked ? '#72A474' : '#DAEBCA')};
`;

export const StepTwoNoneIcon = styled.img`
    width: 150px;
    height: 150px;
    margin-top: 40px;
`