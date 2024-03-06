import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 300px;
    height: 42px;
    display: flex;
    justify-content: flex-start;
`;

export const HeaderContent = styled.div`
    font-size: 24px;
    font-weight: 700;
`;

export const PostProfileBox = styled.div`
    width: 330px;
    height: 60px;
    background-color: #f5faf1;
    display: flex;
    padding: 5px;
    border-radius: 10px;
`;

export const PostProfileImgBox = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 100px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`;

export const PostProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PostProfileTitleWrapper = styled.div`
    display: flex;
`;

export const PostProfileTitle = styled.p`
    width: 163px;
    height: 10px;
    font-weight: 700;
    font-size: 10px;
    line-height: 11.93px;
`;

export const PostProfileMyPostWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 250px;
    height: 25px;
    margin: -5px -0px 0px 15px;
`;

export const PostProfileMyPostCountWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PostProfileMyPostCount = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    font-weight: 600;
    line-height: 11.94px;
    color: #989898;
`;

export const PostProfileMyPostCountNumber = styled.div`
    font-size: 10px;
    font-weight: 600;
    line-height: 11.93px;
    color: #ff655b4d;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PostProfileButton = styled.button`
    width: 80px;
    height: 25px;
    font-size: 11px;
    font-weight: 700;
    line-height: 12.18px;
    color: #72a474;
    padding: 0px;
`;
