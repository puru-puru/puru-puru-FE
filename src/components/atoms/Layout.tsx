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
    height: 728px;
    overflow-y: auto;
    margin: 0;
    position: relative;
    /* padding: 20px; */
    border: 1px solid gray;
    box-sizing: border-box;
`;
  

const Layout: React.FC = () => {
    const { pathname } = useLocation();

    const isMyPlant = pathname === '/myplant';
    return (
        <>
            <LayoutContainer>
                <LayoutpContent>
                    <Outlet/>
                    { isMyPlant && <Footer />}
                </LayoutpContent>
            </LayoutContainer>
        </>
    );
};

export default Layout;
