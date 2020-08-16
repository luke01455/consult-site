import React, { useState, useEffect } from 'react';
import Header from '../../components/header/header.component'
import ServicesCard from './services-card/services-card.component'
import Footer from '../../components/footer/footer.component'
import './services-page.styles.scss';

const ServicesPage = () => {
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = (e) => {
        setScrollTop(e.target.documentElement.scrollTop);
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
    }, []);
    return (
        <div className='services-page-container'>
            <Header scrollLocation={scrollTop} />
            <div className='services-page-wrapper'>
                <h1> Our Services </h1>
                <div className='services-text-wrapper'>
                    <p>Are you ready to move on from traditional marketing and enter the world of digital,
                    truly result-driven marketing? We help your company make use of digital tools and channels
                    and employ growth hacking methods to help you grow bigger and beat your competitors.</p>
                    <p>We are here to help you all along the way – from creating your marketing strategy to actually
                    putting it into practice. What is more, we also take responsibility for the results.
                    “Good enough” does not belong to our vocabulary. Our clients are helped by a team that consists
                          of account managers, growth hackers, designers, copywriters and developers.</p>
                </div>
                <div className='services-cards-container'>
                    <div className='services-card-half'>
                        <ServicesCard
                            title='Growth Marketing Strategy'
                            description='Growth Hacking means that we work out which channels, 
                        tools and messages are the best ones for making your company grow. With the help of growth 
                        hacking we find the target audience that is relevant to your company, increase the traffic to your website, 
                        lower your marketing costs in all digital channels and increase conversions.'
                            image='webbutveckling-2'
                        />
                        <ServicesCard
                            title='Growth Hacking'
                            description='Growth Hacking means that we work out which channels, 
                            tools and messages are the best ones for making your company grow. With 
                            the help of growth hacking we find the target audience that is relevant 
                            to your company, increase the traffic to your website, lower your marketing 
                            costs in all digital channels and increase conversions.'
                            image='webbutveckling-3'
                        />
                    </div>
                    <div className='services-card-half'>
                        <ServicesCard
                            title='Design and Copywriting'
                            description='Nowadays, reaching a target audience requires communication that is more
                             personalized than ever before. Consequently, the need for creative marketing solutions 
                             is also greater than ever before. For each of your target audiences, we tailor both
                              a visual and a textual message that will resonate with them. If necessary, we will 
                              also be in personal communication with your customers.'
                            image='webbutveckling-4'
                        />
                        <ServicesCard
                            title='Web Design'
                            description='Your website should always be designed to support your business. We design and 
                            build websites that attract more conversions, leads and new customers and thus increase the
                             sales of your company. We also make sure that your site is in the top results when a potential
                              customer uses a search engine to find the products or services that you offer.'
                            image='webbutveckling-5'
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default ServicesPage;