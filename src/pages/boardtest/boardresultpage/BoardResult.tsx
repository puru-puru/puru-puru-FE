import { useEffect, useState } from 'react';
import * as St from './BoardResult.styles';
import BoardResultPlantRecommend from './recommend/BoardResultPlantRecommend';
import BoardResultModal from './BoardResultModal';
import { useModal } from '../../../hook/useModal';
import { useLocation } from 'react-router-dom';
import { axios } from '../../../api/http';

const BoardResult = () => {
    const location = useLocation();
    // BoardTest로 부터 받아온 요소 Id
    const { boardId } = location.state;
    // 서버로 받은 data state
    const [tagData, setTagData] = useState<any[]>([]);
    // useModal hook
    const { open, modalOpen, modalClose } = useModal();
    // 첫 렌더링때 3초간 모달 렌더링
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`api/test-result/${boardId}`);
                // console.log('response => ', response.data.data);
                setTagData(response.data.data);
            } catch (error) {
                console.error('Error =>', error);
            }
        };
        fetchData();
        modalOpen();
        const timeOut = setTimeout(() => {
            modalClose();
        }, 3000);
        return () => clearTimeout(timeOut);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log('tagData => ', tagData);

    return (
        <St.BoardResultWrapper>
            <h2>반려 식물 추천</h2>
            <St.BoardResultHeadContent>
                공기 정화 식물은 배출 물질을 제거하고
                <br />
                실내 공기를 개선하여 건강에 도움을 줍니다
            </St.BoardResultHeadContent>
            <St.BoardResultMainLayout>
                {/* 추천 식물 슬라이드 */}
                <St.BoardResultMainSliderLayout>
                    <BoardResultPlantRecommend plantData={tagData} />
                </St.BoardResultMainSliderLayout>
            </St.BoardResultMainLayout>

            {open && <BoardResultModal />}
            <St.BoardResultSaveButton>저장</St.BoardResultSaveButton>
        </St.BoardResultWrapper>
    );
};

export default BoardResult;
