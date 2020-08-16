import React from 'react';

import './squad-card.styles.scss';

const ServicesCard = ({ name, title, number, email, imgLoc }) => {
    return (
        <div className='squad-card-container'>
            <div className='squad-card-wrapper'>
                <div className='squad-card-image'>
                <img className='squad-picture' src={require('../../assetts/squad/' + imgLoc + '.jpg')}/>
                </div>
                <div className='squad-card-bottom-text'>
                    <h4>{name}</h4>
                    <p>{title}</p>
                    <p>{number}</p>
                    <p>{email}</p>
                    <img />
                </div>
            </div>
        </div>
    )
}
export default ServicesCard;