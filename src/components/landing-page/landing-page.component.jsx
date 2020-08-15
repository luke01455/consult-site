import React from 'react';
import Header from '../header/header.component'
import CTAButton from '../cta-button/cta-button.component'
import mp4vid from '../../assetts/vid/coverr-someone-puts-on-the-headphones-0933.mp4'

import './landing-page.styles.scss';

const LandingPage = ({scrollLocation}) => {
    return (
        <div className='landing-page-wrapper'>
                            <video className='videoTag' autoPlay loop muted>
                    <source src={mp4vid} type='video/mp4' />
                </video>
            <div className='landing-page-container'>

                <Header scrollLocation={scrollLocation}/>
                <div className='cta-container'>
                    <h1>THE GROWTH MARKETING CO</h1>
                    <CTAButton content='Get in Touch!' />
                </div>
            </div>
        </div>
    )


}
export default LandingPage;