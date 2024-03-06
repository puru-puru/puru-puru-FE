export interface PostData {
    boardId: number;
    title: string;
    image: string | null;
    content: string;
    createdAt: string;
    author: {
        userId: number;
        nickname: string | null;
    };
}

export interface MyPostPageData {
    data: {
        data: PostData[];
        loginUser: string;
        totalLikesCount: number;
        totalCommentsCount: number;
    };
}
