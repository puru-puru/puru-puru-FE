import React, { CSSProperties } from 'react';

const FooterStyles: CSSProperties = {
    background: 'black',
    display: 'flex',
    justifyContent: 'space-between',
    left: '50%',
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
    minHeight: '80px',
    position: 'relative',
};

const Footer: React.FC = () => {
    return (
        <>
            <div style={FooterStyles}>
                <li style={FooterItemStyles}>푸릇푸릇</li>
                <li style={FooterItemStyles}>푸릇푸릇</li>
                <li style={FooterItemStyles}>푸릇푸릇</li>
                <li style={FooterItemStyles}>푸릇푸릇</li>
            </div>
        </>
    );
};

export default Footer;
