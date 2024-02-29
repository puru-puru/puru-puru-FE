import * as St from './BoardTest.styles';

const BoardTestTagItem = ({
    id,
    keyword,
    keywordImgURL,
    boardItemHandler,
}: {
    id: number;
    keyword: string;
    keywordImgURL: string;
    boardItemHandler: any;
}) => {
    return (
        <div key={id} style={{ marginTop: '20px' }}>
            <St.BoardTestMainItem onClick={() => boardItemHandler(id)} /*$isSelected={isSelected}*/>
                <img style={{ width: '50px', height: '50px' }} src={keywordImgURL} />
                <St.BoardTestMainItemContent>{keyword}</St.BoardTestMainItemContent>
            </St.BoardTestMainItem>
        </div>
    );
};

export default BoardTestTagItem;
