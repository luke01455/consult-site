import React from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss'
import './cases-swiper.styles.scss'

const CasesSwiperMob = () => {

    const params = {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    }
    return (        
    <Swiper {...params}>
        <div className='cases-swiper-card-container1'>
            <div className='cases-swiper-card-wrapper1'>
                <div className='cases-swiper-card-image1'>
                <img className='cases-swiper-picture1' src={require('../../../assetts/' + 'snellman-tuloksellista-yhteistyota-jo-vuodesta-2010-7-800x650-c-default' + '.jpg')}/>
                </div>
                <div className='cases-swiper-card-bottom-text1'>
                    <h4>Snellman</h4>
                    <p>Productive collaboration since 2010</p>
                </div>
            </div>
        </div>
        <div className='cases-swiper-card-container1'>
            <div className='cases-swiper-card-wrapper1'>
                <div className='cases-swiper-card-image1'>
                <img className='cases-swiper-picture1' src={require('../../../assetts/' + 'snellman-tuloksellista-yhteistyota-jo-vuodesta-2010-7-800x650-c-default' + '.jpg')}/>
                </div>
                <div className='cases-swiper-card-bottom-text1'>
                    <h4>Snellman</h4>
                    <p>Productive collaboration since 2010</p>
                </div>
            </div>
        </div>
        <div className='cases-swiper-card-container1'>
            <div className='cases-swiper-card-wrapper1'>
                <div className='cases-swiper-card-image1'>
                <img className='cases-swiper-picture1' src={require('../../../assetts/' + 'snellman-tuloksellista-yhteistyota-jo-vuodesta-2010-7-800x650-c-default' + '.jpg')}/>
                </div>
                <div className='cases-swiper-card-bottom-text1'>
                    <h4>Snellman</h4>
                    <p>Productive collaboration since 2010</p>
                </div>
            </div>
        </div>
        <div className='cases-swiper-card-container1'>
            <div className='cases-swiper-card-wrapper1'>
                <div className='cases-swiper-card-image1'>
                <img className='cases-swiper-picture1' src={require('../../../assetts/' + 'snellman-tuloksellista-yhteistyota-jo-vuodesta-2010-7-800x650-c-default' + '.jpg')}/>
                </div>
                <div className='cases-swiper-card-bottom-text1'>
                    <h4>Snellman</h4>
                    <p>Productive collaboration since 2010</p>
                </div>
            </div>
        </div>
        <div className='cases-swiper-card-container1'>
            <div className='cases-swiper-card-wrapper1'>
                <div className='cases-swiper-card-image1'>
                <img className='cases-swiper-picture1' src={require('../../../assetts/' + 'snellman-tuloksellista-yhteistyota-jo-vuodesta-2010-7-800x650-c-default' + '.jpg')}/>
                </div>
                <div className='cases-swiper-card-bottom-text1'>
                    <h4>Snellman</h4>
                    <p>Productive collaboration since 2010</p>
                </div>
            </div>
        </div>
        <div className='cases-swiper-card-container1'>
            <div className='cases-swiper-card-wrapper1'>
                <div className='cases-swiper-card-image1'>
                <img className='cases-swiper-picture1' src={require('../../../assetts/' + 'snellman-tuloksellista-yhteistyota-jo-vuodesta-2010-7-800x650-c-default' + '.jpg')}/>
                </div>
                <div className='cases-swiper-card-bottom-text1'>
                    <h4>Snellman</h4>
                    <p>Productive collaboration since 2010</p>
                </div>
            </div>
        </div>
    </Swiper>
    
    )
}
export default CasesSwiperMob;
