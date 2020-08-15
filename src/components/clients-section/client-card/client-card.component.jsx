import React from 'react';
import './client-card.styles.scss';
const ClientCard = ({imgSrc, clientName}) => {
    return (
        <div className='client-card-container'>
            <div className='client-picture-container'>
                <img className='client-picture' src={require('../../../assetts/clients/' + imgSrc + '.png')}></img>
            </div>
            <div className='client-name-container'>
                <h4> {clientName}</h4>
            </div>
        </div>
    )
}
export default ClientCard;