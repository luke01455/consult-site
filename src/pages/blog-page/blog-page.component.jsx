import React, { useState, useEffect } from 'react';
import Header from '../../components/header/header.component'
import BlogCard from './blog-card/blog-card.component'
import Footer from '../../components/footer/footer.component'
import BlogSectionDesk from '../../components/blog-section/blog-section-desk.component'
import BlogSectionMob from '../../components/blog-section/blog-section-mob.component'
import './blog-page.styles.scss';

const BlogPage = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const [mediaQ, setMediaQ] = useState(0);
    const [mediaMidQ, setMediaMidQ] = useState(0);
  
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
    }
    
    useEffect(() => {
      window.addEventListener('scroll', onScroll)
      setMediaQ(window.matchMedia("(max-width: 1100px)"))
      setMediaMidQ(window.matchMedia("(max-width: 1280px)"))
    }, []);
    return (
        <div className='blog-page-container'>
            <Header scrollLocation={scrollTop} />
            <div className='blog-page-wrapper'>
                <h1> THE GROWTH MARKETING BLOG </h1>
                <div className='blog-text-wrapper'>
                    <p>Genero’s blog sheds light on all things that are related to growth marketing.</p>
                    <p>Take heed of our tips and you see how your marketing efforts improve your company’s sales and boost its growth.</p>
                </div>
                <div className='blog-card-container'>
                    <BlogCard title='How to measure marketing relevancy?'
                        text='Ultimately your relevancy boils down to how well your business stays afloat. 
                    But there’s more to it. If your product or service isn’t relevant for the market...'
                        imgLoc='how-to-measure-marketing-relevancy-730x592-c-default' />
                    <BlogCard title='Amazon is coming to the Nordics!'
                        text='Amazon has confirmed that they will be launching their new marketplace in Sweden.
                         No exact launch date has been announced, however we can assume it to be only a matter of weeks....'
                        imgLoc='amazon-kommer-till-norden-730x592-c-default' />
                    <BlogCard title='Genero Summer Greetings 2020'
                        text='This year has been a very challenging year for most businesses. I will remember the week Covid-19
                         hit Finland and our business...'
                        imgLoc='genero-summer-greetings-2020-7-730x592-c-default' />
                </div>
                <div className='blog-card-container'>
                    <BlogCard title='Why being relevant can make or break your digital marketing efforts?'
                        text='Every single interaction between your business and your target audience is important. How you
                         should engage with them depends on the stage and circumstance they are in...'
                        imgLoc='how-to-measure-marketing-relevancy-730x592-c-default' />
                    <BlogCard title='Free consultation meeting for difficult times'
                        text='This question was on the minds of all of us as we moved into long-distance working on Friday for
                         weeks to come. Many small and medium-sized enterprises, in particular, are in a dire...'
                        imgLoc='gratis-konsultering-for-att-hjalpa-i-utmanande-tider-730x592-c-default' />
                    <BlogCard title='Welcome to our new office in Stockholm'
                        text='Generon’s Stockholm office opened its doors in the trendy Södermalm area at the beginning of the year.
                         The office is located at Götgatan 22 A...'
                        imgLoc='tutustu-uuteen-toimistoomme-tukholmassa-730x592-c-default' />
                </div>
            </div>
            {mediaQ.matches ? <BlogSectionMob /> : mediaMidQ.matches ? <BlogSectionDesk/> : <div></div>}
            <Footer />
        </div>
    )
}
export default BlogPage;