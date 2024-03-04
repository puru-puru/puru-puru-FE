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
    likeCount: number;
}

export interface CommunityData {
    data: CommunityPost[];
    loginUser: string;
}
