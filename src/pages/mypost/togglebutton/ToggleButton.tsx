import * as St from './ToggleButton.styles';
import modifyButtonImg from '../../../assets/modifybutton.svg';
import deleteButtonImg from '../../../assets/delete.svg';
import modifyPencil from '../../../assets/modifypen.svg';

const ToggleButton = ({ mypost, isOpenMap, getModifyToggleHandler }) => {
    return (
        <St.PostModifyButton onClick={() => getModifyToggleHandler(mypost.boardId)}>
            {isOpenMap[mypost.boardId] && (
                <St.ToggleButtonWrapper>
                    <St.DeleteButton>
                        <St.ButtonImg src={deleteButtonImg} />
                        삭제
                    </St.DeleteButton>
                    <St.ToggleButtonLine></St.ToggleButtonLine>
                    <St.ModifyButton>
                        <St.ButtonImg src={modifyPencil} />
                        수정
                    </St.ModifyButton>
                </St.ToggleButtonWrapper>
            )}
            {!isOpenMap[mypost.boardId] && <St.PostModifyButtonImg src={modifyButtonImg} />}
        </St.PostModifyButton>
    );
};

export default ToggleButton;
