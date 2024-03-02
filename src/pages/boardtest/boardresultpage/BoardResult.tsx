// import { useEffect, useState } from 'react';
import * as St from './BoardResult.styles';
import BoardResultPlantRecommend from './recommend/BoardResultPlantRecommend';
// import BoardResultModal from './BoardResultModal';
// import { useModal } from '../../../hook/useModal';
import { useLocation, useNavigate } from 'react-router-dom';
// import { axios } from '../../../api/http';
import { useGetBoardTestPageData } from '../../../api/boardtest/BoardTest';

const BoardResult = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // BoardTest로 부터 받아온 요소 Id
    const { boardId, tagImg } = location.state;
    console.log('tageImg =>', tagImg);
    // 서버로 부터 받아온 데이터 값
    const pageData = useGetBoardTestPageData({ boardId });
    // console.log(pageData.data?.data);
    // console.log(pageData.data?.data.selectQuotes);
    // console.log(pageData.data?.data.slicedDB);

    // useModal hook
    // const { open, modalOpen, modalClose } = useModal();
    // 첫 렌더링때 3초간 모달 렌더링
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(`api/test-result/${boardId}`);
    //             console.log('response => ', response);
    //             // setTagData(response.data);
    //         } catch (error) {
    //             console.error('Error =>', error);
    //         }
    //     };
    //     fetchData();
    //     modalOpen();
    //     const timeOut = setTimeout(() => {
    //         modalClose();
    //     }, 3000);
    //     return () => clearTimeout(timeOut);
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);
    // console.log('tagData => ', tagData);

    const handleMainButtonClick = () => {
        navigate('/mainpage');
    };

    return (
        <St.BoardResultWrapper>
            <St.BoardResultHeadWrapper>
                <St.BoardResultHeadContentWrapper>
                    <St.BoardResultHeadContent1></St.BoardResultHeadContent1>
                    <St.BoardResultHeadContent2Layout>
                        <St.BoardResultHeadContent2>반려 식물 추천</St.BoardResultHeadContent2>
                    </St.BoardResultHeadContent2Layout>
                </St.BoardResultHeadContentWrapper>
            </St.BoardResultHeadWrapper>

            <St.BoardResultMainLayout>
                {/* 추천 식물 슬라이드 */}
                <St.BoardResultMainSliderLayout>
                    <BoardResultPlantRecommend
                        plantData={pageData.data?.data.slicedDB}
                        tagQuote={pageData.data?.data.selectQuotes}
                    />
                </St.BoardResultMainSliderLayout>
            </St.BoardResultMainLayout>

            {/* {open && <BoardResultModal />} */}
            <St.BoardResultSaveButton onClick={handleMainButtonClick}>
                메인으로
            </St.BoardResultSaveButton>
        </St.BoardResultWrapper>
    );
};

export default BoardResult;
