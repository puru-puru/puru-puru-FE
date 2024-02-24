import Slider from 'react-slick';
import '../../../../components/slickcss/slick.css';
import '../../../../components/slickcss/slick-theme.css';
// import data from '../Result.json';
import * as St from './Recommend.Styles';
import basket from '../../../../assets/basket.svg';
import buttonImg from '../../../../assets/catalogButton.svg';
import plantType from '../../../../assets/planttype.svg';

const BoardResultPlantRecommend = ({ plantData }) => {
    // props로 받은 데이터
    const myPlant = plantData;
    // catalog tag split
    const splitWord = myPlant.map((item: any) => {
        return item.tag.split('#').filter((word: any) => word !== '');
    });
    // console.log('splitWord =>', splitWord); // ['다채로운 ', '낭만적인 ', '수수한']

    // 데이터가 한개일때 슬라이드 하나만 보여주기
    if (myPlant.length === 1) {
        const item = myPlant[0];
        return (
            <div key={item.plantsId}>
                <div
                    style={{
                        marginTop: '20px',
                        marginBottom: '15px',
                        fontSize: '10px',
                        fontWeight: '600',
                        lineHeight: '9.55px',
                        color: 'rgba(125, 125, 125, 1)',
                    }}
                >
                    Catalog
                </div>
                <div style={{ display: 'flex', gap: '5px' }}>
                    {splitWord[0].map((tag: string, index: number) => {
                        return (
                            <St.BoardResultMainCatalog key={index}>
                                <img
                                    style={{
                                        marginLeft: '10px',
                                        marginRight: '10px',
                                    }}
                                    src={buttonImg}
                                />
                                {tag}
                            </St.BoardResultMainCatalog>
                        );
                    })}
                </div>

                <St.RecommendLayout>
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
                            <St.RecommendSaveButton>
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
                            </St.RecommendSaveButton>
                        </St.RecommendImageButtonLayout>
                    </St.RecommendImageLayout>
                    <St.RecommendTitleLayout>{item.plantName}</St.RecommendTitleLayout>
                    <St.RecommendPlantTypeLayout>
                        <img
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '20px',
                                height: '25px',
                            }}
                            src={plantType}
                        />
                        {item.type}
                    </St.RecommendPlantTypeLayout>
                    <St.RecommendContentLayout>{item.content}</St.RecommendContentLayout>
                </St.RecommendLayout>
            </div>
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            {myPlant.map((item: any, index: number) => {
                return (
                    <div key={item.plantsId}>
                        <div
                            style={{
                                marginTop: '20px',
                                marginBottom: '15px',
                                fontSize: '10px',
                                fontWeight: '600',
                                lineHeight: '9.55px',
                                color: 'rgba(125, 125, 125, 1)',
                            }}
                        >
                            Catalog
                        </div>
                        <div style={{ display: 'flex', gap: '5px' }}>
                            {splitWord[index].map((tag: string, index: number) => {
                                return (
                                    <St.BoardResultMainCatalog key={index}>
                                        <img
                                            style={{
                                                marginLeft: '10px',
                                                marginRight: '10px',
                                            }}
                                            src={buttonImg}
                                        />
                                        {tag}
                                    </St.BoardResultMainCatalog>
                                );
                            })}
                        </div>

                        <St.RecommendLayout>
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
                                    <St.RecommendSaveButton>
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
                                    </St.RecommendSaveButton>
                                </St.RecommendImageButtonLayout>
                            </St.RecommendImageLayout>
                            <St.RecommendTitleLayout>{item.plantName}</St.RecommendTitleLayout>
                            <St.RecommendPlantTypeLayout>
                                <img
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '20px',
                                        height: '25px',
                                    }}
                                    src={plantType}
                                />
                                {item.type}
                            </St.RecommendPlantTypeLayout>
                            <St.RecommendContentLayout>{item.content}</St.RecommendContentLayout>
                        </St.RecommendLayout>
                    </div>
                );
            })}
        </Slider>
    );
};

export default BoardResultPlantRecommend;
