import Slider from 'react-slick';
import './missionslick/slick.css';
import './missionslick/slick-theme.css';
import { Content } from '../../../api/main/model';
import * as St from './TodayMission.styles';
import missionBanner from '../../../assets/missionbanner.svg';
import missionLogo from '../../../assets/missionplant.svg';

const TodayMission = ({ props }: { props?: Content[] }) => {
    console.log(props);
    const mission = props;
    // 캐러셀 라이브러리 세팅
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div style={{ overflow: 'visible' }}>
            <Slider {...settings}>
                {mission?.map((item, index) => {
                    return (
                        <div key={index}>
                            <div style={{ padding: '15px 10px 10px 0px' }}>
                                <St.MissionCardBanner src={missionBanner} />
                                <St.MissionCardLayout>
                                    <St.MissionCardContent>{item.content}</St.MissionCardContent>
                                    <St.MissionCardLogoLayout>
                                        <St.MissionCardLogo src={missionLogo} />
                                    </St.MissionCardLogoLayout>
                                </St.MissionCardLayout>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default TodayMission;
