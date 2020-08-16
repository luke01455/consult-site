import React from 'react';
import { Link } from 'react-router-dom'
import './cta-button.styles.scss';

const CtaButton = ({content, width, toLoc}) => {
    return (
        <Link to={toLoc} className={`cta-button ${width}`}>
            {content}
        </Link>
    )
}
export default CtaButton;