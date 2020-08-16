import React from 'react'

import './cases-wrapper.styles.scss'

import mainImg from '../../../assetts/snellman-tuloksellista-yhteistyota-jo-vuodesta-2010-7-800x650-c-default.jpg'
import sideImg1 from '../../../assetts/ok-perinta-growth-marketing-strategialla-alansa-suunnannayttajaksi-3-800x650-c-default.jpg'
import sideImg2 from '../../../assetts/mr-panini-using-social-media-to-launch-a-vegan-panini-800x308-c-default.jpg'

function CasesWrapper() {

    return (
        <div className='cases-wrapper'>
            <div className='cases-header'>
                <h1> CASES </h1>
                <p>Read about the work we have done for our clients and what results we have helped them achieve.</p>
                <div className='cases-section-container'>
                    <div className='cases-images'>
                        <div className='left-images-container'>
                            <img src={mainImg} />
                            <h4>Snellman</h4>
                            <p>Productive collaboration since 2010</p>
                        </div>
                        <div className='right-images-container'>
                            <img className='top-img-container' src={sideImg1} />
                            <div className='text-section-top'>
                                <h4>OK Perinta</h4>
                                <p>A new strategy and brand update made OK Perintä a market forerunner</p>
                            </div>

                            <img className='bottom-img-container' src={sideImg2} />
                            <div className='text-section-bottom'>
                                <h4>Mr. Panini</h4>
                                <p>A hugely successful product launch in social media</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CasesWrapper;