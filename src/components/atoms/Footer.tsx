import React, { CSSProperties } from 'react';

const FooterStyles: CSSProperties = {
    position: 'absolute',
    bottom: '0',
    background: 'black',
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
                <li style={FooterItemStyles}>푸릇푸릇</li>
                <li style={FooterItemStyles}>푸릇푸릇</li>
                <li style={FooterItemStyles}>푸릇푸릇</li>
                <li style={FooterItemStyles}>푸릇푸릇</li>
            </div>
        </>
    );
};

export default Footer;
