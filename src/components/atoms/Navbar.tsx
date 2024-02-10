import React from 'react';
import { CSSProperties } from 'styled-components';
// import
const Navbar: React.FC = () => {
    const NavbarStyle: CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
    };
    return (
        <>
            <div style={NavbarStyle}>
                <button>클릭</button>
                <div>
                    <button>클릭</button>
                    <button>클릭</button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
