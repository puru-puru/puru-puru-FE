import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsStar } from 'react-icons/bs';
import { IoHeartOutline } from 'react-icons/io5';
import { PlantRecommendData } from '../../../api/main/model';
import * as St from './PlantRecommend.styles';

const PlantRecommend = ({ data }: { data?: PlantRecommendData[] }) => {
    // console.log('plant data 확인 =>', props);
    const plant = data;
    // 캐러셀 라이브러리 세팅
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        cssEase: 'linear',
    };

    return (
        <Slider {...settings}>
            {plant?.map((item) => {
                return (
                    <div key={item.plantsId}>
                        <St.PlantCardLayout>
                            <St.PlantCardImg src={item.image} />
                            <St.PlantCardName>{item.plantName}</St.PlantCardName>
                            <St.PlantCardContent>{item.content}</St.PlantCardContent>
                            <St.PlantCardButtonLayout>
                                <St.PlantCardButtonStyle>
                                    <BsStar />
                                </St.PlantCardButtonStyle>
                                <St.PlantCardButtonStyle>
                                    <IoHeartOutline />
                                </St.PlantCardButtonStyle>
                            </St.PlantCardButtonLayout>
                        </St.PlantCardLayout>
                    </div>
                );
            })}
        </Slider>
    );
};

export default PlantRecommend;
