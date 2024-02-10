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
    height: 800px;
    overflow-y: auto;
    margin: 0;
    position: relative;
    /* padding: 20px; */
    border: 1px solid gray;
    box-sizing: border-box;
`;

const Layout: React.FC = () => {
    const { pathname } = useLocation();
    // console.log('pathname => ', pathname);
    const isOnboarding = pathname === '/';
    const isName = pathname === '/name';
    const isMain = pathname === '/mainpage';
    return (
        <>
            <LayoutContainer>
                <LayoutContent>
                    {isMain && <Navbar />}
                    <Outlet />
                    {(!isOnboarding || isName) && <Footer />}
                </LayoutContent>
            </LayoutContainer>
        </>
    );
};

export default Layout;
