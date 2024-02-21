// 메인 페이지
export interface Content {
    content: string;
}

// interface MissionData {
//     content: string;
// }

export interface PlantRecommendData extends Content {
    plantsId: number;
    plantName: string;
    type: string;
    image: string;
    tag: string;
}

export interface MainPageData {
    data: {
        loginUser: string;
        mission: Content[];
        plant: PlantRecommendData[];
    };
}
