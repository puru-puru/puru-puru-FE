export interface PetPlantFormData {
    name: string;
    plantAt: string;
    image: File | null;
}

export interface SelectedCardProps {
    selectedCard: number | undefined;
}

// 반려식물 페이지
interface UserPlant {
    userplantId: number;
    Plant: {
        plantName: string;
        type: string;
        content: string;
    };
}

interface SavedTemplelates {
    id: number;
    answer: string;
    Templelate: {
        question: string;
    };
}

export interface DiaryEntry {
    diaryId: number;
    image: string;
    name: string;
    plantAt: string;
    UserPlant: UserPlant;
    SavedTemplelates: SavedTemplelates[];
}

export interface newPlantData {
    plantName: string;
    type: string;
    content: string;
}

export interface Plants extends newPlantData {
    plantsId: number;
    image: string;
    tag: string;
}
