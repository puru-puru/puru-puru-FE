import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Content } from '../../../api/main/model';
import * as St from './TodayMission.styles';

const TodayMission = ({ props }: { props?: Content[] }) => {
    console.log(props);
    const mission = props;
    // 캐러셀 라이브러리 세팅
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {mission?.map((item, index) => {
                return (
                    <div key={index}>
                        <St.MissionCardLayout>
                            <St.MissionCardContent>{item.content}</St.MissionCardContent>
                        </St.MissionCardLayout>
                    </div>
                );
            })}
        </Slider>
    );
};

export default TodayMission;
