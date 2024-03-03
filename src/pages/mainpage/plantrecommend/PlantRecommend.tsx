import Slider from 'react-slick';
import './recommendslick/slick.css';
import './recommendslick/slick-theme.css';
import { PlantRecommendData } from '../../../api/main/model';
import * as St from './PlantRecommend.styles';

const PlantRecommend = ({ data }: { data?: PlantRecommendData[] }) => {
    // console.log('plant data 확인 =>', props);
    const plant = data;
    // 캐러셀 라이브러리 세팅
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        cssEase: 'linear',
        arrows: false,
    };

    return (
        <Slider {...settings}>
            {plant?.map((item) => {
                return (
                    <div key={item.plantsId}>
                        <St.PlantCardLayout>
                            <St.PlantCardImg src={item.image} alt={item.plantName} />
                            <St.PlantCardName>{item.plantName}</St.PlantCardName>
                            <St.PlantCardContent>{item.content}</St.PlantCardContent>
                        </St.PlantCardLayout>
                    </div>
                );
            })}
        </Slider>
    );
};

export default PlantRecommend;
