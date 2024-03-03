import  styled  from "styled-components";
import { colors } from "../../../../../../../styles/colors";

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