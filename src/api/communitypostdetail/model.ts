export interface Comments {
    id: number;
    content: string;
    createdAt: string;
    user: {
        nickname: string;
    };
}

export interface CommunityDetailData {
    data: {
        board: {
            boardId: number;
            title: string;
            image: string;
            content: string;
            createdAt: string;
            updatedAt: string;
            userId: number;
            likeCount: number;
            author: {
                nickname: string;
            };
            Comments: Comments[];
        };
    };
}
