import {
    RecommendedSearchWords,
    RecommendedSearchWordsContainer,
    RecommendedSearchWordsText,
} from './RecommendedSearchWords.styles';

const RecommendedSearchWordsSection = () => {
    return (
        <div
            style={{
                marginTop: '30px',
                borderTop: '2px solid rgba(128, 128, 128, 0.2)',
            }}
        >
            <RecommendedSearchWordsText>
                추천 검색어
            </RecommendedSearchWordsText>
            <RecommendedSearchWordsContainer>
                {[
                    '관엽식물',
                    '스투키',
                    '몬스테라',
                    '동백나무',
                    '히아신스',
                    '틸란드시아',
                    '필로덴드론',
                ].map((recommendation, index) => (
                    <RecommendedSearchWords key={index}>
                        {recommendation}
                    </RecommendedSearchWords>
                ))}
            </RecommendedSearchWordsContainer>
        </div>
    );
};

export default RecommendedSearchWordsSection;
