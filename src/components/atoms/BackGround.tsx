import styled from 'styled-components';

const BackGroundText = styled.div`
    width: 35%;
    img {
        width: 100%;
    }
    @media (max-width: 1080px) {
        display: none;
    }
`;
const LeafContainer = styled.div`
    position: fixed;
    display: none;
    @media screen and (width: 1920px) {
        display: block;
    }
`;

const Leaf1 = styled.img`
    position: fixed;
    top: 0;
    left: 0;
`;

const Leaf2 = styled.img`
    position: fixed;
    top: 10%;
    right: 43%;
`;

const Leaf3 = styled.img`
    position: fixed;
    bottom: 15%;
    right: 10%;
`;

const RightImg = styled.img`
    position: fixed;
    bottom: 0;
    right: 0;
`;

const LeftImg = styled.img`
    position: fixed;
    bottom: 0;
    left: 0;
`;
const BackGround = () => {
    return (
        <>
            <BackGroundText>
                    <img
                        src="/BackGroundText.webp"
                        alt="BackGroundText"
                        style={{ width: '100%', height: 'auto' }}
                        loading="lazy"
                    />
            </BackGroundText>
            <LeafContainer>
                <Leaf1 src="/leaf_1.svg" alt="leaf_1" loading="lazy"/>
                <Leaf2 src="/leaf_2.svg" alt="leaf_2" loading="lazy"/>
                <Leaf3 src="/leaf_3.svg" alt="leaf_3" loading="lazy"/>
                <RightImg src="/RightImg.svg" alt="RightImg"loading="lazy" />
                <LeftImg src="/LeftImg.svg" alt="LeftImg"loading="lazy" />
            </LeafContainer>
        </>
    );
};

export default BackGround;
