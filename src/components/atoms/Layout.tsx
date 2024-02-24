import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Footer';
import Navbar from './Navbar';
import BackGround from './BackGround';

const LayoutContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LayoutContent = styled.div`
    width: 360px;
    height: 728px;
    border-radius: 20px;
    overflow-y: auto;
    margin: 0;
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
            <LayoutContainer style={{ backgroundColor: '#DAEACA' }}>
                <BackGround/>
                <LayoutContent style={{ backgroundColor: '#fff' }}>
                    {(isMain || isMyPlant || isMyprofile || isCommunity) && <Navbar />}
                    <Outlet />
                    {(isMain || isMyPlant || isMyprofile || isCommunity) && <Footer />}
                </LayoutContent>
            </LayoutContainer>
        </>
    );
};

export default Layout;
