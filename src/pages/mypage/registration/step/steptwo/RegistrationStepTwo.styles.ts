import styled from 'styled-components';
import { SharedButton, SharedInput } from '../../../../Shared.styles';
import { colors } from '../../../../../styles/colors';
export const SearchContainer = styled.div`
    width: 313px;
    height: 55px;
    margin: auto;
    display: flex;
    align-items: center;
    position: relative;
`;
export const SearchIcon = styled.img`
    position: absolute;
    padding-left: 10px;
    z-index: 1;
    cursor: pointer;
`
export const SearchInput = styled(SharedInput)`
    background-color: #fff8f8;
    color: black;
    outline: none;
    font-size: 11px;
    padding-left: 40px;
    &:focus{
        font-weight: bold;
        background-color:none;
    }
`;

export const SearchButtonContainer = styled.div`
    margin: 0 12px;
`;

export const SearchButton = styled(SharedButton)<{ $isChecked: boolean }>`
    position: absolute;
    bottom: 2%;
    background-color: ${(props) => (props.$isChecked ? colors.green100 : colors.green50)};
`;

export const StepTwoNoneIcon = styled.img`
    width: 150px;
    height: 150px;
    margin-top: 40px;
`;

