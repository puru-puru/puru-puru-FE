import React, { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Footer';
import Navbar from './Navbar';
import BackGround from './BackGround';
import { colors } from '../../styles/colors';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
const LayoutContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('/BackGround.webp');
    object-fit: cover;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
`;

const LayoutContent = styled.div`
    width: 360px;
    height: 728px;
    border-radius: 20px;
    overflow-y: hidden;
    position: relative;
    border: 1px solid gray;
    box-sizing: border-box;
`;

const Layout: React.FC = () => {
    const { pathname } = useLocation();

    const isMyPlant = pathname === '/myplant';
    const isMain = pathname === '/mainpage';
    const isMyprofile = pathname === '/myprofile';
    const isCommunity = pathname === '/community';

    return (
        <>
            <LayoutContainer>
                <BackGround />
                <LayoutContent style={{ backgroundColor: colors.white }}>
                    {(isMain || isMyPlant || isMyprofile || isCommunity) && <Navbar />}
                    <Suspense fallback={<LoadingSpinner />}>
                        <Outlet />
                    </Suspense>
                    {(isMain || isMyPlant || isMyprofile || isCommunity) && <Footer />}
                </LayoutContent>
            </LayoutContainer>
        </>
    );
};

export default Layout;
