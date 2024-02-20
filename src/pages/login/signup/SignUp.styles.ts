import styled from 'styled-components';
import { SharedButton, SharedInput } from '../../Shared.styles';

export const SignUpBotten = styled(SharedButton)<{ $isChecked: boolean }>`
    position: absolute;
    bottom: 2%;
    background-color: ${(props) => (props.$isChecked ? '#72A474' : '#DAEBCA')};
`;

export const SignUpToggle = styled.div`
display: flex;
align-items: center;
justify-content: center;

position: relative;
width: 310px;
height: 62px;
z-index: 1;

background: #FFFFFF;
border: 1px solid #CCCCCC;
box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.35);
border-radius: 10px;
`

export const StyledInput = styled(SharedInput)<{ $invalid: boolean }>`
&:focus-visible{
    border-color: ${(props) => (props.$invalid ? 'red' : '#72A474')};
    outline: none;
}
`;