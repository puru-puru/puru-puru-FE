import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSProperties } from 'styled-components';
import home from '../../assets/home.svg';
import mainLogo from '../../assets/mainlogo.svg';
// import search from '../../assets/search.svg';
// import store from '../../assets/storefront.svg';

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    // 홈 버튼 클릭시 메인 페이지 이동
    const handleHomeButton = () => {
        navigate('/mainpage');
    };
    const NavbarWrapper: CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '360px',
        padding: '10px',
        gap: '6px',
    };
    const NavbarHomeButtonStyle: CSSProperties = {
        boxShadow: '8px 8px 5px rgba(185, 185, 185, 0.25)',
        width: '48px',
        height: '48px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '18px',
        padding: '0px',
        backgroundColor: '#FFFFFF',
    };
    // const NavbarSearchButtonStyle: CSSProperties = {
    //     marginRight: '60px',
    //     boxShadow: '8px 8px 5px rgba(185, 185, 185, 0.25)',
    //     width: '48px',
    //     height: '48px',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: '22px',
    //     padding: '0px',
    // };
    // const NavbarStoreButtonStyle: CSSProperties = {
    //     marginLeft: '60px',
    //     marginTop: '-47.5px',
    //     boxShadow: '8px 8px 5px rgba(185, 185, 185, 0.25)',
    //     width: '48px',
    //     height: '48px',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: '20px',
    //     padding: '0px',
    // };
    return (
        <nav style={NavbarWrapper}>
            <div style={{ padding: '10px 10px' }}>
                <img src={mainLogo} />
            </div>
            {/* MVP 이후 구현 */}
            {/*<div>
                <button style={NavbarSearchButtonStyle}>
                    <img src={search} />
                </button>
                <button style={NavbarStoreButtonStyle}>
                    <img src={store} />
                </button>
            </div> */}
            <button onClick={handleHomeButton} style={NavbarHomeButtonStyle}>
                <img src={home} />
            </button>
        </nav>
    );
};

export default Navbar;
