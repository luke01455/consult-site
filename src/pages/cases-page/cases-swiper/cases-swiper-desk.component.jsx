import React from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss'
import './cases-swiper.styles.scss'

const CasesSwiperMob = () => {

    const params = {
        slidesPerView: 3,
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
                    <h4>OK Perinta</h4>
                    <p>A new strategy and brand update made OK Perintä a market forerunner</p>
                </div>
            </div>
        </div>
        <div className='cases-swiper-card-container1'>
            <div className='cases-swiper-card-wrapper1'>
                <div className='cases-swiper-card-image1'>
                <img className='cases-swiper-picture1' src={require('../../../assetts/' + 'snellman-tuloksellista-yhteistyota-jo-vuodesta-2010-7-800x650-c-default' + '.jpg')}/>
                </div>
                <div className='cases-swiper-card-bottom-text1'>
                    <h4>Mr. Panini</h4>
                    <p>A hugely successful product launch in social media</p>
                </div>
            </div>
        </div>
        <div className='cases-swiper-card-container1'>
            <div className='cases-swiper-card-wrapper1'>
                <div className='cases-swiper-card-image1'>
                <img className='cases-swiper-picture1' src={require('../../../assetts/' + 'snellman-tuloksellista-yhteistyota-jo-vuodesta-2010-7-800x650-c-default' + '.jpg')}/>
                </div>
                <div className='cases-swiper-card-bottom-text1'>
                    <h4>MUSH</h4>
                    <p>A new custom-made high-end WordPress site</p>
                </div>
            </div>
        </div>
        <div className='cases-swiper-card-container1'>
            <div className='cases-swiper-card-wrapper1'>
                <div className='cases-swiper-card-image1'>
                <img className='cases-swiper-picture1' src={require('../../../assetts/' + 'snellman-tuloksellista-yhteistyota-jo-vuodesta-2010-7-800x650-c-default' + '.jpg')}/>
                </div>
                <div className='cases-swiper-card-bottom-text1'>
                    <h4>MB-Mobile</h4>
                    <p>A platform for car sales, own media and marketing MB-Mobile...</p>
                </div>
            </div>
        </div>
    </Swiper>
    
    )
}
export default CasesSwiperMob;
