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
    diaryId: number ;
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

export interface newPlantData {
    plantName: string;
    type: string;
    content: string;
}

export interface Plants extends newPlantData{
    plantsId: number;
    image: string;
    tag: string;
}

// 커뮤니티 페이지

export interface CommunityFormData {
    title: string;
    content: string;
    image: File | null;
}

// 게시글의 타입 정의
interface Author {
    nickname: string;
}

export interface CommunityPost {
    boardId: number;
    title: string;
    image: string;
    content: string;
    createdAt: string;
    author: Author;
}

export interface CommunityData {
    data: CommunityPost[]; 
    loginUser: string; 
}