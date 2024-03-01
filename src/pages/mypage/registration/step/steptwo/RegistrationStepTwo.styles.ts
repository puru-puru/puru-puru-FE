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
    color: #86869e;
    outline: none;
    font-size: 11px;
    padding-left: 40px;
    &:focus{
        background-color:none;
    }
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
    color: #7d7d7d;
    margin: 10px 0px;
`;

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
    border: 1px solid #f4f1f1;
    border-radius: 3px;

    font-size: 8px;
    font-weight: bold;

    color: #a4a4a4;
    background-color: ${colors.gray100};
`;

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

    &:hover {
        background-color: ${colors.green100};
        color: ${colors.green50};
    }
`;
