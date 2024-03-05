import Slider from 'react-slick';
import '../../../../components/slickcss/slick.css';
import '../../../../components/slickcss/slick-theme.css';
import * as St from './Recommend.Styles';
// import plantType from '../../../../assets/planttype.svg';
import tagImgURL from '../../boardtestpage/Test.json';

const BoardResultPlantRecommend = ({ plantData, tagQuote, boardId }) => {
    // props로 받은 데이터
    const myPlant = plantData;
    // console.log('myplant => ', myPlant);
    // catalog tag split
    const splitWord = myPlant.map((item: any) => {
        return item.tag.split('#').filter((word: any) => word !== '');
    });
    // console.log('splitWord =>', splitWord); // ['다채로운 ', '낭만적인 ', '수수한']'

    // tag img URL
    const tagImg = tagImgURL.map((img) => img.keywordImgURL);
    // console.log('tagImg => ', tagImg);
    // console.log('boardId tagImg => ', tagImg[boardId - 1]);

    // 데이터가 한개일때 슬라이드 하나만 보여주기
    if (myPlant.length === 1) {
        const item = myPlant[0];
        return <div>{item}</div>;
    }

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            {myPlant.map((item: any, index: number) => {
                return (
                    <St.BoardResultMainLayout key={item.plantsId}>
                        <St.BoardResultMainKeyWord>Key Word</St.BoardResultMainKeyWord>
                        <div style={{ display: 'flex', gap: '5px' }}>
                            {splitWord[index].map((tag: string, index: number) => {
                                return (
                                    <St.BoardResultMainKeyWordTag key={index}>
                                        <St.BoardResultMainKeyWordTagImg
                                            src={tagImg[boardId - 1]}
                                        />
                                        {tag}
                                    </St.BoardResultMainKeyWordTag>
                                );
                            })}
                        </div>
                        <St.BoardResultMainTagQuote>{tagQuote}</St.BoardResultMainTagQuote>
                        <St.RecommendLayout>
                            <St.RecommendPlantImg src={item.image} alt={item.plantName} />
                            <St.RecommendPlantHeadLayout>
                                <St.RecommendPlantTitle>{item.plantName}</St.RecommendPlantTitle>
                                {/* 
                                <St.RecommendPlantTypeLayout>
                                    <St.RecommendPlantTypeImg src={plantType} />
                                    {item.type}
                                </St.RecommendPlantTypeLayout> */}
                            </St.RecommendPlantHeadLayout>

                            <St.RecommendContentLayout>{item.content}</St.RecommendContentLayout>
                        </St.RecommendLayout>
                    </St.BoardResultMainLayout>
                );
            })}
        </Slider>
    );
};

export default BoardResultPlantRecommend;
