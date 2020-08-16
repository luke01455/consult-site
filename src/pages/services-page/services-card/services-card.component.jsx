import React from 'react';
import CTAButton from '../../../components/cta-button/cta-button.component'

import './services-card.styles.scss';

const ServicesCard = ({ title, description, image }) => {
    return (
        <div className='services-card-container'>
            <div className='services-card-wrapper'>
                <div className='title-img-container'>
                <img className='service-picture' src={require('../../../assetts/icons/' + image + '.svg')}/>
                    <h2>{title}</h2>
                </div>
                <div className='services-card-container'>
                    <p>{description}</p>
                </div>
               
            </div>
            <div className='service-button-container'>
                <CTAButton content='Read More'/>
            </div>
        </div>
    )
}
export default ServicesCard;