import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Footer';
import Navbar from './Navbar';

const LayoutContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
`;

const LayoutContent = styled.div`
    width: 360px;
    height: 728px;
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
            <LayoutContainer>
                <LayoutContent>
                    {(isMain || isMyPlant || isMyprofile || isCommunity) && <Navbar />}
                    <Outlet />
                    {(isMain || isMyPlant || isMyprofile || isCommunity) && <Footer />}
                </LayoutContent>
            </LayoutContainer>
        </>
    );
};

export default Layout;
