import styled from 'styled-components';
// import { colors } from '../../../styles/colors';

export const NameDecisionInput = styled.input<{ $isError: boolean }>`
    width: 334px;
    height: 50px;
    font-size: 18px;
    border-radius: 20px;
    padding: 0 20px;
    border-style: solid;
    border-color: ${props => props.$isError ?   '#FF5555' : '#72A474' };
    outline: none;
`;

export const NameDecisionText = styled.p`
    font-size: 14px;
    margin: 5px 0 30px;
`;

export const NameDecisionHeading = styled.h2`
    margin: 0;
`;

export const ErrorText = styled.span`
    color: red;
    font-size: 12px;
`;

export const ClearButton = styled.button`
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;

`;