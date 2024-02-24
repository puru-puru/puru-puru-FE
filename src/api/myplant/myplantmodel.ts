export interface SearchApiResponse {
    data: {
        plantsId: number;
        plantName: string;
        type: string;
        image: string;
        content: string;
        tag: string;
    };
}