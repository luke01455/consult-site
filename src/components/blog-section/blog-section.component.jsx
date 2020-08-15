import React from 'react'
import CTAButton from '../cta-button/cta-button.component'
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss'
import './blog-section.styles.scss'
import blogimg1 from '../../assetts/blogs/how-to-measure-marketing-relevancy-730x592-c-default.png'
import blogimg2 from '../../assetts/blogs/amazon-kommer-till-norden-730x592-c-default.png'
import blogimg3 from '../../assetts/blogs/genero-summer-greetings-2020-7-730x592-c-default.png'
import blogimg4 from '../../assetts/blogs/gratis-konsultering-for-att-hjalpa-i-utmanande-tider-730x592-c-default.png'
import blogimg5 from '../../assetts/blogs/tutustu-uuteen-toimistoomme-tukholmassa-730x592-c-default.png'

const BlogSection = () => {
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
            <div className='blog-item'>
                <img className='blog-img' src={blogimg1} />
                <div className='blog-text-container'>
                    <h1>How to measure marketing relevancy?</h1>
                    <p> Ultimately your relevancy boils down to how well your business stays afloat. But there’s more to it... </p>
                    <a> Read more </a>
                </div>
            </div>
            <div className='blog-item'>
                <img className='blog-img' src={blogimg2} />
                <div className='blog-text-container'>
                    <h1>Free consultation meeting for difficult times</h1>
                    <p>This question was on the minds of all of us as we moved into long-distance working on Friday for weeks to come. Many small and medium-sized enterprises, in particular, are in a dire situation because</p>
                    <a> Read more </a>
                </div>
            </div>
            <div className='blog-item'>
                <img className='blog-img' src={blogimg3} />
                <div className='blog-text-container'>
                    <h1>Genero Summer Greetings 2020</h1>
                    <p>This year has been a very challenging year for most businesses. I will remember the week Covid-19 hit Finland and our business for many years to come...</p>
                    <a> Read more </a>
                </div>
            </div>
            <div className='blog-item'>
                <img className='blog-img' src={blogimg1} />
                <div className='blog-text-container'>
                    <h1>Why being relevant can make or break your digital marketing efforts?</h1>
                    <p>Every single interaction between your business and your target audience is important. How you should engage with them depends on the stage...</p>
                    <a> Read more </a>
                </div>
            </div>
            <div className='blog-item'>
                <img className='blog-img' src={blogimg4} />
                <div className='blog-text-container'>
                    <h1>Free consultation meeting for difficult times</h1>
                    <p>This question was on the minds of all of us as we moved into long-distance working on Friday for weeks to come. Many small...</p>
                    <a> Read more </a>
                </div>
            </div>
            <div className='blog-item'>
                <img className='blog-img' src={blogimg5} />
                <div className='blog-text-container'>
                    <h1>Welcome to our new office in Stockholm</h1>
                    <p>Generon’s Stockholm office opened its doors in the trendy Södermalm area at the beginning of the year. The office is located at Götgatan 22 A...</p>
                    <a> Read more </a>
                </div>
            </div>
        </Swiper>
    )
}
export default BlogSection;
