import Slider from 'react-slick';
import '../../../../components/slickcss/slick.css';
import '../../../../components/slickcss/slick-theme.css';
// import data from '../Result.json';
import * as St from './Recommend.Styles';
import basket from '../../../../assets/basket.svg';

const BoardResultPlantRecommend = ({ plantData }) => {
    const myPlant = plantData;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            {myPlant.map((item: any) => {
                return (
                    <St.RecommendLayout key={item.plantsId}>
                        <St.RecommendImageLayout>
                            <img
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '229px',
                                    height: '150px',
                                    borderRadius: '20px',
                                }}
                                src={item.image}
                            />
                            <St.RecommendImageButtonLayout>
                                <St.RecommendImageButton>
                                    <img
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '19.2px',
                                            height: '19.2px',
                                        }}
                                        src={basket}
                                    />
                                </St.RecommendImageButton>
                            </St.RecommendImageButtonLayout>
                        </St.RecommendImageLayout>
                        <St.RecommendTitleLayout>{item.plantName}</St.RecommendTitleLayout>
                        <St.RecommendContentLayout>{item.content}</St.RecommendContentLayout>
                    </St.RecommendLayout>
                );
            })}
        </Slider>
    );
};

export default BoardResultPlantRecommend;
