import React from 'react';
import { ReactComponent as ReactLogo1 } from '../../../assetts/icons/webbutveckling-2.svg'
import { ReactComponent as ReactLogo2 } from '../../../assetts/icons/webbutveckling-3.svg'
import { ReactComponent as ReactLogo3 } from '../../../assetts/icons/webbutveckling-4.svg'
import { ReactComponent as ReactLogo4 } from '../../../assetts/icons/webbutveckling-5.svg'

import './services-icon.styles.scss';

const ServicesIcon = ({ iconNumber, iconContent }) => {

    return (
        <div className='icon-instruction-wrapper'>
            <div className='icon-instruction'> {iconNumber === 1 ? <ReactLogo1 /> : iconNumber === 2 ? <ReactLogo2 />: iconNumber === 3 ? <ReactLogo3 /> : <ReactLogo4 />} </div>
            <div className='service-icon-text'>
                <h2 >{iconContent}</h2>
            </div>
           
        </div>
    )
}
export default ServicesIcon;