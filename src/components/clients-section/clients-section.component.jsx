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
                        <ClientCard clientName='Mutti' imgSrc='mutti'/>
                        <ClientCard clientName='Snellman' imgSrc='snellman-logo'/>
                    </div>
                    <div className='quarter-client-cards'>
                        <ClientCard clientName='Unilever' imgSrc='unilever-logo'/>
                        <ClientCard clientName='Komplett Bank' imgSrc='komplett-logo'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ClientsSection;