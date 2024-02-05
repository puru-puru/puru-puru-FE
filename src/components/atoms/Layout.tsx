import React from 'react';
import { Outlet, useLocation  } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Footer';

const LayoutContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
`;

const LayoutpContent = styled.div`
    width: 360px;
    height: 800px;
    overflow-y: auto;
    margin: 0;
    /* padding: 20px; */
    border: 1px solid gray;
    box-sizing: border-box;
`;

const Layout: React.FC = () => {
    const { pathname } = useLocation();

    const isOnboading = pathname === '/';

    return (
        <>
            <LayoutContainer>
                <LayoutpContent>
                    <Outlet/>
                    { !isOnboading && <Footer />}
                </LayoutpContent>
            </LayoutContainer>
        </>
    );
};

export default Layout;
