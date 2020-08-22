import React from 'react'
import Swiper from 'react-id-swiper';
import SquadCard from '../../components/squad-card/squad-card.component'
import 'swiper/swiper.scss'
import './squad-swiper.styles.scss'

const SquadSwiper = () => {

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
        <div className='squad-card-container1'>
            <div className='squad-card-wrapper1'>
                <div className='squad-card-image1'>
                <img className='squad-picture1' src={require('../../assetts/squad/' + 'sebastian-ostman-4-520x540-c-default' + '.jpg')}/>
                </div>
                <div className='squad-card-bottom-text1'>
                    <h4>Sebastian Östman</h4>
                    <p>COO and Co-founder</p>
                    <p>+358 50 308 4196</p>
                    <p>sebastian@genero.fi</p>
                    <img />
                </div>
            </div>
        </div>
        <div className='squad-card-container1'>
            <div className='squad-card-wrapper1'>
                <div className='squad-card-image1'>
                <img className='squad-picture1' src={require('../../assetts/squad/' + 'rasmus-ostman-4-520x540-c-default' + '.jpg')}/>
                </div>
                <div className='squad-card-bottom-text1'>
                    <h4>Rasmus Östman</h4>
                    <p>CEO and Co-founder</p>
                    <p>+358 40 742 9523</p>
                    <p>rasmus@genero.fi</p>
                    <img />
                </div>
            </div>
        </div>
        <div className='squad-card-container1'>
            <div className='squad-card-wrapper1'>
                <div className='squad-card-image1'>
                <img className='squad-picture1' src={require('../../assetts/squad/' + 'jonathan-bjorkskog-5-520x540-c-default' + '.jpg')}/>
                </div>
                <div className='squad-card-bottom-text1'>
                    <h4>Jonathan Björkskog</h4>
                    <p>Co-founder and Director</p>
                    <p>+358 50 539 4288</p>
                    <p>jonathan@genero.fi</p>
                    <img />
                </div>
            </div>
        </div>
        <div className='squad-card-container1'>
            <div className='squad-card-wrapper1'>
                <div className='squad-card-image1'>
                <img className='squad-picture1' src={require('../../assetts/squad/' + 'christopher-oksman-5-520x540-c-default' + '.jpg')}/>
                </div>
                <div className='squad-card-bottom-text1'>
                    <h4>Christopher Oksman</h4>
                    <p>Country Manager Sweden</p>
                    <p>+358 40 736 0733</p>
                    <p>christopher@genero.fi</p>
                    <img />
                </div>
            </div>
        </div>
    </Swiper>
    
    )
}
export default SquadSwiper;
