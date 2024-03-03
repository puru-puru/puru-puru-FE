import { PagesButton, PagesContainer } from './PageNation';
import { HomeRecent } from './PlantCard.styles';
import RecommendedSearchWordsSection from './searchwords/RecommendedSearchWords';
import { FindOtherPlantsButton, FindOtherPlantsContainer, SpinnerImage } from './PlantDisplayCard.styles';
import Spinner from '/Spin.gif';

const PlantDisplay = ({ loading, plants, selectedCard, currentPage, itemsPerPage, totalPages, handleNextStep, goToPreviousPage, goToNextPage,onCardClick }) => {
    return (
        <>
        <HomeRecent>
            {loading ? (
                <SpinnerImage src={Spinner} alt="loding" />
            ) : (
                <>
                    {!plants.length ? (
                        <RecommendedSearchWordsSection />
                    ) : (
                        <>
                            <div>
                                <FindOtherPlantsContainer>
                                    <div></div>
                                    <FindOtherPlantsButton onClick={handleNextStep}>
                                        관련 식물이 없어요
                                    </FindOtherPlantsButton>
                                </FindOtherPlantsContainer>

                                <div className="card-group">
                                    {plants
                                        .slice(
                                            (currentPage - 1) * itemsPerPage,
                                            currentPage * itemsPerPage,
                                        )
                                        .map((plant) => (
                                            <div
                                                className={`card ${
                                                    plant.plantsId === selectedCard
                                                        ? 'selected'
                                                        : ''
                                                }`}
                                                key={plant.plantsId}
                                                onClick={() => onCardClick(plant.plantsId)}
                                            >
                                                <img
                                                    src={plant.image}
                                                    className="card-img-top"
                                                    alt="..."
                                                />
                                                <div className="card-body">
                                                    <p className="card-title">{plant.plantName}</p>
                                                    <p className="card-text">{plant.type}</p>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </>
                    )}
                </>
            )}
        </HomeRecent>
        {plants.length !== 0 && (
            <PagesContainer>
                <PagesButton onClick={goToPreviousPage} disabled={currentPage === 1}>
                    <img src="./ArrowLeft.svg" alt="ArrowLeft" />
                </PagesButton>
                {currentPage} / {totalPages}
                <PagesButton onClick={goToNextPage} disabled={currentPage === totalPages}>
                    <img src="./ArrowRight.svg" alt="ArrowLeft" />
                </PagesButton>
            </PagesContainer>
        )}
        </>
    );
};

export default PlantDisplay;
