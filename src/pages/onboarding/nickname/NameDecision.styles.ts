import styled from 'styled-components';
import { SharedInput } from '../../Shared.styles';
export const NameDecisionInput = styled(SharedInput)<{ $isError: boolean }>`
    font-size: 18px;
    border-color: ${props => props.$isError ?   '#FF5555' : '#72A474' };
    &:focus-visible {
        border-color: ${props => props.$isError ?   '#FF5555' : '#72A474' };
    }
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