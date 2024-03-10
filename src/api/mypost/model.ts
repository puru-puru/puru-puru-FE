interface StringData {
    content: string;
    createdAt: string;
}

// 내가 작성한 글 조회
export interface PostData extends StringData {
    boardId: number;
    title: string;
    image: string | null;
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

// 내가 작성한 댓글 조회
export interface CommentData extends StringData {
    user: {
        userId: number;
        nickname: null;
    };
}

export interface MyCommentPageData {
    data: CommentData[];
}
