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
`;
export const RecommendedSearchWordsText = styled.div`
     font-size: 10px;
    font-weight: bold;
    color: #7D7D7D;
    margin: 10px 0px;
`

export const RecommendedSearchWordsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
export const RecommendedSearchWords = styled.div`
    width: 50px;
    height: 20px;
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #F4F1F1;
    border-radius: 3px;

    font-size: 8px;
    font-weight: bold;
    
    color: #A4A4A4;
    background-color: ${colors.gray100};
`;
