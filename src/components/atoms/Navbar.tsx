import React from 'react';
import { CSSProperties } from 'styled-components';
import home from '../../assets/home.svg';
import search from '../../assets/search.svg';
import store from '../../assets/storefront.svg';

const Navbar: React.FC = () => {
    const NavbarWrapper: CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '360px',
        padding: '12px',
        gap: '6px',
    };
    const NavbarHomeButtonStyle: CSSProperties = {
        boxShadow: '2px 2px 5px rgba(185, 185, 185, 0.25)',
        width: '48px',
        height: '48px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '18px',
        padding: '0px',
    };
    const NavbarSearchButtonStyle: CSSProperties = {
        marginRight: '60px',
        boxShadow: '8px 8px 5px rgba(185, 185, 185, 0.25)',
        width: '48px',
        height: '48px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '22px',
        padding: '0px',
    };
    const NavbarStoreButtonStyle: CSSProperties = {
        marginLeft: '60px',
        marginTop: '-47.5px',
        boxShadow: '8px 8px 5px rgba(185, 185, 185, 0.25)',
        width: '48px',
        height: '48px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '20px',
        padding: '0px',
    };
    return (
        <nav style={NavbarWrapper}>
            <button style={NavbarHomeButtonStyle}>
                <img src={home} />
            </button>
            <div>
                <button style={NavbarSearchButtonStyle}>
                    <img src={search} />
                </button>
                <button style={NavbarStoreButtonStyle}>
                    <img src={store} />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
