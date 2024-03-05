import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
const FooterStyles: CSSProperties = {
    position: 'absolute',
    borderTop: '2px solid rgba(128, 128, 128, 0.5)',
    bottom: '0',
    background: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '360px',
    width: '100%',
};
const FooterItemStyles: CSSProperties = {
    alignItems: 'center',
    color: '#fff',
    cursor: 'pointer',
    display: 'flex',
    flexBasis: '100%',
    justifyContent: 'center',
    minHeight: '48px',
};

const Footer: React.FC = () => {
    return (
        <>
            <div style={FooterStyles}>
                <Link to="/boardtest" style={FooterItemStyles}><img src="/test_img.svg" alt="test" style={{width: '20px', height: '20px'}}/></Link >
                <Link to="/myplant" style={FooterItemStyles}><img src="/potted_img.svg" alt="potted" style={{width: '18px', height: '20px'}}/></Link>
                <Link to="/community" style={FooterItemStyles}><img src="/diversity_img.svg" alt="diversity" style={{width: '24px', height: '19px'}}/></Link>
                <Link to="/myprofile" style={FooterItemStyles}><img src="/grid_img.svg" alt="grid" style={{width: '18px', height: '18px'}}/></Link>
            </div>
        </>
    );
};

export default Footer;
