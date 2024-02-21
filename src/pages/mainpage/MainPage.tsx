import * as St from './MainPage.styles';
import TodayMission from './todaymission/TodayMission';
import PlantRecommend from './plantrecommend/PlantRecommend';
import { useGetMainPageData } from '../../api/main/Main';

const MainPage = () => {
    // 메인 페이지 미션, 추천식물 데이터 useQuery
    const { data } = useGetMainPageData();
    // console.log('메인 페이지 데이터 확인 =>', data);
    return (
        <St.MainWrapper>
            {/* 오늘의 미션 */}
            <div style={{ marginTop: '-20px' }}>
                <h4>{data?.data.loginUser}님의 추천미션</h4>
                <div style={{ marginBottom: '40px' }}>
                    <TodayMission props={data?.data.mission} />
                </div>
            </div>

            {/* 추천 식물 */}
            <div style={{ marginTop: '-25px' }}>
                <h4>이 달의 추천 식물</h4>
                <div style={{ maxWidth: '360px' }}>
                    <PlantRecommend data={data?.data.plant} />
                </div>
            </div>
        </St.MainWrapper>
    );
};

export default MainPage;
