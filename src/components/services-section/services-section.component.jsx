import React from 'react';
import ServicesIcon from './services-icon/services-icon.component'
import CTAButton from '../cta-button/cta-button.component'
import './services-section.styles.scss';

const ServicesSection = () => {
    return (
        <div className='services-section-container'>
            <div className='services-section-wrapper'>
                <div className='services-text'>
                    <h2>Growth marketing for those who aim high</h2>
                    <p>Genero’s aim is to help our customer companies grow and achieve better results. 
                        That is why we focus on measurable digital marketing. Pleasant statistics alone are not enough to satisfy us — we measure,
                        test and make sure that everything we do really works.</p>
                </div>
                <div className='icons-container'>
                    <div className='icons-container-half'>
                    <ServicesIcon iconNumber={3} iconContent='Growth Marketing Strategy'/>
                    <ServicesIcon iconNumber={2} iconContent='Growth Hacking'/>
                    </div>
                    <div className='icons-container-half'>
                    <ServicesIcon iconNumber={1} iconContent='Design and Copywriting'/>
                    <ServicesIcon iconNumber={4} iconContent='Web Design'/>
                    </div>
                </div>
                <div className='services-cta-container'>
                    <CTAButton width='wider' content='Have a look at our services!'/>
                </div>
            </div>
        </div>
    )
}
export default ServicesSection;