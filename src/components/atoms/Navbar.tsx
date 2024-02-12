import React from 'react';
import { CSSProperties } from 'styled-components';
import { GrHomeRounded } from 'react-icons/gr';
import { IoIosSearch } from 'react-icons/io';
import { MdStorefront } from 'react-icons/md';

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
        fontSize: '13px',
    };
    const NavbarSearchButtonStyle: CSSProperties = {
        marginRight: '60px',
        boxShadow: '2px 2px 5px rgba(185, 185, 185, 0.25)',
        width: '48px',
        height: '48px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '13px',
    };
    const NavbarStoreButtonStyle: CSSProperties = {
        marginLeft: '60px',
        marginTop: '-47.5px',
        boxShadow: '2px 2px 5px rgba(185, 185, 185, 0.25)',
        width: '48px',
        height: '48px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '13px',
    };
    return (
        <nav style={NavbarWrapper}>
            <button style={NavbarHomeButtonStyle}>
                <GrHomeRounded />
            </button>
            <div>
                <button style={NavbarSearchButtonStyle}>
                    <IoIosSearch />
                </button>
                <button style={NavbarStoreButtonStyle}>
                    <MdStorefront />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
