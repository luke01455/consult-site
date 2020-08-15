import React from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss'
import './blog-swiper.styles.scss'

const BlogSwiper = () => {
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
            <div className='width-heightpls'>1</div>
            <div className='width-heightpls'>2</div>
            <div className='width-heightpls'>3</div>
            <div className='width-heightpls'>4</div>
            <div className='width-heightpls'>5</div>
            <div className='width-heightpls'>6</div>
        </Swiper>
    )
}
export default BlogSwiper;