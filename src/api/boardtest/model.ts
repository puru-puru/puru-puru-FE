export interface SlicedDB {
    content: string;
    image: string;
    plantName: string;
    plantsId: number;
    tag: string;
    type: string;
}

export interface BoardTestData {
    data: {
        selectQuotes: string;
        slicedDB: SlicedDB[];
    };
}
