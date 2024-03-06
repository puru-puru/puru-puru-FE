import * as St from './MainPage.styles';
import TodayMission from './todaymission/TodayMission';
import PlantRecommend from './plantrecommend/PlantRecommend';
import { useGetMainPageData } from '../../api/main/Main';
import missionBell from '../../assets/missionbell.svg';
import plantRecommendImg from '../../assets/plantrecommend.svg';

const MainPage = () => {
    // 메인 페이지 미션, 추천식물 데이터 useQuery
    const { data } = useGetMainPageData();
    console.log('메인 페이지 데이터 확인 =>', data);
    return (
        <St.MainWrapper>
            {/* 오늘의 미션 */}
            <St.MainMissionTitleWrapper style={{ marginTop: '-10px' }}>
                <St.MainMissionTitle>
                    <St.MainMissionImg src={missionBell} />
                    {data?.data.loginUser}님의 추천 미션
                </St.MainMissionTitle>
            </St.MainMissionTitleWrapper>
            <div style={{ marginBottom: '40px' }}>
                <TodayMission props={data?.data.mission} />
            </div>

            {/* 추천 식물 */}
            <St.MainPlantRecommendTitleWrapper>
                <St.MainPlantRecommendTitle>
                    <St.MainPlantRecommendImg src={plantRecommendImg} />
                    이달의 추천 식물
                </St.MainPlantRecommendTitle>
            </St.MainPlantRecommendTitleWrapper>
            <div>
                <PlantRecommend data={data?.data.plant} />
            </div>
        </St.MainWrapper>
    );
};

export default MainPage;
