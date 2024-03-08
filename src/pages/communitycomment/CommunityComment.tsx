import { useNavigate } from 'react-router-dom';
import * as St from './CommunityComment.styles';
import backButtonImg from '../../assets/backbutton.svg';
import { useState } from 'react';

const CommunityComment = () => {
    const navigate = useNavigate();
    const [isInputClicked, setIsInputClicked] = useState(false);
    const backButtonHandler = () => {
        navigate('/community');
    };
    return (
        <>
            <St.CommentPostContainer>
                <St.CommentPostHeadWrapper1>
                    <St.DetailHeadWrapper2>
                        <St.CommentPostHeadLayout>
                            <St.BackButtonLayout>
                                <St.BackButton onClick={backButtonHandler}>
                                    <St.BackButtonImg src={backButtonImg} />
                                </St.BackButton>
                            </St.BackButtonLayout>
                            <St.CommentPostContentLayout>
                                <St.CommentPostContent>댓글 작성</St.CommentPostContent>
                            </St.CommentPostContentLayout>
                        </St.CommentPostHeadLayout>
                    </St.DetailHeadWrapper2>
                </St.CommentPostHeadWrapper1>
                <St.CommentPostInputLayout>
                    <St.CommentPostTextTextarea
                        onFocus={() => setIsInputClicked(true)}
                        onBlur={() => setIsInputClicked(false)}
                        placeholder={isInputClicked ? '' : '댓글을 입력해주세요'}
                    />
                </St.CommentPostInputLayout>

                <St.CommentPostButtonLayout>
                    <St.CommentPostButton>
                        <St.CommentPostButtonContent>등록</St.CommentPostButtonContent>
                    </St.CommentPostButton>
                </St.CommentPostButtonLayout>
            </St.CommentPostContainer>
        </>
    );
};

export default CommunityComment;
