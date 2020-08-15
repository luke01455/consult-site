import React from 'react';
import './cta-button.styles.scss';

const CtaButton = ({content, width}) => {
    return (
        <div className={`cta-button ${width}`}>
            {content}
        </div>
    )
}
export default CtaButton;