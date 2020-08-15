import React from 'react';
import ClientCard from './client-card/client-card.component'

import './clients-section.styles.scss';

const ClientsSection = () => {
    return (
        <div className='clients-section-container'>
            <div className='clients-section-wrapper'>
                <div className='half-client-cards'>
                    <div className='quarter-client-cards'>
                        <ClientCard clientName='ALMA' imgSrc='alma-logo'/>
                        <ClientCard clientName='Fonecta' imgSrc='fonecta-logo'/>
                    </div>
                    <div className='quarter-client-cards'>
                        <ClientCard clientName='Friends and Brgrs' imgSrc='friendsbrgrs'/>
                        <ClientCard clientName='Kokkikartano' imgSrc='kokkikartano-logo'/>
                    </div>
                </div>
                <div className='half-client-cards'>
                    <div className='quarter-client-cards'>
                        <ClientCard clientName='Komplett Bank' imgSrc='mutti'/>
                        <ClientCard clientName='Mutti' imgSrc='snellman-logo'/>
                    </div>
                    <div className='quarter-client-cards'>
                        <ClientCard clientName='Snellman' imgSrc='unilever-logo'/>
                        <ClientCard clientName='Unilever' imgSrc='alma-logo'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ClientsSection;