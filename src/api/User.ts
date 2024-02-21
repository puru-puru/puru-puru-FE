export interface User {
    email: string;
    password: string;
}

export interface MyProfile {
    data: {
        email: string;
        nickname: string;
        userId: number;
    };
}

export interface UserWithConfirmPassword extends User {
    confirmPassword: string;
}

export interface ApiResponse {
    status: number;
    data: any;
    message: string;
    token?: string;
    // 기타 필요한 속성들...
}
export interface PetPlantFormData {
    name: string;
    plantAt: string;
    image: File | null;
}

export interface SelectedCardProps {
    selectedCard: number | undefined;
}

export interface SearchInProgressProps {
    searchCompleted: boolean;
    setSearchCompleted: React.Dispatch<React.SetStateAction<boolean>>;
    searchItem: string;
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

export interface SearchApiResponse {
    data?: any;
    plantsId: number;
    plantName: string;
    type: string;
    image: string;
    content: string;
    tag: string;
}

export interface PlantData {
    plantName: string;
    type: string;
    content: string;
}
