import React, { useEffect, useState } from 'react';
import * as St from './MainPage.styles';
import TodayMission from './todaymission/TodayMission';
import PlantRecommend from './plantrecommend/PlantRecommend';
import { axios, getnameApi } from '../../api/http';
// import { useNavigate } from 'react-router-dom';
const MainPage: React.FC = () => {
    // const navigate = useNavigate();
    // 유저 닉네임 state
    const [name, setName] = useState('');
    // 서버로 부터 유저 닉네임 조회
    useEffect(() => {
        const nameData = async () => {
            try {
                const response = await getnameApi.get('api/users');
                // console.log('response 데이터 확인 => ', response);
                setName(response.data.nickname);
            } catch (error: any) {
                if (error.response) {
                    // console.log('error 값 확인하기 =>', error);
                    const errorStatus = error.response.status;
                    const errorMessage = error.response.data.errorMessage;
                    if (errorStatus === 401) {
                        alert(errorMessage);
                    }
                }
            }
        };
        const missionData = async () => {
            try {
                const response = await axios.get('/api/main');
                console.log('response 데이터 확인 => ', response.data);
                // setData(response.data);
            } catch (error: any) {
                if (error.response) {
                    // console.log('error 값 확인하기 =>', error);
                    const errorStatus = error.response.status;
                    const errorMessage = error.response.data.errorMessage;
                    if (errorStatus === 401) {
                        alert(errorMessage);
                    }
                }
            }
        };
        nameData();
        missionData();
    }, []);
    return (
        <St.MainWrapper>
            {/* 오늘의 미션 */}
            <div style={{ marginTop: '-20px' }}>
                <h4>{name}님의 추천미션</h4>
                <div style={{ marginBottom: '40px' }}>
                    <TodayMission />
                </div>
            </div>

            {/* 추천 식물 */}
            <div style={{ marginTop: '-25px' }}>
                <h4>이 달의 추천 식물</h4>
                <div style={{ maxWidth: '360px' }}>
                    <PlantRecommend />
                </div>
            </div>
        </St.MainWrapper>
    );
};

export default MainPage;
