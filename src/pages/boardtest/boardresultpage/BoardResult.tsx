import { useEffect } from 'react';
import * as St from './BoardResult.styles';
import buttonImg from '../../../assets/catalogButton.svg';
import BoardResultPlantRecommend from './recommend/BoardResultPlantRecommend';
import BoardResultModal from './BoardResultModal';
import { useModal } from '../../../hook/useModal';

const BoardResult = () => {
    // useModal hook
    const { open, modalOpen, modalClose } = useModal();
    // 첫 렌더링때 3초간 모달 렌더링
    useEffect(() => {
        modalOpen();
        const timeOut = setTimeout(() => {
            modalClose();
        }, 3000);
        return () => clearTimeout(timeOut);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // useQuery로 서버에서 BoardTest 페이지 데이터 받기

    return (
        <St.BoardResultWrapper>
            <h2>반려 식물 추천</h2>
            <St.BoardResultHeadContent>
                공기 정화 식물은 배출 물질을 제거하고
                <br />
                실내 공기를 개선하여 건강에 도움을 줍니다
            </St.BoardResultHeadContent>

            <St.BoardResultMainLayout>
                <div
                    style={{
                        marginTop: '20px',
                        marginBottom: '15px',
                        fontSize: '10px',
                        fontWeight: '600',
                        lineHeight: '9.55px',
                        color: 'rgba(125, 125, 125, 1)',
                    }}
                >
                    Catalog
                </div>
                <div>
                    <St.BoardResultMainCatalogButton>
                        <img style={{ marginLeft: '10px', marginRight: '10px' }} src={buttonImg} />
                        상쾌한
                    </St.BoardResultMainCatalogButton>
                </div>
                {/* 추천 식물 슬라이드 */}
                <St.BoardResultMainSliderLayout>
                    <BoardResultPlantRecommend />
                </St.BoardResultMainSliderLayout>
            </St.BoardResultMainLayout>
            {open && <BoardResultModal />}
            <St.BoardResultSaveButton>저장</St.BoardResultSaveButton>
        </St.BoardResultWrapper>
    );
};

export default BoardResult;
